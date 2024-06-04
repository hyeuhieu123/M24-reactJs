import React from "react";
import Form from "react-bootstrap/Form";

export default function B4() {
  return (
    <div>
      <Form.Select
        aria-label="Default select example"
        style={{ width: "200px" }}
      >
        <option>hieu</option>
        <option value="1">caidat </option>
        <option value="2">doi mat khau</option>
        <option value="3">dang xuat</option>
      </Form.Select>
    </div>
  );
}
