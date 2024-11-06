import AppHelper from "@/helpers/appHelper";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({children, className, ...props}: IProps) => {
  return (
    <button
      disabled={props.isLoading}
      {...props}
      className={AppHelper.classes(
        "text-1rem btn min-h-3.25rem bg-gradient-btn font-semibold text-white hover:bg-gradient-btn-reverse",
        className
      )}
    >
      {children}
      {props.isLoading && <span className='loading loading-spinner loading-xs'></span>}
    </button>
  );
};

export default Button;
