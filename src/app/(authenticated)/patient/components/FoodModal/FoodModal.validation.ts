import * as z from "zod";

export const defaultValues = {
  name: "",
  measure: "",
  quantity: "",
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  measure: z.string().trim().min(1, {
    message: "Informe a medida",
  }),
  quantity: z.string().trim().min(1, {
    message: "Informe a quantidade",
  }),
});
