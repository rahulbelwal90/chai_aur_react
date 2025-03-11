# Dummy Webpage Project

## Overview
This project is a **React-based  webpage** designed for desktop users. It features a responsive navigation system, dynamic routing using React Router, and integration with GitHub API to fetch user data.

## Features
- **React Router Navigation**: Utilizes `react-router-dom` for client-side routing.
- **Sticky Header**: A fixed navigation bar with links to Home, About, Contact, and GitHub.
- **GitHub API Integration**: Fetches user data from GitHub and displays the follower count and profile picture.
- **Component-Based Structure**: Includes separate components for `Header`, `Footer`, `Layout`, and `Github`.
- **Dynamic User Routing**: Supports dynamic routing for user profiles via URL parameters.

## Project Structure
```
/project-root
│── /components
│   │── /Header
│   │   ├── Header.jsx
│   │── /Footer
│   │   ├── Footer.jsx
│   │── /Github
│   │   ├── Github.jsx
│   │── Home.jsx
│   │── About.jsx
│   │── Contact.jsx
│   │── User.jsx
│── index.jsx
│── App.jsx
│── Layout.jsx
│── index.css
```

## Key Components
### `Header.js`
- Implements the navigation bar using `<Link>` and `<NavLink>`.
- Prevents full-page reloads by using React Router links.

### `Layout.js`
- Wraps the webpage layout with a header, footer, and `Outlet` for page content.

### `Github.js`
- Uses `useLoaderData` to fetch and display GitHub user data.
- Displays the user's follower count and avatar.

### `index.js`
- Configures routing with `createBrowserRouter`.
- Defines nested routes using `createRoutesFromElements`.

## API Integration
- Uses `fetch()` to retrieve GitHub user data asynchronously.
- Exports `githubInfoLoader` as a data loader for GitHub component.

## Technologies Used
- **React.js** for frontend development
- **React Router** for navigation
- **Tailwind CSS** for styling
- **GitHub API** for user data retrieval

## Future Enhancements
- Implement authentication for personalized user experience.
- Enhance UI with animations and advanced CSS styling.
