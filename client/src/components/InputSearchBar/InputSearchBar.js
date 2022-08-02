import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputSearchBar() {
  return (
    <>
      <InputGroup>
        <Form.Control
          placeholder="Search Bar"
          aria-label="Search Bar"
          aria-describedby="search bar"
        />
        <Button variant="outline-secondary" id="search-bar">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default InputSearchBar;
