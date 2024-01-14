import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  status: boolean;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  values?: FormSchema;
}
