import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  name: string;
  age: number;
  gender: string;
  phone: string;
  cpf: string;
  status: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface PatientModalProps {
  type: TTypeForm;
  values?: FormSchema;
  onSuccess?: () => void;
}
