# EmailJS Setup Instructions

Your contact form is now integrated with EmailJS! Follow these steps to activate it:

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, click "Add Email Service"
2. Choose your email provider (Gmail recommended)
3. Connect your email: `aaravuniyal1@gmail.com`
4. Follow the authentication steps

### 3. Create Email Template
1. Click "Add New Template"
2. Template Name: `Portfolio Contact`
3. Template ID will be generated (copy this)
4. Set up template content:

**Subject:** `New Portfolio Contact from {{from_name}}`

**Email Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
Sent from your portfolio contact form
```

### 4. Get Your Keys
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**
3. Go to "Email Services" → Copy your **Service ID**
4. Go to "Templates" → Copy your **Template ID**

### 5. Update Your Code
Replace these values in `src/components/Contact.jsx`:

```javascript
// Line 28 - Replace with your actual Service ID
"service_portfolio_contact"

// Line 29 - Replace with your actual Template ID  
"template_portfolio_contact"

// Line 31 - Replace with your actual Public Key
"YOUR_PUBLIC_KEY"
```

## 🎯 Features Now Available

✅ **Real Email Sending** - Messages go directly to your inbox  
✅ **Form Validation** - All fields required  
✅ **Loading States** - Shows "Sending..." while processing  
✅ **Error Handling** - Shows error messages if something fails  
✅ **Success Feedback** - "Message Sent! ✓" confirmation  
✅ **Form Reset** - Clears form after successful submission  

## 📧 Test Your Form

1. After setup, test your contact form
2. Check your email: `aaravuniyal1@gmail.com`
3. You should receive messages immediately!

## 🔧 Troubleshooting

**If emails don't arrive:**
- Check EmailJS dashboard for delivery status
- Verify your service is connected properly
- Make sure all keys are correct

**Free Plan Limits:**
- 200 emails per month
- 3 email services
- 2 templates per service

## 🚀 Ready to Go!

Once you complete the EmailJS setup, your contact form will be fully functional and you'll start receiving client inquiries directly in your inbox!
