const CardBody = ({ student , styles}) => {
  return (
    <div>
      {/* Profile Image */}
      <div style={styles.photoContainer}>
        <img style={styles.photo} src={student.photo} alt="Student" />
      </div>

      {/* Details */}
      <div style={styles.body}>
        <h2 style={styles.studentName}>{student.name}</h2>
        <p style={styles.major}>{student.major}</p>

        <div style={styles.infoRow}>
          <span style={{ fontWeight: "bold" }}>Student ID:</span>
          <span>{student.id}</span>
        </div>
        <div style={styles.infoRow}>
          <span style={{ fontWeight: "bold" }}>Expires:</span>
          <span>{student.expiry}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
