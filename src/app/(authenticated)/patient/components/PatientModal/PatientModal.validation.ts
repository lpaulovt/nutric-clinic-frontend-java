import * as z from "zod";

export const defaultValues = {
  name: "",
  gender: "",
  mail: "",
  phone: "",
  age: 0,
  cpf: "",
};

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Informe o seu nome completo",
  }),
  age: z.coerce.number().min(1, {
    message: "Informe a idade",
  }),
  gender: z.string().trim().min(1, {
    message: "Informe seu sexo",
  }),
  phone: z.string().trim().min(1, {
    message: "Informe seu telefone",
  }),
  cpf: z.string().trim().min(1, {
    message: "Informe seu CPF",
  }),
});
