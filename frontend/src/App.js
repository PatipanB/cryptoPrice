import {useEffect, useState} from "react";
import {getPriceBySymbol} from "./services/getPriceService";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchArea from "./components/SearchArea/SearchArea";
import CandleChart from "./components/CandleChart/CandleChart";

function App() {
  const [data, setData] = useState([]);
  const [coin, setCoin] = useState([]);

  const fetchData = async (symbol) => {
    const response = await getPriceBySymbol(symbol);
    setData(response);
    setCoin(symbol);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchArea fetchData={fetchData} />
      {data.length > 1 && <CandleChart data={data} coin={coin} />}
    </div>
  );
}

export default App;
