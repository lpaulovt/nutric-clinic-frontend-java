import * as z from "zod";

export const defaultValues = {
  fullName: "",
  gender: "",
  mail: "",
  phone: "",
  zipcode: "",
  street: "",
  number: "",
  neighborhood: "",
  city: "",
  state: "",
  observation: "",
};

export const formSchema = z.object({
  fullName: z.string().trim().min(1, {
    message: "Informe o seu nome completo",
  }),
  birthDate: z.date({
    required_error: "Informe sua data",
  }),
  gender: z.string().trim().min(1, {
    message: "Informe seu sexo",
  }),
  mail: z
    .string()
    .trim()
    .email({
      message: "E-mail inválido",
    })
    .min(1, {
      message: "Informe seu email",
    }),
  phone: z.string().trim().min(1, {
    message: "Informe seu telefone",
  }),
  zipcode: z.string().trim().min(1, {
    message: "Informe seu CEP",
  }),
  street: z.string().trim().min(1, {
    message: "Informe sua rua",
  }),
  number: z.string().trim().min(1, {
    message: "Informe seu número",
  }),
  neighborhood: z.string().trim().min(1, {
    message: "Informe seu bairro",
  }),
  city: z.string().trim().min(1, {
    message: "Informe sua cidade",
  }),
  state: z.string().trim().min(1, {
    message: "Informe seu estado",
  }),
  observation: z.string(),
});
