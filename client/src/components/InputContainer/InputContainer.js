import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputSearchBar from "../InputSearchBar/InputSearchBar";

function InputContainer({ handleInputChange }) {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <InputSearchBar handleInputChange={handleInputChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default InputContainer;
