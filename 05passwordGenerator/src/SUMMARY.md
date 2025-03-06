# Password Generator

## Overview
This is a simple **password generator** built using React. It allows users to generate random passwords with customizable options such as length, inclusion of numbers, and special characters. The password can also be copied to the clipboard with a single click.

## Features
- Generates random passwords with uppercase, lowercase, numbers, and special characters.
- Adjustable password length using a slider (6 to 100 characters).
- Toggle options for including numbers and special characters.
- Copy generated password to clipboard with a button click.
- Responsive UI with Tailwind CSS.

## Technologies Used
- **React**: Functional components and hooks (`useState`, `useEffect`, `useCallback`, `useRef`).
- **Tailwind CSS**: For styling the user interface.

## Project Structure
- **State Management**:
  - `length`: Controls the password length.
  - `numberAllowed`: Toggle to include numbers.
  - `charAllowed`: Toggle to include special characters.
  - `password`: Stores the generated password.
- **Hooks Used**:
  - `useState` for state management.
  - `useEffect` to regenerate the password when dependencies change.
  - `useCallback` for memoizing functions.
  - `useRef` for handling the copy-to-clipboard functionality.

## How It Works
1. The user sets the password length using a slider.
2. Toggles checkboxes to include numbers and special characters.
3. The password is generated dynamically using `passwordGenerator()`.
4. Clicking the "COPY" button copies the password to the clipboard.

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd password-generator
