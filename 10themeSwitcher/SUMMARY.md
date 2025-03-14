# Theme Switcher Project

## Overview
**ThemeConverter** is a React-based project that provides a seamless way to toggle between light and dark themes using React's context API and Tailwind CSS. It features a dynamic theme switcher and a sample product card component to showcase UI adaptability.

## Features
- **Theme Toggle Button**: Users can switch between light and dark modes.
- **React Context API**: Centralized state management for theme handling.
- **Persistent Theme Change**: Theme updates are applied dynamically to the HTML document.
- **Reusable Components**:
  - `Card`: A product display card with ratings and an add-to-cart button.
  - `ThemeBtn`: A toggle switch for changing the theme.
- **Styled with Tailwind CSS**: Ensuring a responsive and visually appealing UI.

## Project Structure
```
📂 src
 ├── 📂 assets
 ├── 📂 components
 │   ├── Card.jsx
 │   ├── ThemeBtn.jsx
 ├── 📂 context
 │   ├── Theme.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

## Implementation Details
### 1. **Theme Context (`Theme.jsx`)**
- Utilizes `createContext` and `useContext` to manage the theme state globally.
- Provides `lightTheme` and `darkTheme` functions to toggle themes.

### 2. **Theme Button (`ThemeBtn.jsx`)**
- Uses `useTheme()` to access and modify theme state.
- Renders a switch to toggle between light and dark modes.

### 3. **Card Component (`Card.jsx`)**
- Displays a sample product card with an image, description, and price.
- Includes star ratings and an 'Add to cart' button.

### 4. **Main App (`App.jsx`)**
- Wraps the entire application with `ThemeProvider`.
- Listens for theme changes and updates the HTML class accordingly.
- Renders the `ThemeBtn` and `Card` components.

## Technologies Used
- **React** (Component-based UI development)
- **Tailwind CSS** (Utility-first styling)
- **Vite** (Fast build tool for React)


## Future Improvements
- Persist theme preference in local storage.
- Add animations for smoother transitions.
- Expand theme options beyond light and dark modes.

---
This project is a great example of how React Context and Tailwind CSS can be combined to create a modern and user-friendly theme switcher.
