import React, { useEffect, useContext } from "react";
import CycleContext from "../../context/Cycle/CycleContext";
import BookDetailsCard from "./BookDetailsCard";

export default function BookDetails() {
  const { getBookedCycle, bookedCycle } = useContext(CycleContext);
  console.log(bookedCycle);
  useEffect(() => {
    getBookedCycle();
  }, []);
  return (
    <>
      <div className="container-fliud pt-50">
        <div className="row">
          <div className="col-12">
            <table className="table-fill" width="100%">
              <thead>
                <tr>
                  <th className="item-image text-left">Item</th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Booking ID</th>
                  <th className="text-left">Date - Time</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Location</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {bookedCycle &&
                  bookedCycle.map((cycle) => <BookDetailsCard cycle={cycle} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
