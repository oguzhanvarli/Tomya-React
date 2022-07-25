import React, { useEffect, useState } from "react";
import { Table } from "antd";
import {API_URL} from '../../network/env/config'
function HomeTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fetch(API_URL + "/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Get user error", error);
    }
  };
  const columns = [
    {
      title: "Ad",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <div className="row justify-content-center mt-2">
      <Table
        rowKey="id"
        className="col-md-10"
        dataSource={users}
        columns={columns}
      />
    </div>
  );
}

export default HomeTable;
