import { useEffect, useState } from "react";
import { NavButton, PageContainer, PageNav } from "../../reusable/styles";
import getHolidays from "../../utils/holidays/getHolidays";
import AddHolidayModal from "./modals/addHoliday";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [holidays, setHolidays] = useState<any[]>([]);

  useEffect(() => {
    getHolidays()
      .then((res: any) => {
        setHolidays(res.data.holidays);
      })
      .catch((err: any) => {
        console.log("Error in get use effect get holidays catch", err);
      });
  }, []);

  return (
    <PageContainer>
      <PageNav>
        <h1>Home</h1>
        <NavButton onClick={() => setModalOpen(true)}>
          <p>Add Holiday</p>
        </NavButton>
      </PageNav>
      {holidays.map((holiday: any) => {
        return <p>{holiday.title}</p>;
      })}
      <AddHolidayModal display={modalOpen} setModalOpen={setModalOpen} />
    </PageContainer>
  );
};

export default HomePage;
