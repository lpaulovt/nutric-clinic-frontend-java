"use client";

import * as z from "zod";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, PlusCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const formSchema = z.object({
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
  observation: z.string(),
});

export function RegisterModal() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "",
      mail: "",
      phone: "",
      zipcode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      observation: "",
    },
  });

  const handleShow = () => {
    setOpen((value) => !value);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    toast({
      title: "Cadastro realizado com sucesso",
      description:
        "Paciente cadastro com sucesso, agora você pode cadastrar plano alimentar, fazer receitas e inserir  avaliações antoprométicas",
    });
    form.reset({});
    handleShow();
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={handleShow}>
        <PlusCircle className="text-brand" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle>Cadastrar Paciente</DialogTitle>
          <DialogDescription>Informe os dados do paciente.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome completo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="mb-4 flex flex-col w-full">
                    <FormLabel>Data de nascimento</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Informe sua data de nascimento</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row items-center space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="M" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Masculino
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="F" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Feminino
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <FormDescription>
                      O NutriClinic utilizará este e-mail para enviar o plano
                      alimentar, redefinir senha, entre outros. Além de permitir
                      o acesso do paciente ao NutriClinic.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu telefone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel>Dados de endereço</FormLabel>

              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>CEP</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu CEP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua rua" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu número" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Bairro</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu bairro" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua cidade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu estado" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="observation"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Observação</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua observação" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant={"ghost"} type="submit">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
