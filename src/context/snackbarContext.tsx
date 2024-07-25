import React, { createContext, useContext, useState, ReactNode } from "react";

type SnackbarType = "success" | "error" | "info" | "warning";

interface SnackbarData {
  isOpen: boolean;
  body: string;
  type: SnackbarType;
  onClose?: () => void;
}

interface SnackBarContextProps {
  snackbarData: SnackbarData;
  setSnackbarData: React.Dispatch<React.SetStateAction<SnackbarData>>;
}

const SnackBarContext = createContext<SnackBarContextProps | undefined>(undefined);

const BODY_TEXT = "";

export const SNACKBAR_TYPES = {
  SUCCESS: "success" as SnackbarType,
  ERROR: "error" as SnackbarType,
  INFO: "info" as SnackbarType,
  WARNING: "warning" as SnackbarType,
};

export const INIT_SNACKBAR: SnackbarData = {
  isOpen: false,
  body: BODY_TEXT,
  type: SNACKBAR_TYPES.INFO,
  onClose: () => { },
};

interface SnackBarContextProviderProps {
  children: ReactNode;
}

const SnackBarContextProvider: React.FC<SnackBarContextProviderProps> = ({ children }) => {
  const [snackbarData, setSnackbarData] = useState<SnackbarData>(INIT_SNACKBAR);

  return (
    <SnackBarContext.Provider value={{ snackbarData, setSnackbarData }}>
      {children}
    </SnackBarContext.Provider>
  );
};

const useSnackBarContext = (): SnackBarContextProps => {
  const context = useContext(SnackBarContext);
  if (context === undefined) {
    throw new Error("useSnackBarContext must be used within a SnackBarContextProvider");
  }
  return context;
};

export { SnackBarContextProvider, useSnackBarContext };
