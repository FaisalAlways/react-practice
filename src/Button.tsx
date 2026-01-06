export const Button = ({ name, abs }) => {
  const buttonStyle = {
   
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "10px",
    color: abs,
  };
  return <button style={buttonStyle}> {name} </button>;
};
