# 🌟 Service Review System

A full-stack web application that allows users to post, manage, and review services across different categories. Built with MERN stack, this platform ensures a seamless user experience with protected routes, JWT authentication, and real-time interactivity.

## 🔗 Live Website

👉 [Live Preview](https://service-review-client-75e4a.web.app/)

## 🧰 Tech Stack

- **Frontend:** React.js, React Router DOM, Tailwind CSS, DaisyUI, Framer Motion, React CountUp
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Auth, JWT
- **UI Enhancements:** React Toastify, React Rating, React Icons
- **Deployment:** Client - Netlify/Firebase | Server - Vercel

---

## 📸 Screenshot

![ServiceReview Screenshot](./src/assets/images/services.png)

---

## 📋 Key Features

✅ User Authentication using Firebase  
✅ JWT Security for Protected Routes and APIs  
✅ Add, View, Update, and Delete Services  
✅ Add, Edit, and Delete Reviews  
✅Search Services  
✅ Real-time Countup Stats for Services, Users, and Reviews  
✅ Persistent Login without redirect on reload  
✅ Dynamic Route Titles  
✅ Fully Responsive Design  
✅ Sweet Alerts and Toasts for Feedback  
✅ 404 Page + Loading Spinner  
✅ Partner Section & Extra Sections for UX

---

## 🚀 Pages & Functionality

### 🏠 Home Page

- Banner Slider with highlights
- Featured Services (limited to 6)
- Meet Our Partners section
- Extra informational sections

### 🔐 Authentication

- Email & Password Login / Registration
- Google Login (Optional)
- Password Validation (Uppercase, Lowercase, 6+ characters)

### 📦 Add Service (Private)

- Fields: Image, Title, Company, Website, Category, Description, Price
- Auto-filled: Date, User Email
- Success Toast after submission

### 📋 All Services

- All service cards with Search by Category
- “See Details” → Service Detail Page

### 📝 Service Details Page

- Show detailed info
- Add Review (if logged in)
- Reviews show: Reviewer name, photo, rating, comment, and date

### 📁 My Services (Private)

- Table format listing services added by the logged-in user
- Update via modal
- Delete with confirmation

### 💬 My Reviews (Private)

- List of user's reviews with update/delete modals
- Service title is read-only

---

## 🛠️ API Endpoints (Base URL: `https://service-review-server-lovat-seven.vercel.app`)

### 🧍 User API (end points)

- `GET: /users` — Get all users
- `POST: /users` — Create a new user

---

### 🎨 Service API (end points)

- `GET: /services` — Get 6 featured services
- `GET: /allService` — Get all services (supports `searchParams` query for search/filter)
- `GET: /services/:id` — Get a single service by ID
- `POST: /services` — Add a new service (Requires Firebase JWT Auth)
- `PUT: /myServices/:id` — Update a service by ID (Requires Firebase JWT Auth)
- `DELETE: /myServices/:id` — Delete a service by ID (Requires Firebase JWT Auth)
- `GET: /myServices?email=<user-email>` — Get services added by a specific user (Requires Firebase JWT Auth + Email verification)

---

### 📝 Review API (end points)

- `GET: /allreview` — Get all reviews
- `GET: /review?email=<user-email>` — Get reviews made by a specific user (Requires Firebase JWT Auth + Email verification)
- `POST: /review` — Add a new review (Requires Firebase JWT Auth)
- `PATCH: /review/:id` — Update a review by ID (Requires Firebase JWT Auth)
- `DELETE: /review/:id` — Delete a review by ID (Requires Firebase JWT Auth)

---

### 🧩 Additional API

- `GET: /allService/review/:id` — Get all reviews for a particular service ID

## 🔐 JWT Implementation

- On login/register → JWT token issued and stored in client cookies
- All sensitive routes (POST, PATCH, DELETE) require token validation

---

## 📦 Client Installation

```bash
# Step 1: Clone the repo
git clone https://github.com/parvezreza55/serviceReview.git

# Step 2: Navigate into the directory
cd serviceReview

# Step 3: Install dependencies
npm install

# Step 4: Start the dev server
npm run dev
```

## 🔗 Relevant Links

Client Repo: [Repository](https://github.com/parvezreza55/serviceReview)

Live Site: [Live](https://service-review-client-75e4a.web.app/)
