import axios from "axios";

const getHolidays = async () => {
  try {
    const url = `${process.env.REACT_APP_API_LINK}/get-holidays`;

    return await axios({ method: "get", url });
  } catch (err) {
    console.log("Error in get holidays function", err);
  }
};

export default getHolidays;
