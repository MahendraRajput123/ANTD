import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const Search1 = () => {
  const fruits = ["Banana", "Apple", "Mango", "cherry"];
  return (
    <div>
      <header className="App-header">
        <p className="bt-5 mt-5">Which is your favourite food</p>
        <Select
          mode="multiple"
          placeholder="select your fruits"
          style={{ width: "500px" }}
          maxTagCount={2}
          allowClear
        >
          {fruits.map((fruit, index) => {
            return <Select.Option key={index} value={fruit}></Select.Option>;
          })}
        </Select>
      </header>
    </div>
  );
};

export default Search1;
