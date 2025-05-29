# Theme System Documentation

This portfolio uses a global theme system with dark mode (default) and light mode, using the blue colors from the MILogo.png asset.

## Color Scheme

### Dark Mode (Default)
- Background: `#111315` (almost black)
- Primary Blue: `#3AA0EA` (from MILogo.png)
- Text: `#F8FAFC` (very light for contrast)

### Light Mode
- Background: `#F8FAFC` (very soft white)
- Primary Blue: `#2366A8` (darker blue for readability)
- Text: `#181A1B` (very dark for contrast)

## Usage

### In Tailwind Config

The color palette is defined in Tailwind's config and can be used for custom components:

```jsx
// These colors are defined in tailwind.config.js:
// "dark-bg": "#111315",
// "light-bg": "#F8FAFC",
// "primary-blue": "#3AA0EA",
// "primary-blue-dark": "#2366A8",
// "text-light": "#F8FAFC",
// "text-dark": "#181A1B",
```

### CSS Variables

For custom styling, CSS variables are available:

```css
.custom-element {
  background-color: var(--background-color);
  color: var(--text-color);
  border-color: var(--accent-color);
}
```

### Theme Toggle Component

A `ThemeToggle` component is available for switching between themes:

```jsx
import ThemeToggle from './components/ThemeToggle';

function Header() {
  return (
    <header>
      <nav>
        <ThemeToggle className="my-custom-class" />
      </nav>
    </header>
  );
}
```

### Theme Utilities

Utility functions are available in `src/utils/theme.js`:

```jsx
import { toggleTheme, getCurrentTheme, initializeTheme } from './utils/theme';

// Get current theme ('dark' or 'light')
const theme = getCurrentTheme();

// Toggle theme programmatically
const newTheme = toggleTheme();

// Initialize theme (called automatically in main.jsx)
initializeTheme();
```

## Implementation Details

- The theme system uses Tailwind's `darkMode: 'class'` strategy
- Dark mode is set as the default theme
- Theme preference is saved in localStorage
- CSS variables are used for all theme-related styling
- Animations use the theme colors via CSS variables
- Color changes are applied without requiring page refresh
