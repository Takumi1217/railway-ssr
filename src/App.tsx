import React from 'react';
import './App.css';

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
      <h2>Hobbies</h2>
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
    name: "Takumi Yokono",
    description: "I'm a 21 year old vocational school student.",
    hobbies: ["Reading", "Gaming", "Tennis"]
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
}

export default App;
