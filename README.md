# Theme Switcher App

A React application that allows users to toggle between light and dark themes using React's Context API and custom hooks.

## Project Description

This application demonstrates the implementation of a theme switching mechanism using React's Context API for global state management. It features:

- Light and dark theme options
- Persistent theme preference using localStorage
- Custom hook to encapsulate theme management logic
- Responsive design with styled components based on the current theme

## Technologies Used

- React.js
- Context API for state management
- Custom Hooks
- CSS Variables for theming
- localStorage for persistence

## Implementation Details

### Context API Implementation

The application uses Context API to provide theme-related data and functions to all components without having to pass props manually:

1. `ThemeContext.js` creates a context with the current theme state and a function to toggle it
2. `ThemeProvider` wraps the application and manages the theme state
3. Context values are accessible to all child components

### Custom Hook Implementation

The `useTheme` custom hook encapsulates all theme-related logic:

1. Accesses the theme context using `useContext`
2. Validates that the hook is being used within a `ThemeProvider`
3. Returns the current theme and toggle function
4. Used by components to access theme data without directly using `useContext`

### Theme Persistence

The application persists the user's theme preference using localStorage:

1. On initial load, it checks localStorage for a saved theme preference
2. When the theme changes, it saves the new preference to localStorage
3. Also updates the `data-theme` attribute on the document body for CSS styling

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/theme-switcher-app.git
   ```

2. Navigate to the project directory:
   ```
   cd theme-switcher-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
  ├── contexts/
  │   └── ThemeContext.js  # Theme context definition
  ├── hooks/
  │   └── useTheme.js      # Custom hook for theme management
  ├── components/
  │   ├── Navbar.js        # Top navigation bar
  │   ├── Footer.js        # Page footer
  │   ├── Content.js       # Main content area
  │   └── ThemeToggle.js   # Theme toggle button
  ├── App.js               # Main application component
  ├── index.js             # Application entry point
  ├── themes.css           # Theme-related CSS
  └── index.css            # Global styles
```
