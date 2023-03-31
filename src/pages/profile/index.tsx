import { useState } from "react";
import {
  Modal,
  NavButton,
  PageContainer,
  PageNav,
} from "../../reusable/styles";
import ChangePasswordModal from "./modals/changePassword";

const ProfilePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageContainer>
      <PageNav>
        <h1>Profile</h1>
        <NavButton onClick={() => setModalOpen(true)}>
          Change Password
        </NavButton>
      </PageNav>
      <ChangePasswordModal display={modalOpen} setModalOpen={setModalOpen} />
    </PageContainer>
  );
};

export default ProfilePage;
