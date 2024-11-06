interface IUser {
  name: string;
  email: string;
  role: TUserRole;
  permissions: string[];
  id: number;
  token: string;
  photo: string;
  status: TUserStatus;
}

type TUserStatus = keyof typeof import("./enums").EnumUserStatus;

type TUserRole = keyof typeof import("./enums").EnumUserRole;

interface ISvgIconProps {
  svgProps?: import("react").SVGProps<SVGSVGElement>;
  pathProps?: import("react").SVGProps<SVGPathElement>;
}
