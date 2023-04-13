import React from "react";

export default function Technicalskills({
  icon1: Icon1,
  color1,
  title1,
  information1,
  icon2: Icon2,
  color2,
  title2,
  information2,
  icon3: Icon3,
  color3,
  title3,
  information3,
}) {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{ marginTop: "2px" }}
    >
      {title1 ? (
        <div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <Icon1 className="icons" color={color1} />
              <h5 className="card-title card-title">{title1}</h5>
              <p className="card-text card-details">{information1}</p>
            </div>
          </div>
        </div>
      ) : null}
      {title2 ? (
        <div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <Icon2 className="icons" color={color2} />
              <h5 className="card-title card-title">{title2}</h5>
              <p className="card-text card-details">{information2}</p>
            </div>
          </div>
        </div>
      ) : null}
      {title3 ? (
        <div className="col">
          <div className="card h-100 card-head">
            <div className="card-body">
              <Icon3 className="icons" color={color3} />
              <h5 className="card-title card-title">{title3}</h5>
              <p className="card-text card-details">{information3}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
