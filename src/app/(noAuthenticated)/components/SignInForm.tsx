"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
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
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/app/infrastructure/navigation";

const formSchema = z.object({
  username: z.string({
    required_error: "Informe o seu email para efetuar o login",
  }),
  password: z.string({
    required_error: "Informe a senha para efetuar o login",
  }),
});

export const SignInForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.replace(PRIVATE_ROUTES.NUTRITIONIST_HOME);
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
        title="Entre na sua conta"
        description="Entre agora ou cadastre-se para começar os seus trabalhos."
      />

      <div className="w-full flex flex-col items-center justify-center gap-4 mt-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
            <FormField
              control={form.control}
              name="username"
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Senha</FormLabel>
                  <FormControl className="mt-0">
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="flex flex-row justify-end text-[12px] font-regular">
                    <Link
                      className="text-brand "
                      href={PUBLIC_ROUTES.FORGOT_PASSWORD}
                    >
                      Esqueceu sua senha?
                    </Link>
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button className="w-full mt-4" type="submit">
              Continuar
            </Button>
          </form>
        </Form>

        <Link
          className="text-xs inline-block self-end text-black"
          href={PUBLIC_ROUTES.SIGN_UP}
        >
          Não possui conta?{" "}
          <span className="font-normal text-brand">Cadastre-se agora</span>
        </Link>
      </div>
    </div>
  );
};
