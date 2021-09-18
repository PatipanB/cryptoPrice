import {Chart} from "react-google-charts";

const CandleChart = ({data, coin}) => {
  return (
    <Chart
      width={"100%"}
      height={600}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={[["DateTime", "Low", "Open", "Close", "High"], ...data]}
      options={{
        title: coin,
        legend: "left",
        bar: {groupWidth: "100%"}, // Remove space between bars.
        candlestick: {
          fallingColor: {strokeWidth: 0, fill: "#a52714"}, // red
          risingColor: {strokeWidth: 0, fill: "#0f9d58"}, // green
        },
      }}
      rootProps={{"data-testid": "1"}}
    />
  );
};

export default CandleChart;
