import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
const PDFDocument = ({ coverLetter }) => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    text: {
      margin: 12,
      fontSize: 10,
      textAlign: "justify",
    },
    header: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      fontWeight: "bold",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.header} fixed>
          Cover Letter
        </Text>
        <Text style={styles.text}>{coverLetter}</Text>
      </Page>
    </Document>
  );
};

export default PDFDocument;
