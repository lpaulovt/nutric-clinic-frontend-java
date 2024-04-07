import * as z from "zod";

export const defaultValues = {
  name: "",
  status: "",
  daysOfWeek: [],
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  status: z.string().trim().min(1, {
    message: "Informe o status",
  }),
  daysOfWeek: z
    .array(z.string())
    .nonempty({
      message: "Selecione pelo menos um dia",
    })
    .refine((value) => value.some((item) => item), {
      message: "Selecione pelo menos um item",
    }),
});
