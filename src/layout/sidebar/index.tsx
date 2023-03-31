import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets";
import {
  Inner,
  LinksContainer,
  SideBarContainer,
  TopHalfContainer,
} from "./styles";

const SideBar = () => {
  const navigate = useNavigate();
  const [param, setParam] = useState("");

  useEffect(() => {
    setParam(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <SideBarContainer>
      <Inner>
        <TopHalfContainer>
          <p>TC</p>
          <LinksContainer>
            <img src={img.houseIcon} onClick={() => navigate("/")} />
            <img src={img.palmIcon} onClick={() => navigate("/holidays")} />
            <img src={img.flightsIcon} onClick={() => navigate("/flights")} />
            <img
              src={img.hotelIcon}
              onClick={() => navigate("/accommodation")}
            />
            <img src={img.taxiIcon} onClick={() => navigate("/transport")} />
            <img src={img.listIcon} onClick={() => navigate("/itinerary")} />
            <img src={img.moneyIcon} onClick={() => navigate("/budget")} />
          </LinksContainer>
        </TopHalfContainer>
        <img src={img.userIcon} onClick={() => navigate("/profile")} />
      </Inner>
    </SideBarContainer>
  );
};

export default SideBar;
