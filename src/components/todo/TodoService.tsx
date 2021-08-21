/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  duedate: string;
  done: boolean;
  dday: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);  
  var nextIdState = 0;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    nextIdState = nextIdState + 1;
  };

  const checkDueDate = (input: any) => {
    const currentDay = new Date().setHours(9, 0, 0, 0);
    const currentTime = new Date(currentDay).getTime();

    const changeDday = input.map((todo: Itodo) => {
      new Date(todo.duedate).getTime() <= currentTime ? (todo.dday = true) : (todo.dday = false);

      return todo;
    })

    setTodoState(changeDday);  
  }

  const toggleTodo = (id: number) => {
    const completeTodo = todoState.map((todo: Itodo) => {
      todo.id === id && (todo.done = !todo.done);

      return todo;
    })

    setTodoState(completeTodo)   
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    const nextId = todoState[todoState.length - 1] ? (todoState[todoState.length - 1].id + 1) : (todoState.length + 1);
    
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");

    if (data === null) data = "[]";
    initialTodos = JSON.parse(data!);
    if (initialTodos && initialTodos.length >= 1) {
      incrementNextId();
    }

    checkDueDate(initialTodos);
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
