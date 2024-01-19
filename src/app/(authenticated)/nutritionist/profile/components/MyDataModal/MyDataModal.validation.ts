import * as z from "zod";

export const defaultValues = {
  fullName: "",
  gender: "",
  mail: "",
  phone: "",
  specialty: "",
  crn: "",
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
  specialty: z.string().min(1, {
    message: "Informe sua especialidade.",
  }),
  crn: z.string().min(1, {
    message: "Informe seu CRN.",
  }),
});
