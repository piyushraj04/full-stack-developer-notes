import { useState } from "react";

import Credentials from "./components/Credentials";
import AuthEntry from "./components/Auth";
import Student from "./components/Student";
import Trainer from "./components/Trainer";
import LifecCycle from "./components/LifecCycle";

const StudentWithAuth = AuthEntry(Student);
const TrainerWithAuth = AuthEntry(Trainer);

function App() {

  const [loginData, setLoginData] = useState(null);

  function handleLogin(username, password, role) {

    setLoginData({
      username,
      password,
      role
    });

  }

  return (
    <>
      {/* {!loginData && (
        <Credentials onLogin={handleLogin} />
      )}

      {loginData?.role === "Student" && (
        <StudentWithAuth
          username={loginData.username}
          password={loginData.password}
          role={loginData.role}
        />
      )}

      {loginData?.role === "Trainer" && (
        <TrainerWithAuth
          username={loginData.username}
          password={loginData.password}
          role={loginData.role}
        />
      )} */}
      <LifecCycle/>
    </>
  );
}

export default App;