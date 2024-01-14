export interface ListItemProps {
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
  title: string;
  subtitle: string;
  status?: boolean;
}
