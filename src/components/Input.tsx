import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "input input-bordered w-full border-neutral-border bg-neutral-bg text-white placeholder:text-14 placeholder:text-neutral-300 focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Input;
