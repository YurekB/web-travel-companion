import { useState } from "react";
import { NavButton, PageContainer, PageNav } from "../../reusable/styles";
import AddHolidayModal from "./modals/addHoliday";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <PageContainer>
      <PageNav>
        <h1>Home</h1>
        <NavButton onClick={() => setModalOpen(true)}>
          <p>Add Holiday</p>
        </NavButton>
      </PageNav>
      <AddHolidayModal display={modalOpen} setModalOpen={setModalOpen} />
    </PageContainer>
  );
};

export default HomePage;
