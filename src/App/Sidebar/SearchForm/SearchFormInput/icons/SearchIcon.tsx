type SearchIconProps = {
  size?: number;
  className?: string;
};

export const SearchIcon = ({ size = 16, className }: SearchIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.96631 9.93225C8.2316 10.5532 7.29574 10.9251 6.27663 10.9251C3.91471 10.9251 2 8.92718 2 6.46257C2 3.99796 3.91471 2 6.27663 2C8.63855 2 10.5533 3.99796 10.5533 6.46257C10.5533 7.52599 10.1968 8.50253 9.60174 9.26919L14 13.8587L13.3646 14.5217L8.96631 9.93225ZM9.65462 6.46257C9.65462 8.4093 8.14224 9.98743 6.27663 9.98743C4.41102 9.98743 2.89864 8.4093 2.89864 6.46257C2.89864 4.51584 4.41102 2.93771 6.27663 2.93771C8.14224 2.93771 9.65462 4.51584 9.65462 6.46257Z"
        fill="currentColor"
      />
    </svg>
  );
};
