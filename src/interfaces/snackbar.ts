
export type SnackbarType = "success" | "error" | "info" | "warning";

export interface SnackbarData {
    isOpen: boolean;
    body: string;
    type: SnackbarType;
    onClose?: () => void;
  }
  