import axios from "axios";

interface props {
  title: string;
  country: string;
  city: string;
}

const postHoliday = async (data: props) => {
  try {
    console.log("In post holiday");

    const url = `${process.env.REACT_APP_API_LINK}/create-holiday`;

    console.log(url, "url");

    const postHoliday = await axios({
      method: "post",
      url,
      data,
    });

    console.log(postHoliday, "post holiday");
  } catch (err) {
    console.log("Error in post holiday function", err);
  }
};

export default postHoliday;
