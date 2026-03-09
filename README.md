# Mission Control Dashboard

## Overview

A small React application showcasing three reusable components:

* **DataGrid** – table with pagination, sorting, and filtering
* **Timeline** – events grouped by day with keyboard navigation
* **EventForm** – form to add new events

New events created in the form are added to the application state and reflected in both the DataGrid and the Timeline.

---

## Data

The app uses **mocked data only**.
A small mocking utility generates random space events (titles, missions, locations, dates) from predefined values. This keeps the project simple.

---

## State Management

State is handled with **React hooks**.

* Custom hooks help **separate concerns** and keep components focused on UI logic.
* `useState` was chosen because the state is simple and does not require the complexity of something like `useReducer`.

When a new event is submitted through the form, it is added to the state and the UI updates automatically.

---

## Styling

Styling is implemented with **Tailwind CSS**.
It was chosen for its simplicity and minimal boilerplate, allowing styling directly in the components without creating multiple CSS files.

---

## UI Components

The application uses **native HTML elements** instead of a UI component library to keep the implementation simple and focused on the core functionality of the components.

---

## Identifiers

New events use `Date.now()` as the identifier.
For this simple client-side demo it provides a quick unique value without introducing an external library for ID generation.

---

## Project Structure

The project uses a **simple structure** suitable for a small application.
Since this is a single-page demo, a more complex architecture (such as feature-based modules) was not necessary. For a larger application, a feature-based architecture would likely be more appropriate.
