import styled from "styled-components";

interface modalOpen {
  display: boolean;
}

export const ModalOuter = styled.div<modalOpen>`
  /* display: ${({ display }) => !display && "none"}; */
  opacity: ${({ display }) => !display && "0%"};
  pointer-events: ${({ display }) => !display && "none"};
  transition: 0.1s linear;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #2f2f2f39;
  backdrop-filter: blur(2px);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: fit-content;
  border: 1px solid #5e5e5e;
  padding: 20px 40px;
  border-radius: 20px;
  background: #f9f9f9;
  div {
    display: flex;
    justify-content: space-between;
  }

  label {
    margin-bottom: 3px;
  }

  h2 {
    font-weight: 500;
    color: #5e5e5e;
    margin-bottom: 20px;
  }

  h5 {
    font-weight: 500;
    border-radius: 20px;
    padding: 3px 10px;
    font-size: 20px;
    width: fit-content;
    height: 28px;
    transition: 0.1s linear;

    :hover {
      cursor: pointer;
      background-color: #ffffff48;
    }
  }
`;

export const ModalTopRow = styled.div`
  border-bottom: 1px solid #5e5e5e;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    min-width: 400px;
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #5e5e5e;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 20px;
  }

  button {
    position: absolute;
    right: 0px;
    border-radius: 0px 5px 5px 0;
    border: 1px solid #5e5e5e;
    border-left: none;
    background-color: #686fff;
    color: white;
    height: 40px;
    padding: 0 25px;
    display: flex;
    align-items: center;

    img {
      width: 15px;
      margin-right: 10px;
    }

    p {
      font-weight: 600;
      font-size: 16px;
    }
    :hover {
      cursor: pointer;
      background-color: #575dda;
    }
  }

  div {
    display: flex;
  }
`;

interface countriesProps {
  display: boolean;
}

export const CountriesList = styled.ul<countriesProps>`
  max-height: ${({ display }) => (!display && "0px") || (display && "175px")};
  padding: ${({ display }) => (!display && "0px") || (display && "5px 0px")};
  border: ${({ display }) =>
    (!display && "none") || (display && "1px solid #5e5e5e")};
  box-sizing: border-box;
  transition: 0.1s linear;
  overflow-y: scroll;
  background: white;
  position: relative;
  margin-top: -24px;
  list-style: none;

  margin-bottom: 20px;
  li {
    font-size: 14px;

    padding: 5px 10px;
    :hover {
      cursor: pointer;
      background-color: #ededed;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #686fff;
  border: 1px solid #5e5e5e;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #575dda;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 20px;
`;
