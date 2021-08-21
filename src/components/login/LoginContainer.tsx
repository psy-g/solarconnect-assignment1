import React from 'react'

import LoginTemplate from "components/todo/template/TodoTemplate";
import Login from "components/login/template/body/LoginBody";

interface LoginContainerProps {
  input: string;
  onlyNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLogged: boolean;
}

const LoginContainer = ({ input, onlyNumber, handleSubmit, isLogged }: LoginContainerProps) => {
    return (
      <>
        <LoginTemplate>
            <Login 
              handleSubmit={handleSubmit}
              input={input}
              onlyNumber={onlyNumber}
              isLogged={isLogged}
            />
        </LoginTemplate>
      </>
    );
  };
  
  export default LoginContainer;