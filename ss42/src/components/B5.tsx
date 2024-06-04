import React from "react";
import Alert from "react-bootstrap/Alert";

export default function B5() {
  return (
    <div>
      <Alert variant="success">Thêm mới thành công</Alert>
      <Alert variant="danger">Thêm mới thất bại</Alert>
      <Alert variant="warning">Tên không được để chống</Alert>
    </div>
  );
}
