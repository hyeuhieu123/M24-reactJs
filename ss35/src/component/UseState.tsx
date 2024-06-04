import React from "react";

export default function UseState() {
  return (
    <div>
      {/* 
			useState = use +state(sử dụng trạng thái )
			trạng thái của duex liệu tức là khi dữ liệu thay đổi thì giao diện nó thay đổi theo
			các hook là các phương thước được react cung cấp cho nên khi sử dụng các em phải import để dùng 
			bản chất useState là 1 function trả về 1 [] có 2 phần tử 	

		*/}
      <p>giá trị của biến điếm count {count}</p>
      <button onClick={handleClick}>increase </button>
    </div>
  );
}
