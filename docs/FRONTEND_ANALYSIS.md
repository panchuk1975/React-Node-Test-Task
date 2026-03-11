# Frontend Architecture Analysis

## 1. Overview
The frontend is a React application primarily using **Vite** for bundling.
- **Framework**: React.js 18.x
- **UI Components**: Material UI (MUI), CoreUI, Tailwind CSS for utility-first styling.
- **State Management**: Redux Toolkit for global state along with standard React Hooks.
- **Routing**: `react-router-dom` v6 for client-side routing.

## 2. Directory Structure (`client/src/`)
- `Pages/`: Organizes independent views of the app, corresponding directly to routes (Auth, Sales, DashBoard, Inventory, Leads).
- `Components/`: Stores reusable UI features including tables, sidebars, headers, and navbars.
- `redux/`: Contains Redux actions, reducers, and the store configuration.
- `utils/`: Client-side utilities or global constants (`constant.js` stores URLs and static data arrays).

## 3. Current Architecture Constraints
- **Global Constants (`constant.js`)**: Currently handles URLs manually instead of utilizing the `VITE_API_URL` environment variables.
- **Form Handling**: Validation occurs manually via custom React states (`userData`, `inputError`) without centralized form libraries (like React Hook Form/Formik/Zod), relying heavily on custom `validateForm` logic.
- **Styling**: Mixes traditional Tailwind classes, MUI components (`Input`, `FormControl`), and inline styling.

## 4. Required Modifications (Tasks Context)
As per the tasks identified in `README.md`:
1. **Header component needs structural updating** to fetch and display the local time zone (`client/src/Components/Header` probably).
2. **Employee Form** needs validation logic adjustments to display field-level validation text under the inputs rather than firing toasts/alerts.
3. **Clients Management**: Introducing a Client action layout involving new modals and edit features, requiring creating/modifying components in the views.
