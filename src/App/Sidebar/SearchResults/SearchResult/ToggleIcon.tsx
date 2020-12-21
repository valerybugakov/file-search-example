// accepts in size in pixels
type ToggleIconProps = {
  size?: number;
  className?: string;
};

export const ToggleIcon = ({ size = 8, className }: ToggleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 7.99986L4 15L4 1L14 7.99986Z" fill="currentColor" />
    </svg>
  );
};
