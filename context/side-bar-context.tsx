import React, {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const sideBarContext = createContext<{
  isOpen: boolean;
  sideBarIsOpen: boolean;
  mostSideBarIsOpen: boolean;
  payementModelIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setSideBarIsOpen: Dispatch<SetStateAction<boolean>>;
  setMostSideBarIsOpen: Dispatch<SetStateAction<boolean>>;
  setPayementModelIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
  mostSideBarIsOpen: false,
  setMostSideBarIsOpen: () => {},
  payementModelIsOpen: false,
  setPayementModelIsOpen: () => {},
  sideBarIsOpen: false,
  setSideBarIsOpen: () => {},
});

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mostSideBarIsOpen, setMostSideBarIsOpen] = useState(false);
  const [payementModelIsOpen, setPayementModelIsOpen] = useState(false);

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  return (
    <sideBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        sideBarIsOpen,
        setSideBarIsOpen,
        payementModelIsOpen,
        setPayementModelIsOpen,
        mostSideBarIsOpen,
        setMostSideBarIsOpen,
      }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(sideBarContext);
};
