import CardHeader from "./components/SchoolCard/CardHeader";
import CardBody from "./components/SchoolCard/CardBody";
import CardFooter from "./components/SchoolCard/CardFooter";

const StudentCard = () => {
  const student = {
    name: "Alex Thompson",
    id: "STU-2026-8842",
    major: "Computer Science",
    expiry: "June 2028",
    photo:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop",
    university: "Tech Institute of Design",
  };

  // Inline Style Objects
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    card: {
      width: "320px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      overflow: "hidden",
      border: "1px solid #e5e7eb",
      position: "relative",
    },
    header: {
      backgroundColor: "#2563eb",
      height: "96px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
    },
    universityName: {
      fontSize: "18px",
      fontWeight: "bold",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      margin: 0,
    },
    idLabel: {
      fontSize: "11px",
      opacity: 0.8,
      fontWeight: 500,
      marginTop: "4px",
    },
    photoContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "-48px",
    },
    photo: {
      width: "112px",
      height: "112px",
      objectFit: "cover",
      borderRadius: "50%",
      border: "4px solid #ffffff",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    body: {
      padding: "24px",
      textAlign: "center",
    },
    studentName: {
      fontSize: "24px",
      fontWeight: 800,
      color: "#1f2937",
      margin: "0 0 4px 0",
    },
    major: {
      color: "#2563eb",
      fontWeight: 600,
      marginBottom: "16px",
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #f3f4f6",
      paddingBottom: "4px",
      marginBottom: "12px",
      fontSize: "14px",
      color: "#4b5563",
    },
    footer: {
      backgroundColor: "#f9fafb",
      padding: "16px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderTop: "1px solid #e5e7eb",
    },
    qrCode: {
      width: "64px",
      height: "64px",
      border: "1px solid #e5e7eb",
      padding: "4px",
      backgroundColor: "#fff",
    },
    footerText: {
      fontSize: "10px",
      color: "#9ca3af",
      textAlign: "right",
      lineHeight: "1.2",
    },
    bottomStrip: {
      height: "8px",
      backgroundColor: "#2563eb",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <CardHeader student={student} styles={styles} />
        <CardBody student={student} styles={styles} />
        <CardFooter student={student} styles={styles} />
        <div style={styles.bottomStrip}></div>
      </div>
    </div>
  );
};

export default StudentCard;
