import axios from "axios";

const host = "http://localhost:8000/api";

const header = {
  "Content-Type": "application/json",
};

export const getPriceBySymbol = async (symbol) => {
  try {
    const response = await axios.get(`${host}/candleStick/${symbol}`, {
      headers: header,
    });
    return response.data;
    // if (!response.data.success) console.error(response.data.message)
    // else return response.data.result
  } catch (error) {
    console.error(error);
  }
};
