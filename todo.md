L2. Authentication UI Components
Create a complete authentication system UI for Filament-hero:

1. **Login Form**:
   - Email and password inputs with validation
   - "Remember me" checkbox
   - "Forgot password?" link
   - Login button with loading state
   - "Don't have an account? Sign up" link

2. **Sign Up Form**:
   - Full name, email, password, confirm password
   - Password strength indicator
   - Terms of service checkbox
   - Sign up button with loading state
   - "Already have an account? Login" link

3. **Password Reset**:
   - Email input for reset request
   - Success message component
   - Back to login link

Style with dark theme, orange accents, proper form validation states (error, success), and smooth transitions. Include proper accessibility attributes.

L3. Dashboard Components
Build a comprehensive dashboard for Filament-hero with these components:

1. **Metrics Cards Grid** (2x2 on desktop, stacked on mobile):
   - Total Spools: Large number with icon
   - In Use: Count with printer icon
   - Low Stock: Count with warning color
   - This Month: Usage statistics

2. **Recent Activity Feed**:
   - List of recent actions (added, updated, moved)
   - Timestamps and action descriptions
   - User avatars and filament icons
   - "View all" link at bottom

3. **Material Distribution Chart**:
   - Pie chart showing material types (PLA, PETG, ABS, etc.)
   - Use Recharts library with dark theme
   - Legend with percentages
   - Hover tooltips

4. **Low Stock Alerts**:
   - Cards showing filaments below 25%
   - Progress bars for remaining percentage
   - Quick action buttons (reorder, update weight)

Use mock data for now. Style consistently with dark theme and orange accents.

L4. Filament Inventory Grid/List
Create a flexible filament inventory display system:

1. **Toolbar**:
   - Search input (placeholder: "Search by brand, color, or notes...")
   - Filter dropdowns: Material Type, Current Printer, Weight Range
   - View toggle (grid/list icons)
   - Bulk actions dropdown (when items selected)
   - Add New Filament button (prominent, orange)

2. **Grid View** (default):
   - Responsive cards (4 cols desktop, 2 tablet, 1 mobile)
   - Each card shows: Photo, Brand, Material badge, Color dot, Weight bar
   - Hover overlay with quick actions: Edit, Delete, Update Weight
   - Selection checkbox (top-left corner)
   - Status indicators (in use, low stock)

3. **List View**:
   - Table format with sortable columns
   - Columns: Photo, Brand, Material, Color, Weight %, Printer, Actions
   - Row selection and bulk operations
   - Pagination at bottom (25 items per page)

4. **Empty State**:
   - Illustration and message for no filaments
   - Large "Add Your First Filament" button

Include loading skeletons and smooth transitions between views.

L5. Add/Edit Filament Form
Create a comprehensive filament form with beautiful UX:

**Form Layout** (single column on mobile, two columns on desktop):

**Left Column**:
- Photo Upload (drag & drop area with preview)
- Spool Name (text input for user-given name)
- Brand (text input with suggestions)
- Color (color picker + text input combination)

**Right Column**:
- Material Type (dropdown: PLA, PETG, ABS, ASA, TPU, PC, PEEK)
- Original Weight (number input with preset buttons: 250g, 500g, 1kg, 2kg, 5kg)
- Current Weight % (slider with percentage display)
- Current Printer (dropdown, optional)

**Bottom Section**:
- Purchase Date (date picker, optional)
- Print Settings (collapsible section):
  - Nozzle Temperature (number input °C)
  - Bed Temperature (number input °C)
  - Print Speed (number input mm/s)
- Notes (textarea for user notes)

**Action Buttons**:
- Cancel (secondary) and Save (primary orange button)
- Show 2D barcode preview when editing existing filament

Include proper form validation, loading states, and error handling with toast notifications.

L6. 2D Barcode Generator Interface
Build a 2D barcode management interface:

1. **Single Barcode Generator**:
   - Select filament dropdown
   - Barcode size selector (1", 1.5", 2")
   - Live preview of barcode
   - Spool name display above barcode
   - Download PNG button
   - Print Label button

2. **Bulk Barcode Generator**:
   - Multi-select filament list with checkboxes
   - Batch size options and layout grid preview
   - Progress bar for generation
   - Download all as PDF button

3. **Label Preview**:
   - Thermal printer layout simulation
   - Show spool name text and barcode only
   - Multiple label formats (different sizes)
   - Print settings (copies, label size)

4. **Barcode Gallery**:
   - Grid view of all generated barcodes
   - Search and filter by filament properties
   - Regenerate individual barcodes
   - Bulk download options

Use react-qr-code library for barcode generation. Style with dark theme and ensure high contrast for printing.

L7. Settings & Profile Interface
Create a comprehensive settings interface with tabbed navigation:

**Profile Tab**:
- Avatar upload with preview
- Full name and email editing
- Change password section (current, new, confirm)
- Account deletion warning section

**Preferences Tab**:
- Default units toggle (Metric/Imperial)
- Low stock threshold slider (0-50%)
- Default view preference (Grid/List)
- Notification settings toggles

**Subscription Tab**:
- Current plan display (Free, Maker, Pro, Enterprise)
- Usage metrics (X of Y spools used)
- Upgrade/downgrade buttons
- Billing history table

**Data Management Tab**:
- Export data button (CSV download)
- Import data section with file upload
- Backup & restore options
- Delete all data (with confirmation)

Include proper validation, loading states, and confirmation dialogs for destructive actions.

L8. Printer Management Interface
Build a printer management system:

1. **Printer Grid View**:
   - Cards showing each printer with status indicators
   - Current filament assignment display
   - Status badges (Active, Maintenance, Offline)
   - Quick actions: Edit, Assign Filament, Set Status

2. **Add/Edit Printer Modal**:
   - Printer name input
   - Status dropdown
   - Notes textarea
   - Color picker for visual identification
   - Save/Cancel buttons

3. **Filament Assignment Interface**:
   - Drag & drop filament to printer assignment
   - Current assignments display
   - Assignment history timeline
   - Quick swap between printers

4. **Printer Dashboard**:
   - Overview of all printers and their utilization
   - Most used printers chart
   - Maintenance schedule reminders

Style consistently with the app theme and include smooth animations for drag & drop.

L9. Mobile Optimization Components
Optimize the entire Filament-hero interface for mobile devices:

1. **Mobile Navigation**:
   - Bottom tab bar for main navigation
   - Hamburger menu for secondary options
   - Swipe gestures for tab switching

2. **Touch-Optimized Interactions**:
   - Larger touch targets (44px minimum)
   - Swipe actions on list items (edit, delete)
   - Pull-to-refresh functionality
   - Touch-friendly sliders and inputs

3. **Mobile-Specific Features**:
   - Camera integration for photo capture
   - Optimized form layouts for thumb navigation
   - Collapsible sections to save screen space
   - Sticky action buttons

4. **Progressive Web App Features**:
   - Install prompt
   - Offline indicators
   - App-like navigation (no browser UI)

Ensure all interactions work smoothly on touch devices with proper feedback.