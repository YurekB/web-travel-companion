import { useState } from "react";
import { NavButton, PageContainer, PageNav } from "../../reusable/styles";

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
    </PageContainer>
  );
};

export default ProfilePage;
