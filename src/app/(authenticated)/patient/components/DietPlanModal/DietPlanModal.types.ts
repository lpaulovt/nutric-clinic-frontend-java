import * as z from "zod";

import { formSchema } from ".";

export type TTypeForm = "CREATE" | "UPDATE";

export interface FormSchema {
  id: string;
  name: string;
  status: string;
  daysOfWeek: string;
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface DietPlanModalProps {
  type: TTypeForm;
  values?: FormSchema;
  onSuccess?: () => void;
}
