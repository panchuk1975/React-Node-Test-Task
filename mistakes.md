# Bugs & Mistakes Log

1. **Incorrect Registration Validation Logic**
   - **Location**: `client/src/Pages/Auth/Register.jsx`
   - **Issue**: The `handleSubmit` function had:
     ```javascript
     if (validateForm()) { return; }
     ```
     This caused the function to exit *if* the form was valid, completely breaking the registration request.
   - **Fix**: Replaced it with:
     ```javascript
     if (!validateForm()) { return; }
     ```

2. **Hardcoded Base URLs inside Constants**
   - **Location**: `client/src/constant.js`
   - **Issue**: The base API URL and root URL were hardcoded strings (`http://localhost:4000/api/v1` and `http://localhost:4000`), ignoring the `.env` variable setup completely.
   - **Fix**: Updated `constant.js` to dynamically use `import.meta.env.VITE_API_URL`.
