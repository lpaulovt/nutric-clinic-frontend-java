import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  name: string;
  time: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface ModalProps {
  mealPlanId: string;
  mealId: string;
  type: TTypeForm;
  values?: FormSchema;
  onSuccess?: () => void;
}
