export interface ListItemProps {
  icon: React.ReactNode;
  iconBgColor?: string;
  chevronColor?: string;
  onClick?: () => void;
  title: string;
  subtitle: string;
  status?: boolean;
  rightContent?: React.ReactNode;
}
