import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  name: string;
  measure: string;
  quantity: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  type: TTypeForm;
  values?: FormSchema;
  mealId: string;
  onSuccess?: () => void;
}
