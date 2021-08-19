import React from 'react'

import { useTodo } from "components/todo/TodoService";
import TodoTemplate from "components/todo/template/TodoTemplate";
import TodoHead from "components/todo/template/head/TodoHead";
import TodoList from "components/todo/template/list/TodoList";
import TodoCreate from "components/todo/template/create/TodoCreate";
import TodoFooter from "components/todo/template/footer/TodoFooter";

const TodoContainer = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  } = useTodo();
  
  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
