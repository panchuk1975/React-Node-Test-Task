# Backend Architecture Analysis

## 1. Overview
The backend of this project is built using:
- **Node.js** with **Express.js** as the web framework.
- **MongoDB** as the database, using **Mongoose** for ODM.
- **JSON Web Tokens (JWT)** for authentication.

## 2. Directory Structure (`server/`)
- `controllers/`: Contains the core business and logic handlers for API routes. 
- `middleware/`: Includes authentication, authorization, error-handling middleware.
- `models/`: Mongoose schemas defining the structure of collections (User, Lead, Project, Society, Inventory, etc.).
- `routes/`: Declares the API endpoints map, effectively mapping URL routes to controller functions.
- `utils/`: Helper functions or configurations (e.g., mail, OTP generators).

## 3. Database Schema Overview
Key models identified include:
- `user.js`: Stores user details, including their `role` (super_admin, manager, client).
- `lead.js`: Captures customer leads.
- `project.js`, `society.js`, `inventory.js`: For real estate project management and unit inventory tracking.
- `sale.js`, `cashbook.js`, `voucher.js`: For financial operations.

## 4. Key Behaviors & Mechanisms
- **Authentication**: JWT is used to sign sessions upon `/login`. OTP-based email verification is used for password recovery.
- **Role-Based Authorization**: A `user` object is populated with a `role` field. Privileges are then enforced on route endpoints.
- **Static Assets**: Documents and images are served statically via `/uploads`.

## 5. Potential Improvements
- Proper migration to `.env` based API URIs for the client, since the backend already supports `dotenv` well.
- Structured Error Handling: Already uses a custom `next(createError(...))` mechanism.
