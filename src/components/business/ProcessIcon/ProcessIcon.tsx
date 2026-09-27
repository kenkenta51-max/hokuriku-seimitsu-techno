type ProcessIconProps = {
  className?: string;
  step: number;
};

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.6,
  viewBox: "0 0 48 48",
};

export function ProcessIcon({ className, step }: ProcessIconProps) {
  const content = [
    <>
      <path d="M12 7.5h17l7 7V40.5H12z" />
      <path d="M29 7.5v7h7M17 23h14M17 29h14M17 35h8" />
      <path d="M17 18h7M16 16v4M25 16v4" />
    </>,
    <>
      <circle cx="22" cy="22" r="8.5" />
      <path d="m28.2 28.2 8.3 8.3M22 17.5v9M17.5 22h9" />
      <path d="M10 10.5h9M10 15h5M32 11.5h6M35 8.5v6" />
    </>,
    <>
      <path d="M13 7.5h22v33H13zM18 14h12M18 20h12" />
      <path d="M18 27h4v4h-4zM26 27h4v4h-4zM18 35h4M26 35h4" />
      <path d="m33.5 34 2.3 2.3 4.7-5" />
    </>,
    <>
      <path d="m24 8 12 7v14L24 36 12 29V15z" />
      <path d="m12 15 12 7 12-7M24 22v14" />
      <path d="M8 39h32M12 36v6M36 36v6" />
    </>,
    <>
      <circle cx="24" cy="24" r="15.5" />
      <path d="m16.5 24.5 5 5 10.5-11" />
      <path d="M24 4.5v4M24 39.5v4M4.5 24h4M39.5 24h4" />
    </>,
    <>
      <path d="M10 12h14v24H10zM14 17h6M14 22h6M14 27h4" />
      <circle cx="33" cy="28" r="7" />
      <path d="M33 18v3M33 35v3M23 28h3M40 28h3M28 23l-2-2M38 23l2-2M28 33l-2 2M38 33l2 2" />
    </>,
    <>
      <path d="m10 18 14-8 14 8-14 8zM10 18v15l14 8 14-8V18M24 26v15" />
      <path d="M33 7.5a7 7 0 0 1 6 6M39 9v4.5h-4.5" />
      <path d="M15 40.5a7 7 0 0 1-6-6M9 39v-4.5h4.5" />
    </>,
  ][step - 1];

  return (
    <svg {...commonProps} aria-hidden="true" className={className} focusable="false">
      {content}
    </svg>
  );
}
