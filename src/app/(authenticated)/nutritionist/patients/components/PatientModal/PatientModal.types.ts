import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  number: string;
  fullName: string;
  birthDate: Date;
  gender: string;
  mail: string;
  phone: string;
  zipcode: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  observation: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface PatientModalProps {
  type: TTypeForm;
  values?: FormSchema;
}
