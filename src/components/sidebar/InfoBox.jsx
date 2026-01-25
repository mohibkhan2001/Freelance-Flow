import React from "react";
import iconImage from "../../assets/icon/Icon.png";
import userImage from "../../assets/icon/user.png";

const InfoBox = ({ showName = true }) => {
  return (
    <div className="w-full flex justify-center items-center mb-4 ">
      {/* Freelance Flow Icon */}
      {!showName && (
        <div className="freelance_icon w-full border-gray-200 border-b-2 flex justify-center items-center">
          <img src={iconImage} alt="Freelance Flow Icon" className="w-25 h-24" />
        </div>
      )}

      {/* Freelancer Details */}
      {showName && (
        <div className="flex items-center gap-3 p-3 bg-gray-50  w-full border-t-2 border-gray-200">
          <img src={userImage} alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">Freelancer Name</h1>
            <span className="text-sm text-gray-500">Front End Developer</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
