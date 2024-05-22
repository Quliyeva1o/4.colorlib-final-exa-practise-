import React, { useContext } from "react";
import { Table } from "antd";
import { MyBasketContext } from "../../context/context";
const columns = [
    {
        title: "title",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "count",
        dataIndex: "count",
        key: "newPrice",
    },
    {
        title: "newPrice",
        dataIndex: "newPrice",
        key: "newPrice",
    },
  
    {
        title: "Action",
        dataIndex: "_id",
        key: "x",
        render: () => <a>Delete</a>,
    },
];
const Basket = () => {
    const { basket, setBasket } = useContext(MyBasketContext);

    return (
      <>  <Table
      style={{marginTop:"150px"}}
      columns={columns}
      expandable={{
          expandedRowRender: (record) => (
              <p
                  style={{
                      margin: 0,
                  }}
              >
                  {record.description}
              </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={basket}
  /></>
    );
};





export default Basket;
