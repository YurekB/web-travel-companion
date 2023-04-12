import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import img from "../../../assets";

import {
  Modal,
  ModalOuter,
  ModalTopRow,
  InputContainer,
  CountriesList,
  SubmitButton,
  ErrorText,
} from "../../../reusable/modalStyles";
import getCities from "../../../utils/country/getCities";
import getCountries from "../../../utils/country/getCountries";
import postHoliday from "../../../utils/holidays/postHoliday";

interface props {
  display: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddHolidayModal = ({ display, setModalOpen }: props) => {
  const [countryArr, setCountryArr] = useState<any[]>([]);
  const [cityArr, setCityArr] = useState<any[]>([]);
  const [countriesOpen, setCountriesOpen] = useState<boolean>(false);
  const [citiesOpen, setCitiesOpen] = useState<boolean>(false);
  const [countrySelected, setCountrySelected] = useState<boolean>(false);
  const [citySelected, setCitySelected] = useState<boolean>(false);
  const [countryErrText, setCountryErrText] = useState<string>("");
  const [errorObj, setErrorObj] = useState({
    title: false,
    country: false,
    city: false,
  });
  const [holiday, setHoliday] = useState({
    title: "",
    country: "",
    city: "",
  });

  //TODO ERROR IF I CLICK THE COUNTRY LIST OUTSIDE OF AN ACTUAL COUNTRY, IE CLICK THE PADDING

  const closeModal = () => {
    setModalOpen(false);
    setHoliday({ title: "", country: "", city: "" });
    setCountriesOpen(false);
    setCountrySelected(false);
    setCountryArr([]);
    setErrorObj({
      title: false,
      country: false,
      city: false,
    });
  };

  useEffect(() => {
    getCities("Poland");
  }, []);

  const countrySearch = async () => {
    const cityArr = await getCountries();
    const filteredArr = cityArr.filter((i: string) => {
      if (i.toLowerCase().includes(holiday.country.toLowerCase())) {
        return i;
      } else return;
    });

    if (filteredArr.length > 0) {
      setCountryArr(filteredArr);
      setCountriesOpen(true);
    } else {
      errorObj.city = true;
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHoliday({ ...holiday, [e.target.id]: e.target.value });
    if (e.target.id !== "country") {
      setErrorObj({ ...errorObj, [e.target.id]: false });
    }
  };

  const clickCountry = (e: React.MouseEvent<HTMLElement>) => {
    setHoliday({ ...holiday, country: (e.target as Element).innerHTML });
    setErrorObj({ ...errorObj, country: false });
    setCountriesOpen(false);
    setCountrySelected(true);
  };

  const addHoliday = async () => {
    const errObj = {
      title: false,
      country: false,
      city: false,
    };

    if (holiday.title.length === 0) {
      errObj.title = true;
    }
    if (!countrySelected) {
      errObj.country = true;
      setCountryErrText("Please search for and then select a country");
    }
    if (!citySelected && countrySelected) {
      errObj.city = true;
    }

    setErrorObj(errObj);

    if (!Object.values(errObj).includes(true)) {
      console.log("Successfully did nothing but its great");
      postHoliday(holiday)
        .then((res: any) => {
          console.log("Successfuly posted holiday");
          closeModal();
          window.location.reload();
        })
        .catch((err: any) => {
          console.log("Sorry something went wrong");
        });
    }
  };

  const citySearch = async () => {
    const cityArr = await getCities(holiday.country);
    const filteredArr = cityArr.filter((i: string) => {
      if (i.toLowerCase().includes(holiday.city.toLowerCase())) {
        return i;
      } else return;
    });

    if (filteredArr.length > 0) {
      setCityArr(filteredArr);
      setCitiesOpen(true);
    } else {
    }
  };

  const clickCity = (e: React.MouseEvent<HTMLElement>) => {
    setHoliday({ ...holiday, city: (e.target as Element).innerHTML });
    setCitiesOpen(false);
    setCitySelected(true);
  };

  return (
    <ModalOuter display={display}>
      <Modal>
        <ModalTopRow>
          <h2>Add Holiday</h2>
          <h5 onClick={closeModal}>x</h5>
        </ModalTopRow>
        <InputContainer>
          <label>Holiday Title</label>
          <input
            placeholder="e.g. Family trip to Spain"
            id="title"
            value={holiday.title}
            onChange={onChange}
            maxLength={150}
          />
        </InputContainer>
        {errorObj.title ? (
          <ErrorText>Please enter a short title for your holiday</ErrorText>
        ) : null}
        <InputContainer>
          <label>Country</label>
          <div>
            <input id="country" value={holiday.country} onChange={onChange} />
            <button onClick={countrySearch}>
              <img src={img.searchIcon} />
              <p>Search</p>
            </button>
          </div>
        </InputContainer>
        <CountriesList onClick={clickCountry} display={countriesOpen}>
          {countryArr.sort().map((i: string) => {
            return <li key={i}>{i}</li>;
          })}
        </CountriesList>
        {errorObj.country ? <ErrorText>{countryErrText}</ErrorText> : null}
        {countrySelected ? (
          <>
            <InputContainer>
              <label>City / Town</label>
              <div>
                <input
                  id="city"
                  value={holiday.city}
                  onChange={onChange}
                  maxLength={85}
                />
                <button onClick={citySearch}>
                  <img src={img.searchIcon} />
                  <p>Search</p>
                </button>
              </div>
            </InputContainer>
            <CountriesList onClick={clickCity} display={citiesOpen}>
              {cityArr.sort().map((i: string) => {
                return <li key={i}>{i}</li>;
              })}
            </CountriesList>
          </>
        ) : null}

        {errorObj.city ? (
          <ErrorText>
            Please enter the name of the place you are going
          </ErrorText>
        ) : null}
        <SubmitButton onClick={addHoliday}>Add Holiday</SubmitButton>
      </Modal>
    </ModalOuter>
  );
};

export default AddHolidayModal;
