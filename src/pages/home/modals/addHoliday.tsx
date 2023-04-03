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
import getCountries from "../../../utils/getCountries";

interface props {
  display: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddHolidayModal = ({ display, setModalOpen }: props) => {
  const [countryArr, setCountryArr] = useState<any[]>([]);
  const [countriesOpen, setCountriesOpen] = useState<boolean>(false);
  const [countrySelected, setCountrySelected] = useState<boolean>(false);
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

  const countrySearch = async () => {
    const countryArr = await getCountries();
    const filteredArr = countryArr.filter((i: string) => {
      if (i.toLowerCase().includes(holiday.country.toLowerCase())) {
        return i;
      } else return;
    });

    if (filteredArr.length > 0) {
      setCountryArr(filteredArr);
      setCountriesOpen(true);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHoliday({ ...holiday, [e.target.id]: e.target.value });
  };

  const clickCountry = (e: React.MouseEvent<HTMLElement>) => {
    setHoliday({ ...holiday, country: (e.target as Element).innerHTML });
    setCountriesOpen(false);
    setCountrySelected(true);
  };

  const addHoliday = () => {
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
    }
    if (holiday.city.length === 0) {
      errObj.city = true;
    }

    setErrorObj(errObj);

    if (Object.values(errObj).includes(true)) {
      console.log("ERROR");
    }
  };

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
        {errorObj.country ? (
          <ErrorText>Please search for and then select a country</ErrorText>
        ) : null}
        <InputContainer>
          <label>City / Town</label>
          <input
            id="city"
            value={holiday.city}
            onChange={onChange}
            maxLength={85}
          />
        </InputContainer>
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
