import CardHeader from "./components/SchoolCard/CardHeader";
import CardBody from "./components/SchoolCard/CardBody";
import CardFooter from "./components/SchoolCard/CardFooter";


const StudentCard = ({ student, styles }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <CardHeader student={student} styles={styles} />
        <CardBody student={student} styles={styles} />
        <CardFooter student={student} styles={styles} />
        <div className="h-2 bg-blue-500 w-full"></div>
      </div>
    </div>
  );
};

export default StudentCard;
