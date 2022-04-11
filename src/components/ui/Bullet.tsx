export const Bullet = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.6" cx="16" cy="16" r="16" fill="#CAFFD9" />
      <path
        d="M16 6.22229C14.0661 6.22229 12.1757 6.79575 10.5678 7.87014C8.95982 8.94454 7.70658 10.4716 6.96652 12.2583C6.22647 14.0449 6.03283 16.0109 6.41011 17.9076C6.78739 19.8043 7.71863 21.5466 9.08608 22.914C10.4535 24.2814 12.1958 25.2127 14.0925 25.59C15.9892 25.9672 17.9551 25.7736 19.7418 25.0336C21.5285 24.2935 23.0555 23.0403 24.1299 21.4323C25.2043 19.8244 25.7778 17.9339 25.7778 16.0001C25.7778 13.4068 24.7476 10.9198 22.9139 9.08613C21.0803 7.25245 18.5932 6.22229 16 6.22229ZM22.3861 12.7184L14.3561 20.7423L9.6139 16.0001C9.45182 15.838 9.36077 15.6182 9.36077 15.389C9.36077 15.1597 9.45182 14.9399 9.6139 14.7778C9.77598 14.6158 9.9958 14.5247 10.225 14.5247C10.4542 14.5247 10.674 14.6158 10.8361 14.7778L14.3683 18.3101L21.1761 11.5084C21.2564 11.4281 21.3516 11.3645 21.4565 11.3211C21.5614 11.2776 21.6737 11.2553 21.7872 11.2553C21.9007 11.2553 22.0131 11.2776 22.118 11.3211C22.2228 11.3645 22.3181 11.4281 22.3983 11.5084C22.4786 11.5887 22.5423 11.6839 22.5857 11.7888C22.6291 11.8936 22.6515 12.006 22.6515 12.1195C22.6515 12.233 22.6291 12.3454 22.5857 12.4502C22.5423 12.5551 22.4786 12.6504 22.3983 12.7306L22.3861 12.7184Z"
        fill="#4ECB71"
      />
    </svg>
  );
};