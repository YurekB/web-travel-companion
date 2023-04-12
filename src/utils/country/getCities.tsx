import axios from "axios";

const getCities = async (country: string) => {
  try {
    const cities = await axios({
      method: "post",
      url: "https://countriesnow.space/api/v0.1/countries/cities",
      data: { country },
    });

    return cities.data.data;
  } catch (err) {
    console.log("Error in get cities function");
  }
};

export default getCities;
