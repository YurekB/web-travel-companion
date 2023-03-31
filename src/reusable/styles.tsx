import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 35px;
  width: calc(100% - 100px);
  margin: 0 50px;
`;

export const PageNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #5e5e5e;
  width: 100%;
`;

export const NavButton = styled.button`
  border: 0;
  background: none;
  border-radius: 20px;
  padding: 0 15px;
  transition: 0.1s linear;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }

  :hover {
    cursor: pointer;
    background: rgba(195, 195, 195, 0.161);
  }
`;

interface modalOpen {
  display: boolean;
}

export const Modal = styled.div<modalOpen>`
  display: ${({ display }) => !display && "none"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 700px;
  border: 1px solid #5e5e5e;
  padding: 20px 40px;
  border-radius: 20px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 500;
    color: #5e5e5e;
  }

  h5 {
    font-weight: 500;
    border-radius: 20px;
    padding: 3px 10px;
    font-size: 20px;
    width: fit-content;
    :hover {
      cursor: pointer;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
