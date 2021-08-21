import { useState, useEffect } from "react";

import { useAlert } from "components/common/Alert";

export const useLogin = () => { 
  const { warning } = useAlert();
  const [input, setInput] = useState('');
  const [userState, setUserState] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);
  
  const onlyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filter = value.replace(/[^0-9]/g, '').slice(0, 4);

    setInput(filter);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(userState === 0) {
      saveData();  
    } else {
      Number(input) === Number(userState) ? 
        setIsLogged(true) : 
        warning('비밀번호')
    }
  }

  const saveData = () => {
    if (input.length < 4) {
      warning('비밀번호');
    } else {
      localStorage.setItem("user", JSON.stringify(btoa(input)));
      setIsLogged(true);
    }
  };

  const loadUser = () => {
    const user = localStorage.getItem("user");

    if (user === null) {
      setUserState(0);
    } else {
      const id = Number(atob(JSON.parse(user!)));
      setUserState(id);
    }
  }

    return {
        onlyNumber,
        handleSubmit,
        saveData,
        loadUser,
        input,
        isLogged
    }
}
