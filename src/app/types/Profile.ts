import Entity from "./Entity";
import User from "./User";

export default interface Profile extends Entity {
  fullName?: string;
  cpf: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  email: string;
  password: string;
  phone: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  cep?: string;
  specialty: string;
  crn?: string;
  type: "nutritionist" | "patient";
  observation?: string;
}

export interface CreateUserProfile extends Profile, User {}
