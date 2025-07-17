# 🚀 React Calculator App | 💻✨

A simple yet functional calculator app built using React.js!

## 🆕 Recent Updates & Features

- **Button Click Handling:** Calculator buttons are now managed by the parent component (`App.jsx`), with state and logic handled centrally. Each button click updates the calculator value.
- **Clear & Evaluate Functionality:** The "C" button clears the input, and the "=" button can be used to evaluate the expression (if you have implemented the logic).
- **Props Drilling:** The button click handler (`onButtonClick`) is passed from the parent to the child (`ButtonsContainer`) via props, demonstrating best practices in React component communication.
- **Custom CSS Modules:** Each component uses its own CSS module (e.g., `Header.module.css`, `Input.module.css`, `buttonscontainer.module.css`), making styling modular and maintainable.
- **Initial State Handling:** The calculator input now uses a string as its initial value, preventing React warnings or errors about controlled components.

## 🔧 Key Features:

- 🧩 **Modular Component Structure:** UI is divided into reusable components for better maintainability and scalability.
- 🔁 **Used map() Function:** Calculator buttons are dynamically rendered using `.map()` to keep the code DRY and efficient.
- 📦 **Props & Multi-level Children:** Data and handlers are passed as props to multiple child components, showcasing component communication.
- 🎨 **Custom CSS Styling:** Designed with a clean and responsive layout using custom CSS modules (no UI frameworks used).
- 📱 **Fully responsive** for mobile and desktop devices.

## 🧠 This project helped reinforce my concepts of:

- Component-based architecture
- React props & state
- Functional components
- Dynamic rendering using arrays
- Basic CSS styling & layout techniques

## 🖼️ Screenshot

![Calculator App Screenshot](<img width="406" height="563" alt="image" src="https://github.com/user-attachments/assets/4012ca7f-fa04-4d9e-be9d-5f3b7c9ddab2" />
)

👉 Try it out and feel free to share feedback!
