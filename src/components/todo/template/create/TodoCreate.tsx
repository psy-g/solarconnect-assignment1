import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

// 
import { DatePicker, Space } from 'antd';
import { useAlert } from "components/common/Alert";
//

import { Itodo } from "components/todo/TodoService";

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  /* width: 100%; */
  width: 50%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

//
const StyledDueDateWrapper = styled(Space)`
  padding: 6px;
  width: 30%;
`
//

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  
  //
  const { warning } = useAlert();
  const [date, setDate] = useState('');
  const handleDate = (value: any, dateString: any) => 
    setDate(dateString)
  //

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>    
    setValue(e.target.value);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    //
    if(value.length === 0) {
      warning('text');
    }
    if(date.length === 0 && value.length > 0) {
      warning('date');
    } 
    if(date.length > 0 && value.length > 0) {
    //
    
      createTodo({
        id: nextId,
        text: value,
        duedate: date,
        done: false
      });
      incrementNextId(); // nextId 하나 증가

      setValue(""); // input 초기화
      setOpen(false); // open 닫기
    }
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />

          <StyledDueDateWrapper>
            <DatePicker 
            placeholder="due date"
            onChange={handleDate} 
            />
          </StyledDueDateWrapper>

          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
