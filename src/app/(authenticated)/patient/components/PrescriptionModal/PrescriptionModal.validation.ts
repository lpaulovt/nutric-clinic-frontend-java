import * as z from "zod";

export const defaultValues = {
  name: "",
  description: "",
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  description: z.string().trim().min(1, {
    message: "Informe a descrição",
  }),
  date: z.date({
    required_error: "Informe sua data",
  }),
});
