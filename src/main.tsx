import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import AuthDesigns from "./AuthDesigns ";
// import TodoListView from "./TodoListView";
import App from "./App";
// import{ Button} from "./Button";
// const mainButton = "Press Here";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Button name={mainButton} abs="blue"/> */}
    {/* <AuthDesigns /> */}
    {/* <TodoListView /> */}
  </StrictMode>,
);
