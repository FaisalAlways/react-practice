import { Button } from "./Button";
const Test = () => {
  // console.log(props, "props");

  const testButton = "Test Button";

  // const styleY = {
  //   color: "#16d840ff",
  //   marginRight: "10px",
  // };

  // const styleX = { ...styleY, color: "#b91c1c" };

  // const styleZ = {
  //   ...styleX,
  //   color: "#16a34a",
  // };

  // const styleW = {
  //   ...styleZ,
  //   color: "#f19408ff",
  // };

  // console.log(styleY, "styleY");
  // console.log(styleX, "styleX");
  // console.log(styleZ, "styleZ");
  // console.log(styleW, "styleW");

  // const Office = {
  //   area: "USA",
  //   town: "ABC",
  //   state: "NY",
  // };

  // const { area, town, state } = Office;

  // console.log(area, "area TEST");
  // console.log(town, "town TEST");
  // console.log(state, "state TEST");
  // console.log(Office, "Office TEST");

  // const  { name, role, age, country, city } = props;

  // console.log(typeof name, name, "THIS NAME IS COMING FROM PROPS");
  // console.log(typeof role, role, "THIS ROLE IS COMING FROM PROPS");
  // console.log(typeof age, age, "THIS AGE IS COMING FROM PROPS");
  // console.log(typeof country, country, "THIS COUNTRY IS COMING FROM PROPS");
  // console.log(typeof city, city, "THIS CITY IS COMING FROM PROPS");

  return (
    <div>

<Button name={testButton} abs="green" />


      {/* <div>
        <span>{town}</span>
        <br />
        <span>{state}</span>
        <br />
        <span>{area}</span>
      </div>
      <div>
        <span style={styleY}> Name: {name} </span>
        <span style={styleX}> Role: {role}</span>
        <span style={styleZ}>Age: {age}</span>
        <span style={styleW}>Country: {country}</span>
        <span style={{ color: "#0f766e",}}>City: {city}</span>
      </div> */}
    </div>
  );
};

export default Test;
