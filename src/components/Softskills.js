import React from "react";

export default function Softskills(props) {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop:"0px"}}>
        {props.softskills1 ? <div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <h5 className="cardtitle">{props.softskills1}</h5>
            </div>
          </div>
        </div>:null}
        {props.softskills2 ? <div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <h5 className="cardtitle">{props.softskills2}</h5>
            </div>
          </div>
        </div>:null}
        {props.softskills2 ?<div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <h5 className="cardtitle">{props.softskills3}</h5>
            </div>
          </div>
        </div>:null}
      </div>
    </div>
  );
}
