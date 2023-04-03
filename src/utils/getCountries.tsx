import axios from "axios";

const getCountries = async () => {
  const countryList = await axios({
    method: "get",
    url: "https://restcountries.com/v3.1/all",
  });

  const countryArr: string[] = [];

  countryList.data.map((i: any) => {
    countryArr.push(i.name.common);
  });

  return countryArr;
};

export default getCountries;
