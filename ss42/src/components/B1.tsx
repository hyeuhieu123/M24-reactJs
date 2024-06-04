import React from "react";
import { Button } from "react-bootstrap";
export default function B1() {
  return (
    <div>
      {" "}
      <br />
      <Button variant="primary">Thành công</Button>{" "}
      <Button variant="secondary">Huỷ</Button>{" "}
      <Button variant="success">Thành công</Button>{" "}
      <Button variant="warning">Cảnh báo</Button>{" "}
      <Button variant="danger">Báo lỗi</Button>{" "}
      <Button variant="light">Thông tin</Button>{" "}
      <Button variant="link">Đường dẫn</Button>
    </div>
  );
}
