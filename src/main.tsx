import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import App from "./App";
// import AuthDesigns from "./AuthDesigns ";
import TodoListView from "./TodoListView";
// import { Button } from "./Button";
// const mainButton = "Press Here";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Button name={mainButton} abs="blue" /> */}
    {/* <AuthDesigns /> */}
    <TodoListView />
    <ExpenseTracker />
  </StrictMode>,
);
