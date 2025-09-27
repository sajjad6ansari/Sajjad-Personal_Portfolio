# EmailJS Configuration Instructions

To make your contact form work with EmailJS, follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email: sajjad6ansari@gmail.com
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services in EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail
4. Connect your Gmail account (sajjad6ansari@gmail.com)
5. Note the Service ID (e.g., "service_portfolio")

## 3. Create Email Template
1. Go to Email Templates
2. Click "Create New Template" 
3. Use this template:

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Note the Template ID (e.g., "template_portfolio")

## 4. Get Public Key
1. Go to Account > API Keys
2. Copy your Public Key

## 5. Update Contact.tsx
Replace these values in the Contact.tsx file:
- serviceId: 'service_portfolio' → Your actual Service ID
- templateId: 'template_portfolio' → Your actual Template ID  
- publicKey: 'YOUR_PUBLIC_KEY' → Your actual Public Key

## 6. Test the Form
After updating the keys, your contact form will send real emails to sajjad6ansari@gmail.com!

## Current Status
✅ EmailJS package installed
✅ Contact form updated with EmailJS integration
✅ Email addresses updated throughout portfolio
⏳ Waiting for EmailJS configuration

## Template Parameters Used
- from_name: User's name
- from_email: User's email
- subject: Message subject
- message: Message content
- to_email: sajjad6ansari@gmail.com (hardcoded)