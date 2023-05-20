type UserAttributes = {
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

export type UserData = {
  id: number;
  type: string;
  attributes: UserAttributes;
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
