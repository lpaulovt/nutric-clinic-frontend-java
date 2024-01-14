export interface IPatient {
  id: string;
  cpf: string;
  name: string;
  age: string;
  status: "ACTIVE" | "INACTIVE";
}
