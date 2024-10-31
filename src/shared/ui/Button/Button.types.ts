export interface ButtonProps {
    children: React.ReactNode;
    fontSize: string;
    isActive?: boolean;
    hasBorder?: boolean;
    borderradius?: string;
    height: string;
    width: string;
    onClick: () => void;
}
