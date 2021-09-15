import axios from "axios";

const host = "http://localhost:8000/api";

const header = {
  "Content-Type": "application/json",
};

export const getAllSymbols = async () => {
  try {
    const response = await axios.get(`${host}/candleStick/all`, {
      headers: header,
    });
    return response.data;
    // if (!response.data.success) console.error(response.data.message)
    // else return response.data.result
  } catch (error) {
    console.error(error);
  }
};
