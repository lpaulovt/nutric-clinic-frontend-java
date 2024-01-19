import * as z from "zod";

export const defaultValues = {
  fullName: "",
  zipcode: "",
  street: "",
  number: "",
  neighborhood: "",
  city: "",
  state: "",
};

export const formSchema = z.object({
  fullName: z.string().trim().min(1, {
    message: "Informe o seu nome completo",
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
});
