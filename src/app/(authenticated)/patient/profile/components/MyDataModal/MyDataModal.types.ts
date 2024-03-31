import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  fullName: string;
  birthDate: Date;
  gender: string;
  mail: string;
  phone: string;
  specialty: string;
  crn: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  type: TTypeForm;
  values?: FormSchema;
  id: number;
  postAction?: () => void;
}
