const CardFooter = ({ student , styles}) => {
  return (
    <div>
      {" "}
      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.qrCode}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${student.id}`}
            alt="QR Code"
          />
        </div>
        <p style={styles.footerText}>
          If found, please return to <br />
          the University Registrar Office.
        </p>
      </div>
    </div>
  );
};

export default CardFooter;
