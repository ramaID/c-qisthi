export type UserData = {
  name: string;
  email: string;
};

export type laravelLinks = {
  first: string;
  last: string;
  prev: string;
  next: string;
};

export type UserCollection = {
  data: Array<UserData>;
  links: laravelLinks;
};

export type UserResource = {
  data: UserData;
};

export type AllProps<Data> = {
  [K in keyof Data]: NonNullable<Data[K]>;
};
