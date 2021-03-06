import React from "react";
import styled, { css } from "styled-components";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

import { Itodo } from "components/todo/TodoService";
import { useDelete } from "components/common/Alert";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean, dday: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
  ${(props) =>
    props.dday &&
    css`
      border: 1px solid red;
      color: red;
    `}
  ${(props) =>
    props.done && props.dday &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}        
`;

const Text = styled.div<{ done: boolean, dday: boolean }>`
  /* flex: 1; */
  flex: 0.6;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
  ${(props) =>
    props.dday &&
    css`
      color: red;
    `}
  ${(props) =>
    props.done && props.dday &&
    css`
      color: #ced4da;
    `}         
`;

//
const DueDate = styled.div<{ done: boolean, dday: boolean }>`
  flex: 0.4;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
  ${(props) =>
    props.dday &&
    css`
      color: red;
    `}
  ${(props) =>
    props.done && props.dday &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}     
`

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { id, text, duedate, done, dday} = todo;
  const { showDeleteConfirm } = useDelete({ removeTodo });

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleRemove = () => {
    showDeleteConfirm(id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle} dday={dday}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done} dday={dday}>{text}</Text>
      <DueDate done={done} dday={dday}>{duedate}</DueDate>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
