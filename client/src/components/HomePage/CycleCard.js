import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function CycleCard({ cycle }) {
  const { isAuthenticated } = useContext(UserContext);
  let mystyle = {
    width: "254px",
    height: "176px",
    objectFit: "cover",
  };
  return (
    <div className="col-lg-3 my-2 col-md-6 col-12">
      <div className="card homepage_card">
        <div className="card-front p-2">
          <img
            className="card-img-top img-fluid"
            src={cycle.image_url}
            alt="Card img cap"
            style={mystyle}
          />
          <div className="card-body ">
            <h5 className="card-title d-flex justify-content-center">
              {cycle.name}
            </h5>

            <div className="d-flex justify-content-center">
              <span className="starting">
                Starting at <strong>{cycle.three_hour}</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="text-center">
            <table border="1">
              <tbody>
                <tr>
                  <td colSpan="2">
                    <h4 className="text-center">Prices</h4>
                  </td>
                </tr>
                <tr>
                  <td>3 hours</td>
                  <td>{cycle.three_hour}</td>
                </tr>
                <tr>
                  <td>24 hours</td>
                  <td>{cycle.twentyfour_hour}</td>
                </tr>
                <tr>
                  <td>2nd day</td>
                  <td>{cycle.second_day}</td>
                </tr>
                <tr>
                  <td>3rd – 5th day</td>
                  <td>{cycle.three_four_day}</td>
                </tr>
                <tr>
                  <td>6th day and up</td>
                  <td>{cycle.six_day_more}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center ">
            <Link
              to={
                isAuthenticated
                  ? { pathname: `/detailview/${cycle._id}`, state: cycle }
                  : { pathname: "/signin" }
              }
            >
              <span className="cycle-btn" style={{ width: "120px" }}>
                book now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
