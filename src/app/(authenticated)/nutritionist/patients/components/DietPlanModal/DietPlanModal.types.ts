import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  name: string;
  description: string;
  observation: string;
  weekDays: string[];
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface DietPlanModalProps {
  type: TTypeForm;
  values?: FormSchema;
}
