import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Select } from "antd";
const { Option } = Select;


const App = () => {
  const [selectUser , setSelectUser]=useState("")
  let arr;
  selectUser ?  arr =  [
    {
      text: selectUser,
      value: selectUser,
    }
  ] :"please Select Your Name"
  
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters:arr,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value: string, record) => record.name.startsWith(value),
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
  return(
    <>
    <Table columns={columns} dataSource={data} onChange={onChange} style={{width:"600px"}}/>
    <Select
          // mode="multiple"
          placeholder="Select Your Name"
          style={{ width: "600px" }}
          maxTagCount={2}
          allowClear
          onChange={(value) => { setSelectUser(value) }}
          showArrow={true}
          virtual={true}
          listItemHeight={10} listHeight={250}
        >
         <Option  value={"Joe"}>joe</Option>
         <Option  value={"Jim Green"}>Jim Green</Option>
         <Option  value={"John Brown"}>John Brown</Option>
         <Option  value={"Dinesh"}>Dinesh</Option>
         <Option  value={"Mahendra"}>Mahendra</Option>
        </Select>
        <h1>{selectUser}</h1>
    </>
  )
};

export default App;