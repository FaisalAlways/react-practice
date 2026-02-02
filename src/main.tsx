import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginFrom from "./LoginForm";
// import App from "./App";

// import{ Button} from "./Button";
// const mainButton = "Press Here";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Button name={mainButton} abs="blue"/> */}
    <LoginFrom />
  </StrictMode>,
);
