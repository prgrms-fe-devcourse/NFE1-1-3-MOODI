export interface ButtonProps {
    children: React.ReactNode;
    fontSize: string;
    isActive: boolean;
    hasBorder: boolean;
    height: string;
    width: string;
    onClick: () => void;
}
