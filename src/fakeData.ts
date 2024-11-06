import {EnumUserRole, EnumUserStatus} from "./enums";

// Creating an array of three user objects
export const fakeDataUsers = [
  {
    name: "Alice Johnson",
    email: `${EnumUserRole.admin}@gmail.com`,
    role: EnumUserRole.admin,
    permissions: ["read", "write", "delete"],
    id: 1,
    token: "token_123456",
    photo: "https://api.dicebear.com/9.x/dylan/svg?seed=Snuggles&hairColor=000000&mood=happy",
    password: `password${EnumUserRole.admin}`,
    status: EnumUserStatus.active,
  },
  {
    name: "Bob Smith",
    email: `${EnumUserRole.user}@gmail.com`,
    role: EnumUserRole.user,
    permissions: ["read"],
    id: 2,
    token: "token_654321",
    photo: "https://api.dicebear.com/9.x/dylan/svg?seed=Dusty&hairColor=000000&mood=happy",
    password: `password${EnumUserRole.user}`,
    status: EnumUserStatus.inactive,
  },
  {
    name: "Charlie Brown",
    email: `${EnumUserRole.judge}@gmail.com`,
    role: EnumUserRole.judge,
    permissions: ["read", "judge"],
    id: 3,
    token: "token_987654",
    photo: "https://api.dicebear.com/9.x/dylan/svg?seed=Gracie&hairColor=000000&mood=happy",
    password: `password${EnumUserRole.judge}`,
    status: EnumUserStatus.pending,
  },
];
