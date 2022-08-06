import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputSearchBar({ handleInputChange }) {
  return (
    <>
      <InputGroup>
        <Form.Control
          placeholder="Search Bar"
          aria-label="Search Bar"
          aria-describedby="search bar"
          onChange={handleInputChange}
        />
        <Button variant="outline-secondary" id="search-bar">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default InputSearchBar;
