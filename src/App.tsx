import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const ProfileWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ProfileDescription = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const HobbiesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HobbyItem = styled.li`
  font-size: 1em;
  margin: 5px 0;
`;

type ProfileProps = {
  name: string;
  description: string;
  hobbies: string[];
};

const Profile: React.FC<ProfileProps> = ({ name, description, hobbies }) => (
  <ProfileWrapper>
    <ProfileTitle>{name}</ProfileTitle>
    <ProfileDescription>{description}</ProfileDescription>
    <h2>趣味</h2>
    <HobbiesList>
      {hobbies.map((hobby, index) => (
        <HobbyItem key={index}>{hobby}</HobbyItem>
      ))}
    </HobbiesList>
  </ProfileWrapper>
);

const App: React.FC = () => {
  const myProfile = {
    name: "横野匠未",
    description: "21歳の学生。",
    hobbies: ["読書", "ゲーム", "テニス"],
  };

  return (
    <AppWrapper>
      <Profile
        name={myProfile.name}
        description={myProfile.description}
        hobbies={myProfile.hobbies}
      />
    </AppWrapper>
  );
};

export default App;
