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
- **Form Handling**: Validation has been migrated from generic alerts to **field-level inline validation**. Components like `CreateEmployee.jsx` and `CreateClient.jsx` now use localized state-based error reporting.
- **Styling**: Mixes traditional Tailwind classes, MUI components (`Input`, `FormControl`), and custom design tokens (e.g. `sky-400` for time-related elements).
- **Navigation**: Sidebar is now controllable via a persistent toggle in the Navbar, improving UX for desktop and tablet users.

## 4. Completed Tasks
1. **Header component updated**: Timezone display (`Intl.DateTimeFormat().resolvedOptions().timeZone`) integrated into all Navbars/Headers.
2. **Employee Form**: Migrated to inline state-based error references beneath inputs.
3. **Clients Management**: Full CRUD support implemented with dedicated Create/Edit modals and Topbar integration.
