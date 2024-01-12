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

const formSchema = z.object({
  code: z.string({
    required_error: "Informe o seu email para efetuar o login",
  }),
});

export const RecoveryCodeForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("clicou");
    console.log(values);
    router.push(`/forgotPassword/resetPassword`);
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
        description="Um código foi enviado para o seu e-mail. Informe o código aqui."
      />

      <div className="w-full flex flex-col items-center justify-center gap-4 mt-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Código de recuperação</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu código" {...field} />
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
