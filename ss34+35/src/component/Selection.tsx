import React from 'react'

export default function Selection() 
{ const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
	setSelect(e.target.value)
}
console.log(selec)
}
  return (
	<div>
	  <select onChange={handleChange}>
		<option value="">name</option>	
		<option value="">nữ</option>
		<option value=""></option>
	  </select>
	</div>
  )
}
