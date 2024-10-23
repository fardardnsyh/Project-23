import { useCallback } from "react";

const useLocalStorage = () => {
  const setItem = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback((key) => {
    return JSON.parse(localStorage.getItem(key));
  }, []);

  const removeItem = useCallback((key) => {
    localStorage.removeItem(key);
  }, []);

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
