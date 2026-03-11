# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-03-11

### Added
- **Client Management**:
    - Created `CreateClient.jsx` modal for adding new clients.
    - Created `EditClient.jsx` modal for updating client information.
    - Integrated "Add Client" button in `Topbar.jsx` for the Clients view.
    - Added "Edit" action to the Clients table in `Clients.jsx`.
- **TimeZone Display**:
    - Implemented real-time timezone display in `Navbar.jsx`, `ClientNavbar.jsx`, and `Header.jsx`.
    - Unified clock styling across all panels with `sky-400` color and timezone suffix.
- **Sidebar Accessibility**:
    - Added a permanent toggle button for the Sidebar in `Navbar.jsx` (Admin panel) to ensure navigation is always accessible.

### Fixed
- **Form Validation**:
    - Refactored `CreateEmployee.jsx` and `CreateClient.jsx` to use inline field-level validation instead of generic alerts/toasts.
    - Added strict validation for Phone (10-15 digits), Email format, and Required fields.
- **Bug Fixes**:
    - Fixed `navigate is not defined` error in `redux/action/user.js`.
    - Fixed `handleChange` vs `handleInputChange` mismatch in `Edit.jsx`.
    - Fixed Sidebar toggle logic in `Navbar.jsx` to work on all screen sizes.

### Improved
- **User UX**:
    - Improved feedback on forms by clearing errors dynamically as the user types.
    - Enhanced table actions for better management of client data.
