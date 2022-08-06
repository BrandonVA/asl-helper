import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

function IconContainer() {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <Figure>
            <Figure.Image
              width={50}
              height={50}
              alt="A"
              src={require("../../assets/asl-icons/icons8-sign-language-a-50.png")}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}

export default IconContainer;
