const IconDashboard = ({ pathProps, svgProps }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...svgProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.167 11.917V8.25c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417h3.667"
        className="stroke-current"
        {...pathProps}
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.72 13.283L8.9 10.45a.92.92 0 011.293-.165l1.678 1.32a.927.927 0 001.292-.156l2.118-2.732M17.857 14.502l.256.522c.129.257.45.495.734.55l.348.055c1.045.174 1.293.944.54 1.705l-.32.321c-.21.22-.33.642-.266.935l.046.192c.284 1.265-.385 1.751-1.485 1.091l-.238-.137c-.285-.165-.743-.165-1.027 0l-.238.137c-1.11.67-1.779.174-1.485-1.09l.046-.193c.064-.293-.056-.715-.266-.935l-.321-.32c-.752-.762-.504-1.532.54-1.706l.349-.055c.275-.046.605-.293.733-.55l.257-.522c.495-1 1.302-1 1.797 0z"
        className="stroke-current"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default IconDashboard;
