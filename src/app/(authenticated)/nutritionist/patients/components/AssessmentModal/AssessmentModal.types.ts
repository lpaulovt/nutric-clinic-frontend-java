import * as z from "zod";

import { formSchema } from ".";

export interface FormSchema {
  type: string;
  description: string;
  date: Date;
  height: number;
  currentWeight: number;
  idealWeight: number;
  observation: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  values?: FormSchema;
}
