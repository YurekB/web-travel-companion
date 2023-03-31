import axios from "axios";

const getCountries = async () => {
  const countryList = await axios({
    method: "get",
    url: "https://restcountries.com/v3.1/all",
  });

  console.log(
    countryList.data[10].name.common,
    countryList.data[10],
    "country list"
  );

  const countryArr: string[] = [];

  countryList.data.map((i: any) => {
    countryArr.push(i.name.common);
  });

  console.log(countryArr, "country arr");

  return countryList;
};

export default getCountries;
