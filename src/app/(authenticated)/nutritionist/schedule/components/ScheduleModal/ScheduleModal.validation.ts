import * as z from "zod";

export const defaultValues = {};

export const formSchema = z.object({
  serviceLocationId: z.string({
    required_error: "Informe o seu local",
  }),
  date_appointments: z.date({
    required_error: "Informe sua data",
  }),
  time: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Adicione pelo menos um horário",
  }),
});
