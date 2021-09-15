import "./SearchArea.css";
// import { Input } from "antd";
import {Select} from "antd";
import {useEffect, useState} from "react";
import {getAllSymbols} from "../../services/getAllSymbols";

const SearchArea = ({fetchData}) => {
  const [symbols, setSymbols] = useState([]);
  useEffect(() => {
    fetchSymbols();
  }, []);

  const fetchSymbols = async () => {
    const response = await getAllSymbols();
    setSymbols(response);
  };

  return (
    <div className="container">
      <div className="input__header">What is your Cryptocurrency Symbol ?</div>
      {/* <Input.Search
        placeholder="input search text"
        onSearch={(data) => fetchData(data)}
        enterButton
      /> */}

      <Select defaultValue="DOGEUSDT" onSelect={fetchData}>
        {symbols.map((data, index) => (
          <Select.Option value={data.value}>{data.value}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SearchArea;
