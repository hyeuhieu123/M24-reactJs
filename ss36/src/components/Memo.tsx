import React from "react";

export default function Memo() {
  console.log("component được gọi ");
  /**
   * khi mỗi lần function app re render
   * thì lại tạo 1 biến handleIncrease và gán giá trị là 1 function
   * funciton là kiểu duex kiêu tham chiếu freference-type
   * cữ mỗi lần sextaoj biến mới và gán giá trị mới
   */
  return (
    <div>
      Memo
      {/* memo là gì ?
		+HOC:higner order component - hàm bậc cao trong js 
		+sẽ đi kiểm tra xem có props nào thay đổi hay ko
		+nếu props thay đổi thì component sẽ render 
		+nếu props ko thay đổi 
		sinh ra giải quyết vấn đề gì 

		ko phải là tất cả các props 
    d
		 */}
    </div>
  );
}
