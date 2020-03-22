import React from "react";
import Table from "react-bootstrap/Table";

const BooksTable = ({ books }) => {
  return (
    <Table responsive striped bordered hover variant="light">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b) => (
          <tr key={b.id}>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.published}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BooksTable;