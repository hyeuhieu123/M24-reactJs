import React, { useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("đang gọi vào useEffect");
  });
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      UseEffect
      {/* tất cả các hook bản chất là những function thôi
	khi dùng thì phải import để dùng  
		1.là 1 callback(arrow function)
		2.[]	||	[deps]
		
		==> useEffect sẽ có 3 cách dùng 
		c1:chỉ chứa callback là 1 arrow functionh
			khi component được mount vào dom thì useEffect được gọi 
			mỗi lần compoent dc render thì sao?? thì nó cũng được gọi
		c2:chứa callback và []
		cũng đc gọi hàm sau khi component dc mount vào dom
		khi mỗi lần component re-render thì useEffect sẽ không bị gọi lại
		c3:chứa callback và [denpendency]

		- componentDidMount
		được gọi khi nào? sau khi component dc render lần đầu
		
		useEffect là pt thường dugnf để xử lý các tác vụ như callApi để lấy dữ liệu
		-thường dùng để xử lý các side Effect ()
		
	
	*/}
    </div>
  );
}
