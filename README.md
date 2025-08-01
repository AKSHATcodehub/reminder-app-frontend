# Online Reminder System

## Overview

The **Online Reminder System** is a full-stack application that allows users to:

- Sign up and log in securely.
- Create and manage multiple reminders.
- View a list of upcoming reminders.
- Receive **automated email notifications** at the scheduled time of each reminder.

The application is built using:
- **Frontend**: Angular (with SCSS styling)
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Email Service**: Nodemailer (via Gmail)

---

## 🚀 Features

### ✅ User Authentication
- Sign up and log in using email and password
- JWT-based session management

### 📅 Create Reminders
- Title, description, and scheduled date/time
- Stored securely with MongoDB

### 🔔 Email Notifications
- Automatically sends an email to the user at the reminder time
- Uses Nodemailer with a cron job running every minute

### 📃 View Upcoming Reminders
- Lists all future reminders created by the user
- Sorted by time, with formatted UI
