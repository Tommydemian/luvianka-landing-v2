type DecorativeUnderlineProps = {
  className?: string;
};
export const DecorativeUnderline = ({
  className,
}: DecorativeUnderlineProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="12"
    fill="none"
    viewBox="0 0 120 12"
    className={className}
  >
    <path
      stroke="#E12C48"
      strokeLinecap="round"
      strokeWidth="3"
      d="M1.703 10.1c.245.306 5.694-1.769 6.872-1.856 5.393-.4 10.816-1.01 16.2-1.555 14.107-1.425 27.508-4.715 41.731-4.715 17.642 0 34.549-.714 51.662 2.709"
    ></path>
  </svg>
);
