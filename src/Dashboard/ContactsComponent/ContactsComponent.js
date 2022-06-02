import React from "react";
import { MdDelete } from "react-icons/md";

const Contacts = ({ data, count, deleteItem }) => {
  const getName = (item) => {
    return `${item.name.title} ${item.name.first} ${item.name.last}`;
  };

  if (count !== 0) {
    return (
      <div className="contacts-container">
        <span className="contacts-header">Contacts ({count})</span>
        <div className="contacts-table-container">
          <span className="contacts-table-container_header">Name</span>
          <span className="contacts-table-container_header">Email</span>
          <span className="contacts-table-container_header">Phone Number</span>
          <span className="contacts-table-container_header"></span>
          {data.map((item) => {
            return (
              <div className="rowWrapper">
                <div className="avatar-and-name">
                  <img src={item.picture.thumbnail} alt="" width="30px" />
                  <span>{getName(item)}</span>
                </div>
                <span>{item.email}</span>
                <span>{item.cell}</span>
                <MdDelete size="1.7em" onClick={() => deleteItem(item.email)} className="hover-cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
};

export default Contacts;
