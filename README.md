Campus Queue System Documentation

Project Overview

The Campus Queue System is a web-based platform that allows students to join service queues remotely and track their position in real time. It helps eliminate long physical queues across campus units such as ICT centers, administrative departments, and registration offices.

---

Key Features

* Student Queue Registration
* Real-Time Queue Updates
* Optional Turn Notifications
* Admin Dashboard for Managing Queues
* User Authentication
* Responsive and User-Friendly Interface

---

System Architecture

The system follows a client–server architecture.

* Frontend: React.js, CSS
* Backend: Express.js
* Database: MongoDB

---

Tools and Technologies Used

* React.js
* CSS
* Express.js
* MongoDB
* Git and GitHub
* Postman

---

Installation

1. Clone the repository

```bash
git clone https://github.com/<your-team>/<repo-name>.git
```

2. Navigate into the project directory

```bash
cd <repo-name>
```

3. Install dependencies

Client

```bash
cd client
npm install
```

Server

```bash
cd server
npm install
```

4. Create a .env file in the server folder

```
PORT=5000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the development servers

Client

```bash
npm start
```

Server

```bash
npm run dev
```

---

Usage Guide

For Students

* Create an account or log in
* View available queues
* Join a queue
* Track your current position

For Admins

* Log in to the admin dashboard
* Create and manage service queues
* Monitor queue statistics

---

Contribution Workflow (GitHub Collaboration)

Branching Strategy

* main – Production-ready code
* dev – Development integration branch
* feature/<name> – Individual feature branches

Workflow

1. Create a feature branch
2. Implement your assigned task
3. Commit with meaningful messages
4. Open a Pull Request (PR)
5. Team review and approval
6. Merge into dev
7. Merge dev into main after testing

---

Team Roles and Contributions

Frontend Development

* enasemmy (Emmanuel Enaohwo): Navbar functionality
* Esther Oluyemi: Admin and Dashboard pages
* witvhdoctor (Dike Ugonna): Home page and styling
* Olasubomi Omoloju: Login and Queue pages
* IniabasiDomingo: Register page and API
* Daveamhs16 (David Ahmed): App.js setup

Backend Development

* Tope Omodunbi: User and  Queue models with auth middleware, Node modules setup.
* Enyiora Ifeanyi: Authentication, queue and service routes
* KEZ-collab (Ebere Zidane): Admin account and packages
* Tobiloba Adebayo: Server file

Documentation

* Esther Oluyemi
* Olasubomi Omoloju

---

Testing

* Manual testing of user flows
* Postman used for API validation
* Authentication, queue creation, and queue updates tested
* Browser compatibility checks performed

---

Challenges and Solutions

Challenges

* Ensuring frontend and backend API consistency
* Environment setup issues among team members

Solutions

* Frequent team sync-up meetings
* Debugging using Postman and console logs

---

Future Improvements

* Add SMS or email notifications
* Integrate queue analytics
* Implement WebSocket-based real-time updates
* Build a mobile app
* Improve accessibility features

---

Acknowledgements

* Open-source libraries and tools
* GitHub community
* Lecturer and team members

---
