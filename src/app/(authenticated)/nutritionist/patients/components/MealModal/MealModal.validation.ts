import * as z from "zod";

export const defaultValues = {
  description: "",
  time: "",
  observation: "",
};

export const formSchema = z.object({
  description: z.string().trim().min(1, {
    message: "Informe a descrição",
  }),
  time: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
  observation: z.string(),
});
