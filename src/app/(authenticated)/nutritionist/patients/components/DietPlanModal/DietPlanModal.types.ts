import * as z from "zod";

import { formSchema } from ".";

export interface FormSchema {
  name: string;
  description: string;
  observation: Date;
  weekDays: string[];
}

export interface FormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  onClose: () => void;
  values?: FormSchema;
}

export interface DietPlanModalProps {
  values?: FormSchema;
}
