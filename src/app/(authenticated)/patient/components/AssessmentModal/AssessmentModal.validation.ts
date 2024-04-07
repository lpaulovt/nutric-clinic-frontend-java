import * as z from "zod";

export const defaultValues = {
  type: "",
  description: "",
  height: 0,
  currentWeight: 0,
  idealWeight: 0,
  observation: "",
};

export const formSchema = z.object({
  type: z.string().trim().min(1, {
    message: "Informe o tipo",
  }),
  description: z.string().trim().min(1, {
    message: "Informe a descrição",
  }),
  date: z.date({
    required_error: "Informe sua data",
  }),
  height: z.number().min(1, {
    message: "Informe a altura",
  }),
  currentWeight: z.number().min(1, {
    message: "Informe o peso atual",
  }),
  idealWeight: z.number().min(1, {
    message: "Informe o peso ideal",
  }),
  observation: z.string(),
});
