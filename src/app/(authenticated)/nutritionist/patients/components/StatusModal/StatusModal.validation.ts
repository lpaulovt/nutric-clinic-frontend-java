import * as z from "zod";

export const defaultValues = {};

export const formSchema = z.object({
  status: z.enum(["ativo", "inativo"], {
    required_error: "Você precisa selecionar um status",
  }),
});
