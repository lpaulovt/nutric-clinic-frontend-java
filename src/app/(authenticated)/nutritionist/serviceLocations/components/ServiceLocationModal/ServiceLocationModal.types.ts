import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  full_name: string;
  number: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface PatientModalProps {
  type: TTypeForm;
  values?: FormSchema;
  postAction?: () => void;
}
