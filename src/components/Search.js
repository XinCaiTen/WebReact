import React from "react";
import { Form, Button } from "react-bootstrap";

const Search = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    handleSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Control
        type="text"
        name="query"
        placeholder="Search products..."
        className="me-2"
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
