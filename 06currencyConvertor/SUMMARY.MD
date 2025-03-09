# Currency Converter Project

## Overview
This **Currency Converter** is a React-based application that allows users to convert between different currencies using live exchange rates. It features a clean UI, real-time data fetching, and smooth user interactions.

## Components

### 1. InputBox Component (Reusable Input Field)
- A reusable component for handling currency input and selection.
- Features:
  - Accepts an amount input.
  - Provides a dropdown for selecting currencies.
  - Uses `useId()` to generate unique input IDs.
  - Supports enabling/disabling input fields.

### 2. useCurrencyInfo Hook (Fetching Exchange Rates)
- A custom React hook that fetches real-time exchange rates from the **ExchangeRate-API**.
- Uses `useEffect` to fetch data when the base currency changes.
- Stores exchange rate data in state (`data`).

### 3. App Component (Main Logic & UI)
- Manages state for:
  - `amount`: Input amount to be converted.
  - `from`: Base currency.
  - `to`: Target currency.
  - `convertedAmount`: Stores the converted value.
- Uses the `useCurrencyInfo` hook to fetch available currency options dynamically.
- Implements functions:
  - `convert()`: Converts the input amount based on fetched exchange rates.
  - `swap()`: Swaps the `from` and `to` currencies.
- UI Features:
  - **Background Image** for an appealing look.
  - **Two InputBox components** for "From" and "To" currency selection.
  - **Swap button** to quickly exchange selected currencies.
  - **Convert button** to perform the conversion on form submission.

## Key Features
✅ **Real-time exchange rates** using an external API.  
✅ **User-friendly UI** with a smooth experience.  
✅ **Currency swapping** for quick conversions.  
✅ **Reusable components** for modularity.  
✅ **Tailwind CSS for styling** with a clean layout.  

## Future Enhancements
- Add support for **historical exchange rates**.
- Implement **dark mode** for better UX.
- Optimize API calls for **performance improvements**.

---
**Author:** Rahul  
**Technologies Used:** React, Tailwind CSS, ExchangeRate-API
