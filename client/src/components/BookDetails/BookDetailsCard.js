import React from "react";

export default function BookDetailsCard({ cycle }) {
  let mystyle = {
    width: "100px",
    height: "70px",
    objectFit: "cover",
  };
  return (
    <>
      <tr>
        <td>
          <img src={cycle.image_url} alt="detail-cycle-view" style={mystyle} />
        </td>
        <td className="text-left">{cycle.name}</td>
        <td className="text-left">{cycle._id.slice(-5)}</td>
        <td className="text-left">{cycle.dateTime}</td>
        <td className="text-left">{cycle.priceDetails}</td>
        <td className="text-left"> {cycle.location}</td>
      </tr>
    </>
  );
}
