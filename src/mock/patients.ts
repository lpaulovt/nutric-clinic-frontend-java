import { IPatient } from "@/app/types/Patient";

export const patientData = [
  {
    showAge: true,
    patient: {
      name: "Paulo Vitor",
      age: "21",
      cpf: "123.123.123.123-12",
      status: "ACTIVE",
      id: "1",
    } as IPatient,
  },
  {
    showAge: true,
    patient: {
      name: "Caio Rafael",
      age: "21",
      cpf: "123.123.123.123-12",
      status: "INACTIVE",
      id: "2",
    } as IPatient,
  },
  {
    showAge: true,
    patient: {
      name: "Caio Rafael",
      age: "21",
      cpf: "000.123.123.123-12",
      status: "INACTIVE",
      id: "3",
    } as IPatient,
  },
  {
    showAge: true,
    patient: {
      name: "Caio Rafael",
      age: "21",
      cpf: "111.123.123.123-12",
      status: "ACTIVE",
      id: "4",
    } as IPatient,
  },
  {
    showAge: true,
    patient: {
      name: "Caio Rafael",
      age: "21",
      cpf: "222.123.123.123-12",
      status: "INACTIVE",
      id: "5",
    } as IPatient,
  },

  {
    showAge: true,
    patient: {
      name: "Caio Rafael",
      age: "21",
      cpf: "333.123.123.123-12",
      status: "ACTIVE",
      id: "6",
    } as IPatient,
  },
];
