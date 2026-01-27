import styled from "styled-components";
import avatar from "/img/12.png";
import { borderRadius, fontSize, fontWeight } from "../../styles/mixins";
import { useAuthStore } from "../../store/authStore";
import { useGetProfile } from "../../hooks/useProfile";
import { Logout } from "../common/Icons";

export const AppRightSidebarCover = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  display: flex;
  right: 0px;
  flex-direction: column;
`;

export const AppHeaderCover = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 14px 15px 10px;
  margin-bottom: 30px;

  & > span {
    width: 40px;
    height: 40px;

    & > img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const AppUserProfile = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    ${fontSize("13px")}
    ${fontWeight("500")}
  }
  & > p {
    ${fontSize("12px")}
    ${fontWeight("500")}
    color: ${({ theme }) => theme.colors.blue30};
  }
`;

export const AppLogoutBtn = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  ${borderRadius("50%")}
  color: ${({ theme }) => theme.colors.red40};
  background: ${({ theme }) => theme.colors.magenta100};

  & > svg {
    width: 17px;
    height: 17px;

    & > path {
      stroke: ${({ theme }) => theme.colors.orange40};
    }
  }
`;

export const RightSidebar = () => {
  const { logout } = useAuthStore();
  const { data, isLoading } = useGetProfile();

  if (isLoading) return <div>Loading profile...</div>;

  return (
    <AppRightSidebarCover>
      <AppHeaderCover>
        <span>
          <img src={avatar} alt="dipankar" />
        </span>
        <AppUserProfile>
          <h2>{data.user.name}</h2>
          <p>{data.user.email}</p>
        </AppUserProfile>
        <AppLogoutBtn onClick={() => logout()}>
          <Logout />
        </AppLogoutBtn>
      </AppHeaderCover>
    </AppRightSidebarCover>
  );
};
