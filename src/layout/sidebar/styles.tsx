import styled from "styled-components";

export const SideBarContainer = styled.div`
  background: linear-gradient(156.78deg, #4d9eff 15.32%, #686fff 85.25%);
  height: 100vh;
  width: fit-content;
  margin-right: 5vw;

  p {
    border-radius: 10px;
    color: #4d9eff;
    transition: 0.1s linear;
    padding: 10px;
    background-color: white;
    margin-bottom: 30px;
    font-weight: 500;
    width: fit-content;
  }

  img {
    width: 30px;
    padding: 10px;
    border-radius: 15px;
    transition: 0.1s linear;
    margin-bottom: 15px;
    :hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;

export const Inner = styled.div`
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98%;
`;

export const LinksContainer = styled.div`
  display: flex;
  padding-top: 20px;
  border-top: 0.5px solid white;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopHalfContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  /* width: 40px; */
`;
