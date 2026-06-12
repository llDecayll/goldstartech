export default function StarMark({ className = "", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.9 6.5 4.6 10.2 12 12-7.4 1.8-11.1 5.5-12 12-.9-6.5-4.6-10.2-12-12C7.4 10.2 11.1 6.5 12 0z" />
    </svg>
  );
}
