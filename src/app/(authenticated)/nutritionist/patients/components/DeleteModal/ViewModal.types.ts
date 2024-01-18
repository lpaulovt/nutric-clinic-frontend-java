export interface ModalProps {
  title: string;
  subtitle?: string;
  onConfirm: () => void;
  buttonConfirmLabel?: string;
  buttonModal?: React.ReactNode;
}
