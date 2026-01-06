import Test from "./test";
import { Button } from "./Button";
export const App = () => {
  // const Name = "Faisal Hossain";
  // const Role = 1000;
  // const Age = 23;
  // const Country = "Bangladesh";
  // const City = "Jashore";
  const buttonName = "Click Me";

  return (
    <div>
      <div>
        <Button name={buttonName} abs="red" />
      </div>
      <Test />
    </div>
  );
};
