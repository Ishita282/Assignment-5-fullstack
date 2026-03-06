# React Custom Hook: useFetch

## Overview
This project demonstrates a **custom React hook (`useFetch`)** for fetching data from an API with loading and error handling. It simplifies API calls and improves code reusability.

## Features
- Fetch data from any API endpoint.
- Handles loading states with a spinner.
- Handles error states with proper messages.
- Prevents memory leaks with cleanup using `AbortController`.
- Fully reusable and flexible hook.

## Files
- **`useFetch.js`** - Custom hook implementing fetch logic with `useState`, `useEffect`, and `useCallback`.
- **`App.js`** - React component that uses `useFetch` to fetch and display product data.
- **`App.css`** - Styling for grid layout, cards, hover effect, and loader spinner.

## Installation
1. Clone the repository:
   ```bash
   git clone <your-github-repo-link>
   ```
2. Navigate into the project directory:
   ```bash
   cd react-custom-hook
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- The `App` component fetches data from:
  ```
  https://api.escuelajs.co/api/v1/products
  ```
- Loading state displays a spinner.
- Errors are displayed in a user-friendly message.
- Products are shown in a responsive grid layout with images and titles.

## Decisions Made
- Defaulted `data` to `[]` to prevent `.map` errors.
- Defaulted `error` to `null` for proper error handling.
- Used `useCallback` to memoize fetch function.
- Added `AbortController` in `useEffect` to prevent memory leaks.
- Implemented CSS spinner for better user experience during loading.

## Deployment
- Deployed on Netlify: [Your Netlify Link](#)
- GitHub Repository: [https://github.com/Ishita282/Assignment-5](#)

## Future Improvements
- Add pagination or infinite scrolling.
- Add filter/search functionality.
- Improve UI with cards details like price or rating.