import React from "react";

const Overlay = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 z-30 h-screen w-screen cursor-pointer"
      onClick={onClick}
    />
  );
};

export default Overlay;
