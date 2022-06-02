import React, { useEffect, useState } from "react";
import Header from "./HeaderComponent/HeaderComponent";
import Contacts from "./ContactsComponent/ContactsComponent";
import axios from "axios";

const Dashboard = () => {
  const [contactsData, setContactsData] = useState([]);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://randomuser.me/api?results=200");
      setContactsData(data.results);
      setDataCount(data.info.results);
      console.log(data);
    }

    fetchData();
  }, [])

  const deleteItemHandler = (id) => {
    const contactsDataTemp = contactsData.slice();
    let deletedItem = contactsDataTemp.find(item => item.email === id);
    let deletedItemIndex = contactsDataTemp.indexOf(deletedItem);
    if (deletedItemIndex !== -1) {
      contactsDataTemp.splice(deletedItemIndex, 1);
    }

    setContactsData(contactsDataTemp);
  }

  return <div className="dashboard-container">
      <Header />
      <Contacts data={contactsData} count={dataCount} deleteItem={deleteItemHandler} />
  </div>;
};

export default Dashboard;
