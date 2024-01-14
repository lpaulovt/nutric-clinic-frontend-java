"use client";

import * as z from "zod";

import { DialogFooter } from "@/components/ui/dialog";

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

import { FormProps, defaultValues, formSchema } from ".";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function DietPlanForm({ onSubmit, onClose, values }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values ? values : defaultValues,
  });

  const items = [
    {
      id: "1",
      label: "Segunda-feira",
    },
    {
      id: "2",
      label: "Terça-feira",
    },
    {
      id: "3",
      label: "Quarta-feira",
    },
    {
      id: "4",
      label: "Quinta-feira",
    },
    {
      id: "5",
      label: "Sexta-feira",
    },
    {
      id: "6",
      label: "Sábado",
    },
    {
      id: "7",
      label: "Domingo",
    },
  ] as const;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Informe o nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="Informe a descrição" {...field} />
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
                <Textarea placeholder="Informe sua observação" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="weekDays"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Selecione os dias</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="weekDays"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button onClick={onClose} variant={"ghost"} type="reset">
            Cancelar
          </Button>

          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
