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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PageDescription } from "@/components/designSystem/PageDescription";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z.string({
    required_error: "Informe o seu nome.",
  }),
  cpf: z.string({
    required_error: "Informe o seu CPF.",
  }),
  email: z.string({
    required_error: "Informe o seu e-mail.",
  }),
  phone: z.string({
    required_error: "Informe o seu telefone.",
  }),
  specialty: z.string({
    required_error: "Informe sua especialidade.",
  }),
  crn: z.string({
    required_error: "Informe seu CRN.",
  }),
  password: z.string({
    required_error: "Informe sua senha.",
  }),
  confirmPassword: z.string({
    required_error: "Confirme sua senha.",
  }),
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
      description:
        "Sua senha foi alterada com sucesso. Entre agora para utilizar as facilidades do NutriClinic.",
    });
    router.push(`/`);
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