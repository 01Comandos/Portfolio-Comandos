import { createContext, useState } from 'react';

const MenuMobileContext = createContext();

const MenuMobileProvider = ({ children }) => {
  const [activeMenu, setMenuState] = useState(false);

  const toogleMenu = () => {
    if (!activeMenu) {
      document.body.style.position = '';
      // document.body.style.top = '0px';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = 'initial';
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
