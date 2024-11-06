import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isError?: boolean;
  options: {value: string | number; label: string | number}[];
}

const Select = forwardRef(
  ({isError, className, options, ...props}: IProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "select select-bordered w-full border-neutral-border bg-neutral-bg text-white placeholder:text-14 placeholder:text-neutral-300 focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
