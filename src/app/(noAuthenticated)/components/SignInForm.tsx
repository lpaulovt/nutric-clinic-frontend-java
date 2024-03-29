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
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { Spin } from "@/components/designSystem/Spin";

const formSchema = z.object({
  mail: z
    .string()
    .email({
      message: "E-mail inválido",
    })
    .min(1, {
      message: "Informe o seu email para efetuar o login",
    }),
  password: z.string().min(1, {
    message: "Informe a senha para efetuar o login",
  }),
});

export const SignInForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const result = await signIn("credentials", {
      username: values.mail,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      const error = JSON.parse(result.error);
      const errorMessage =
        error.status === 401
          ? "Credenciais inválidas."
          : "Algo deu errado, tente novamente.";

      toast({
        title: "Ops!",
        description: errorMessage,
        variant: "destructive",
      });

      setLoading(false);
      return;
    }

    console.log(values);
    router.replace(PRIVATE_ROUTES.INITIAL);
  }

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
              name="mail"
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
                  <FormMessage />

                  <Link
                    className="text-brand flex flex-row justify-end text-[12px] font-regular"
                    href={PUBLIC_ROUTES.FORGOT_PASSWORD}
                  >
                    Esqueceu sua senha?
                  </Link>
                </FormItem>
              )}
            />

            <Button className="w-full mt-4" type="submit">
              {loading ? <Spin /> : "Continuar"}
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
