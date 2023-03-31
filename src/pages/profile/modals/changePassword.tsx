import { Modal } from "../../../reusable/styles";

interface props {
  display: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordModal = ({ display, setModalOpen }: props) => {
  return (
    <Modal display={display}>
      <h2>Change Password</h2>
      <h5 onClick={() => setModalOpen(false)}>x</h5>
    </Modal>
  );
};

export default ChangePasswordModal;
