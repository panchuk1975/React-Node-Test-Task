# Execution Plan
**Total Progress %**: 0%

## Overview
This plan outlines the step-by-step process for resolving the requested Test requirements and addressing the environment configuration anomalies identified during Stage 1.

### Requirements Source (`README.md` Tasks):
1. Display time zone on top bar.
2. When create new Employee, display form validation message (under each field) instead of alert if some fields are empty.
3. Add client button and modal.
4. Add client edit feature.
5. Integration: Move API endpoints off `constant.js` hardcodes to `.env`-based URLs (`VITE_API_URL`).

---

## 🟢 Phase 1: Environment & Base Configuration
✅ **Step 1.1**: Update `constant.js` to dynamically use `import.meta.env.VITE_API_URL` rather than hardcoded `http://localhost:4000/api/v1`.  
⬜️ **Step 1.2**: Ensure login/registration flows continue to work fully integrated via the environment base URL.

## 🟢 Phase 2: Feature Implementation (UI/UX)
⬜️ **Step 2.1 - Task 1**: Locate the Top Bar (Header) Component. Fetch the local time zone string (`Intl.DateTimeFormat().resolvedOptions().timeZone`) and display it. Apply simple minimalist styling.  
⬜️ **Step 2.2 - Task 2**: Open the Employee creation form (`CreateNewEmployee` or similar component). Replace the `toast.error()` validations with inline state-based error references rendered beneath each `Input` element dynamically.  
⬜️ **Step 2.3 - Task 3**: Identify the Clients page/view. Add an "Add Client" button triggering a newly created Client UI Modal.  
⬜️ **Step 2.4 - Task 4**: Implement the "Edit Client" functionality. Extend the Client Modal or table row options to securely patch client details via server controllers.  

## 🟢 Phase 3: Final Optimization & Documentation
⬜️ **Step 3.1**: Verify no dependencies were introduced that violate clean code restrictions. Refactor any unnecessary `useCallback`/`useMemo`.  
⬜️ **Step 3.2**: Update `CHANGELOG.md` encompassing all changes.  
⬜️ **Step 3.3**: Sync all related documentation in `/docs` post-implementation.

---
*Note: Any deviations from the target reference UI styling (Tailwind/Material UI mixed stack as identified) will be kept as clean and structurally compliant with 3D Glass tokens as the previous design permits.*
