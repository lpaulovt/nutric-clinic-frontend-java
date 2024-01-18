import * as z from "zod";

export const defaultValues = {
  name: "",
  size: "",
  quantity: "",
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  size: z.string().trim().min(1, {
    message: "Informe a medida",
  }),
  quantity: z.string().trim().min(1, {
    message: "Informe a quantidade",
  }),
});
