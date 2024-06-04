import React, { useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState<number>(0);
  let index = 0;

  const handleClick = () => {
    index++;
    setCount(count + 1);
  };
  return (
    <div>
      UseRef
      {/* 
	 	nó là hook react cung cấp
		cách dùng: import vào dùng
		kết quả trả về là 1 đối tượng
		và trong đối tượng đó có 1 thuộc tính mặc định là current 
		
		
		có 2 cách dùng chính 
		1. khi mỗi lần compoent re-render thì nó không tạo ra 1 referenttype mà vẫn giữ nguyên giá trị referent type ban dau 
		2. giúp mặc định focus vào ô input mà mính muốn 
		
	  */}
    </div>
  );
}
