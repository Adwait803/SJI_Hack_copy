import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Manager View</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
// import Card from "react-bootstrap/Card";

// function BgColorExample() {
//   return (
//     <>
//       {[
//         "Primary",
//         "Secondary",
//         "Success",
//         "Danger",
//         "Warning",
//         "Info",
//         "Light",
//         "Dark",
//       ].map((variant) => (
//         <Card
//           bg={variant.toLowerCase()}
//           key={variant}
//           text={variant.toLowerCase() === "light" ? "dark" : "white"}
//           style={{ width: "18rem" }}
//           className="mb-2"
//         >
//           <Card.Header>Header</Card.Header>
//           <Card.Body>
//             <Card.Title>{variant} Card Title </Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </>
//   );
// }

// export default BgColorExample;
