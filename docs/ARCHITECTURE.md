# GrowCRM Technical Architecture

## 1. MERN Stack Overview
The application follows a traditional MERN (MongoDB, Express, React, Node) architecture designed for building the "GrowCRM" Real Estate Management Software.

## 2. Communication Protocol
The frontend makes API calls via `axios` typically encapsulated in Redux Action Creators. Responses are parsed, and Redux slices update the global state, forcing components to re-render.

## 3. Data Flow Example (Auth Login)
1. **Client**: User fills the fields in `client/src/Pages/Auth/Login.jsx`.
2. **Action**: Dispatches `login(userData, navigate)` from `client/src/redux/action/user.js`.
3. **API Call**: Makes an Axios POST to `/api/v1/auth/login`.
4. **Server Controller**: `auth.js` verifies the payload, hashes, compares with the DB via Mongoose.
5. **Server Response**: Sends back a JWT.
6. **Client Storage**: Redux saves the user, usually putting the token in localStorage and redirecting to `/` or the main dashboard.

## 4. Security
- Use of robust `bcrypt` hashing on the server-side.
- Custom authentication middlewares extracting tokens from `Authorization` headers.

## 5. Development Tasks (Current Focus)
The project currently requires updates to the UI, handling client modals, timezone display in the header, and field-level error messages in user forms instead of simple `toast` messages.
