export interface IPatient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  cpf: string;
  status: string;
}

export interface PatientsListResponse {
  patients: IPatient[];
}

export interface PatientResponse {
  patient: IPatient;
}
