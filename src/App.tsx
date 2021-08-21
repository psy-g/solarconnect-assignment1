import React from "react";
import "antd/dist/antd.css";

import TodoContainer from "components/todo/TodoContainer";
import LoginContainer from "components/login/LoginContainer";
import { useLogin } from "components/login/LoginService";

function App() {
  const { handleSubmit, input, onlyNumber, isLogged } = useLogin();

  const RenderLayout = (
    <div>
      <TodoContainer />
    </div>
  );

  const LoginLayout = (
    <div>
      <LoginContainer 
        handleSubmit={handleSubmit} 
        input={input}
        onlyNumber={onlyNumber}
        isLogged={isLogged}
      />
    </div>
  )

  return isLogged ? RenderLayout : LoginLayout;
}

export default App;