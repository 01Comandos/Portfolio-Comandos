import { createContext, useState } from "react";

const MenuMobileContext = createContext();

const MenuMobileProvider = ({ children }) => {
  const [activeMenu, setMenuState] = useState(false);

  const toogleMenu = () => {
    if (!activeMenu) {
      document.body.style.position = "fixed";
      document.body.style.top = "0px";
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
    }
    setMenuState(!activeMenu);
  };

  return (
    <MenuMobileContext.Provider value={{ activeMenu, toogleMenu }}>
      {children}
    </MenuMobileContext.Provider>
  );
};

export { MenuMobileProvider, MenuMobileContext };
