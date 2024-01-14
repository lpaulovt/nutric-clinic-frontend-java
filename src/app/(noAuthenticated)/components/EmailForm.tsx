"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PageDescription } from "@/components/designSystem/PageDescription";
import { useRouter } from "next/navigation";
import { PUBLIC_ROUTES } from "@/app/infrastructure/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).min(1, {
    message: "Informe o seu email",
  }),
});

export const EmailForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("clicou");
    console.log(values);
    router.push(PUBLIC_ROUTES.FORGOT_PASSWORD_RECOVERY_CODE);
  }

  //   const handleSignIn = async (value: z.infer<typeof formSchema>) => {
  //     setLoading(true)
  //     const result = await signIn('credentials', {
  //       username: value.username,
  //       password: value.password,
  //       redirect: false,
  //     })

  //     if (result?.error) {
  //       setLoading(false)
  //       return
  //     }

  //     router.replace('/home')
  //     setLoading(false)
  //   }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
      <PageDescription
        title="Recupere sua senha"
        description="Você receberá um código no seu e-mail cadastrado. Por favor, informe seu e-mail."
      />

      <div className="w-full flex flex-col items-center justify-center gap-4 mt-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full mt-4" type="submit">
              Continuar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
