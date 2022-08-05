import Container from "react-bootstrap/Container";
import logo from "../../assets/asl-icons/icons8-sign-language-a-50.png";
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
          {/* client\src\assets\asl-icons\icons8-sign-language-a-50.png */}
        </Col>
      </Row>
    </Container>
  );
}

export default IconContainer;
