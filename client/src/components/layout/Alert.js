import React from "react";

export default function Alert() {
  function closeAlert(event) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
      element = element.parentNode;
    }
    element.parentNode.parentNode.removeChild(element.parentNode);
  }

  return (
    <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-500">
      <span className="text-xl inline-block mr-5 align-middle">
        <i className="fas fa-bell"></i>
      </span>
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">pink!</b> This is a pink alert - check it out!
      </span>
      <button
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        onClick={(event) => closeAlert(event)}
      >
        <span>×</span>
      </button>
    </div>
  );
}
