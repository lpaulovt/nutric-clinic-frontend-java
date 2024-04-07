import * as z from "zod";

export const defaultValues = {
  name: "",
  time: "",
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o nome da refeição",
  }),
  time: z.string().trim().min(1, {
    message: "Informe o nome",
  }),
});
