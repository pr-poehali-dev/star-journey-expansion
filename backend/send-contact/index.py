import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с контактной формы на email ulanavitaleana@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните все поля'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'ulanavitaleana@mail.ru'
    recipient = 'ulanavitaleana@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка со сайта «Ступени» от {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #1a1a2e;">Новая заявка с сайта «Ступени»</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Имя:</td><td style="padding: 8px;">{name}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:{email}">{email}</a></td></tr>
        <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Сообщение:</td><td style="padding: 8px;">{message}</td></tr>
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }