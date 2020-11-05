import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Table, Popconfirm, Button } from "antd";

const ProductList = ({ onDelete, products1 }) => {
  const columns = [
    {
      title: "商品",
      dataIndex: "goodsName",
    },
    {
      title: "价格",
      render: (text, record) => {
        return <span key={record.price}>{record.price}</span>;
      },
    },
    {
      title: "操作",
      render: (text, record) => {
        return (
          <Popconfirm
            title="Delete?"
            onConfirm={() => onDelete(record.goodsId)}
            key={record.goodsId}
          >
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  const rowhandle = (record) => {
    return record.goodsId;
  };
  return <Table dataSource={products1} columns={columns} rowKey={rowhandle} />;
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products1: PropTypes.array.isRequired,
};

export default connect()(ProductList);
