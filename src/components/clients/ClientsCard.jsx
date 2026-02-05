import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineEmail, MdFolderSpecial } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import clients from "../../data/clientsData";

const ClientsCard = () => {
 
  return (
    <div className="flex flex-wrap items-center gap-12">
      {clients.map((client) => {
        return (
          <div
            key={client.id}
            className="client_card w-120 rounded-xl border border-gray-200  p-5  h-fit hover:shadow-xl transition-all duration-100"
          >
            <div className="client_logo w-12 h-12 flex items-center justify-center rounded-full text-md  font-medium uppercase text-blue-800 bg-blue-100">
              {client.ClientLogo}
            </div>

            <div className="client_name font-semibold text-xl text-gray-600">
              <h2>{client.ClientName}</h2>
            </div>
            <div className="client_company flex items-center gap-2">
              <FaRegBuilding className="inline text-gray-500" />
              <span>{client.ClientCompany}</span>
            </div>
            <div className="client_email flex items-center gap-2">
              <MdOutlineEmail className="inline text-gray-500" />
              <span>{client.ClientEmail}</span>
            </div>
            <div className="client_phone flex items-center gap-2">
              <FiPhone className="inline text-gray-500" />
              <span>{client.ClientPhone}</span>
            </div>

            <div className="client_total text-nowrap text-sm font-medium text-gray-500 text-right">
              <span>
                {client.TotalProjects}{" "}
                {client.TotalProjects === 1 ? "project" : "projects"}
              </span>
            </div>

            <div
              className={`client_active w-full flex items-center gap-2 py-4
  ${
    client.ActiveProjects
      ? "border-t border-gray-200 text-blue-900"
      : "opacity-0"
  }`}
            >
              <MdFolderSpecial className="text-md" />
              <span className="text-sm">
                {client.ActiveProjects}{" "}
                {client.ActiveProjects === 1
                  ? "active project"
                  : "active projects"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientsCard;
