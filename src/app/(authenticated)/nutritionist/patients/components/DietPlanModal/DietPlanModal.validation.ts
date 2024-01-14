import * as z from "zod";

export const defaultValues = {
  name: "",
  description: "",
  observation: "",
  weekDays: [],
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  description: z.string().trim().min(1, {
    message: "Informe a descrição",
  }),
  weekDays: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Selecione pelo menos um item",
  }),
  observation: z.string(),
});
