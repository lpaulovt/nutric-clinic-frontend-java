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
});
