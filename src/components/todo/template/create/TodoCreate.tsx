import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker } from 'antd';

import { Itodo } from "components/todo/TodoService";
import { useAlert } from "components/common/Alert";

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
  align-items: center;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 40px;
  padding-bottom: 36px;
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

const InputPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const StyledDatePicker = styled(DatePicker)`
  margin-top: 6px;
  div {
    input {
    color: #119955;
    }
  }
`

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState('');
  const { warning } = useAlert();
  
  const handleDate = (value: any, dateString: any) => 
    setDate(dateString)

  const notSelectBeforeToday = (current : any) => {
    const today = new Date().setHours(0, 0, 0, 0);

    return current <= today;
  }  

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>    
    setValue(e.target.value);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(value.length === 0) {
      warning('text');
    }
    if(date.length === 0 && value.length > 0) {
      warning('date');
    } 
    if(date.length > 0 && value.length > 0) {
      const currentDay = new Date().setHours(9,0,0,0);
      const currentTime = new Date(currentDay).getTime();

      createTodo({
        id: nextId,
        text: value,
        duedate: date,
        done: false,
        dday: new Date(date).getTime() <= currentTime ? true : false,
      });
      incrementNextId();

      setValue("");
      setOpen(false);
    }
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <InputPickerWrapper>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
            <StyledDatePicker 
            placeholder="select due date"
            onChange={handleDate}
            disabledDate={notSelectBeforeToday}
            inputReadOnly 
            />
          </InputPickerWrapper>
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
