import React from 'react'

export default function Accordian(props) {
  return (
    <div>
       <div className="accordion my-5" id="accordionPanelsStayOpenExample">
  <div className="accordion-item darkbody">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Description
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        {props.description}
      </div>
    </div>
  </div>
  <div className="accordion-item darkbody">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Learning
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        {props.learning}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
