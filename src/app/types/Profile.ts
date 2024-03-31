import Entity from "./Entity";
import User from "./User";

export const GenderEnum: any = {
  male: "Masculino",
  female: "Feminino",
  other: "Outro",
};

export default interface Profile extends Entity {
  fullName?: string;
  cpf: string;
  dateOfBirth: Date;
  gender: string;
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
