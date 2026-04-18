import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Получает RSVP-ответ гостя и отправляет уведомление на почту пары."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    attending = body.get('attending', 'yes')
    guests = body.get('guests', '1')
    comment = body.get('comment', '').strip()

    if not name:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя обязательно'}),
        }

    attending_text = 'Придёт' if attending == 'yes' else 'Не сможет прийти'
    guests_text = f'{guests} чел.' if attending == 'yes' else '—'
    comment_text = comment if comment else 'Не указано'

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; color: #4a3728;">
      <h2 style="color: #c4977a; font-weight: normal; font-style: italic; font-size: 28px;">
        Новый ответ на приглашение
      </h2>
      <hr style="border: none; border-top: 1px solid #f0e6e0; margin: 16px 0;" />
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #9e8070; font-size: 13px; width: 140px;">Гость</td>
          <td style="padding: 8px 0; font-size: 16px;"><strong>{name}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9e8070; font-size: 13px;">Статус</td>
          <td style="padding: 8px 0; font-size: 16px;">{attending_text}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9e8070; font-size: 13px;">Количество гостей</td>
          <td style="padding: 8px 0; font-size: 16px;">{guests_text}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #9e8070; font-size: 13px;">Пожелание</td>
          <td style="padding: 8px 0; font-size: 16px; font-style: italic;">{comment_text}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #f0e6e0; margin: 16px 0;" />
      <p style="color: #c4977a; font-size: 13px; text-align: center; font-style: italic;">
        С любовью, ваш свадебный сайт
      </p>
    </div>
    """

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    sender = 'mukhampedyanova@mail.ru'
    recipient = 'mukhampedyanova@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'RSVP: {name} — {attending_text}'
    msg['From'] = sender
    msg['To'] = recipient
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True}),
    }
