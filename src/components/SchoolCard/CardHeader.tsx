const CardHeader = ({ student , styles}) => {
  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.universityName}>{student.university}</h1>

      </div>
    </div>
  );
};

export default CardHeader;
