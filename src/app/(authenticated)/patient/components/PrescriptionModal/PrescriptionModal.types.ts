import * as z from "zod";

import { formSchema } from ".";

export interface FormSchema {
  name: string;
  description: string;
  birthDate: Date;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  values?: FormSchema;
}
