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
import { useToast } from "@/components/ui/use-toast";
import { PUBLIC_ROUTES } from "@/app/infrastructure/navigation";

const formSchema = z
  .object({
    fullName: z.string().min(1, {
      message: "Informe o seu nome.",
    }),
    cpf: z.string().min(1, {
      message: "Informe o seu CPF.",
    }),
    email: z.string().min(1, {
      message: "Informe o seu e-mail.",
    }),
    phone: z.string().min(1, {
      message: "Informe o seu telefone.",
    }),
    specialty: z.string().min(1, {
      message: "Informe sua especialidade.",
    }),
    crn: z.string().min(1, {
      message: "Informe seu CRN.",
    }),
    password: z.string().min(1, {
      message: "Informe sua senha.",
    }),
    confirmPassword: z.string().min(1, {
      message: "Confirme sua senha.",
    }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas devem ser iguais.",
    path: ["confirmPassword"],
  });

export const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      email: "",
      phone: "",
      specialty: "",
      crn: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

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

    console.log(values);
    toast({
      title: "Cadastro realizado com sucesso",
      description: "Entre agora para utilizar as facilidades do NutriClinic.",
    });
    router.push(PUBLIC_ROUTES.MAIN);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mt-8">
      <PageDescription
        title="Crie sua conta"
        description="Cadastre-se para começar a utilizar as funcionalidades do NutriClinic."
      />
      <div className="w-full flex flex-col items-center justify-center gap-4 mt-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
            <FormLabel>Dados gerais e contato</FormLabel>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>CPF</FormLabel>
                  <FormControl className="mt-0">
                    <Input
                      type="number"
                      placeholder="Digite seu CPF"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl className="mt-0">
                    <Input
                      type="email"
                      placeholder="Digite seu e-mail"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl className="mt-0">
                    <Input
                      type="number"
                      placeholder="Digite seu telefone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialty"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Especialidade</FormLabel>
                  <FormControl className="mt-0">
                    <Input placeholder="Digite sua especialidade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="crn"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>CRN</FormLabel>
                  <FormControl className="mt-0">
                    <Input placeholder="Digite seu CRN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormLabel>Autenticação</FormLabel>

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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl className="mt-0">
                    <Input
                      type="password"
                      placeholder="Confirme sua senha"
                      {...field}
                    />
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
