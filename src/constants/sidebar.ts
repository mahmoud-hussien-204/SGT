import {EnumUserRole} from "@/enums";

export const constantSidebar = {
  [EnumUserRole.admin]: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "dashboard",
      end: true,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "users",
    },
    {
      title: "Contestants",
      path: "/admin/contestants",
      icon: "contestant",
    },
    {
      title: "Judges",
      path: "/admin/judges",
      icon: "judge",
    },
    {
      title: "Contents",
      path: "/admin/contents",
      icon: "content",
    },
    {
      title: "Competitions",
      path: "/admin/competitions",
      icon: "competition",
    },
  ],
  [EnumUserRole.judge]: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "dashboard",
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "users",
    },
  ],
  [EnumUserRole.user]: [
    {
      title: "Dashboard",
      path: "/admin",
      icon: "dashboard",
    },
  ],
};
