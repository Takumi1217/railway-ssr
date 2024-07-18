import React from "react";
import "./App.css";

type ProfileProps = {
  name: string;
  description: string;
  hobbies: string[];
};

const Profile: React.FC<ProfileProps> = ({ name, description, hobbies }) => {
  return (
    <div className="profile">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>趣味</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  const myProfile = {
    name: "横野匠未",
    description: "21歳の学生。",
    hobbies: ["読書", "ゲーム", "テニス"],
  };

  return (
    <div className="App">
      <Profile
        name={myProfile.name}
        description={myProfile.description}
        hobbies={myProfile.hobbies}
      />
    </div>
  );
};

export default App;
