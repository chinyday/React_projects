import { createContext, useState, useContext, useEffect} from "react";

// 리액트에서 제공해주는 createContext를 만든다
const DarkModeContext = createContext();

// 하위 컴포넌트를 감싸주는 역할
export function DarkModeProvider({children}) {

  //children = 자식 컴포넌트를 받아와서 
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }
  
  // useEffect(() => {
    
  //   return () => {
  //   };
  // }, []);
  //darkMode, toggleDarkMode 값을 children에 전달해줄게얌!
  return<DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
}

function updateDarkMode(darkMode) {
  if(darkMode){
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
//useDarkMode라는 훅을 만들어서 사용!!
export const useDarkMode = () => useContext(DarkModeContext);