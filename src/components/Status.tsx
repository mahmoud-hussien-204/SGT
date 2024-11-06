import {EnumUserStatus} from "@/enums";
import AppHelper from "@/helpers/appHelper";

interface IProps {
  status: TUserStatus;
}

const Status = ({status}: IProps) => {
  return (
    <span
      className={AppHelper.classes(
        "px-1.2rem inline-flex h-2.25rem min-w-[7.5rem] items-center justify-center gap-0.75rem rounded-full border text-12 font-medium capitalize",
        {
          "border-accents-orange/20 text-accents-orange": status === EnumUserStatus.pending,
          "border-accents-green/20 text-accents-green": status === EnumUserStatus.active,
          "border-accents-red/20 text-accents-red": status === EnumUserStatus.inactive,
        }
      )}
    >
      <span
        className={AppHelper.classes("inline-block h-0.62rem w-0.62rem rounded-full", {
          "bg-accents-orange": status === EnumUserStatus.pending,
          "bg-accents-green": status === EnumUserStatus.active,
          "bg-accents-red": status === EnumUserStatus.inactive,
        })}
      ></span>
      {status}
    </span>
  );
};

export default Status;
