import React from "react";
import styled from "styled-components";

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  color: #119955;
`

const InsertForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const SumitBtn = styled.button`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #119955;
  border-radius: 5px;
  width: 50%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #FFFFFF;
  background-color: #156AFF;
  cursor: pointer;
`;

interface LoginProps {
  input: string;
  onlyNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLogged: boolean;
}

const Login = ({ input, onlyNumber, handleSubmit }: LoginProps) => {

    return (
        <LoginBlock>
          <Title>비밀번호를 입력해주세요.</Title>
          <InsertForm onSubmit={handleSubmit}>
          <Input 
            autoFocus
            type="password"
            placeholder="4자리 숫자"
            value={input}
            onChange={onlyNumber}
          />
          <SumitBtn>확인</SumitBtn>
          </InsertForm>
        </LoginBlock>
    );
  };
  
  export default React.memo(Login);

