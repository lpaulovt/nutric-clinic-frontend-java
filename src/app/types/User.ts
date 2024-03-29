import Entity from "./Entity";

export default interface User extends Entity {
  email: string;
  username: string;
  password: string;
}

export enum ProfileTypeEnum {
  nutritionist = "nutritionist",
  patient = "patient",
}
