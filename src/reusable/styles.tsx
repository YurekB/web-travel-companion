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
  border: 0.5px solid #5e5e5e;
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
