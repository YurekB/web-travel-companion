import { InputContainer, Modal } from "../../../reusable/styles";
import getCountries from "../../../utils/getCountries";

interface props {
  display: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddHolidayModal = ({ display, setModalOpen }: props) => {
  getCountries();

  return (
    <Modal display={display}>
      <div>
        <h2>Add Holiday</h2>
        <h5 onClick={() => setModalOpen(false)}>x</h5>
      </div>
      <div>
        <InputContainer>
          <label>Title</label>
          <input />
        </InputContainer>
        <InputContainer>
          <label>Country</label>
          <input />
        </InputContainer>
      </div>
    </Modal>
  );
};

export default AddHolidayModal;
