import React from 'react'

export default function SidebarFilter({handleChange}) {
  handleChange()
  return (
    <>
    {/* <div style={{width:"100%"}}> */}
    {/* <h2>Filter By:</h2>
<div className="accordion  mt-3" id="accordionPanelsStayOpenExample">
<div className="accordion-item border border-white" >
<h2 className="accordion-header" id="panelsStayOpen-headingOne">
<button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:"#222",color:"var(--white)"}}>
Food Time
</button>
</h2>
<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >

<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTime' onChange={handleChange} value="breakfast"/>
<label className="check ms-3">Breakfast</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTime' onChange={handleChange} value="lunch"/>
<label className="check ms-3">Lunch</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2" name='foodTime' onChange={handleChange} value="diner"/>
<label className="check ms-3">Diner</label>
</div>

</div>
</div>
<div className="accordion-item border border-white" >
<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
<button className="accordion-button  collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor:"#222",color:"var(--white)"}}>
Food Type
</button>
</h2>
<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" >
<div className="p-2">
<input type="checkbox" className="ms-2"/>
<label className="check ms-3">Sweet Food</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2"/>
<label className="check ms-3">Hot Food</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2"/>
<label className="check ms-3">Drinks</label>
</div>
<div className="p-2">
<input type="checkbox" className="ms-2"/>
<label className="check ms-3">Snacks</label>
</div>


</div>
</div>
</div> */}

{/* </div> */}
</>
  )
}
