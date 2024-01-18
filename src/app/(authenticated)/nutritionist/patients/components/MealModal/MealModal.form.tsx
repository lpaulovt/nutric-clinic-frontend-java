"use client";

import * as z from "zod";

import { DialogFooter } from "@/components/ui/dialog";

import {
  Form,
  FormControl,
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

export function MealForm({ onSubmit, onClose, values }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values ? values : defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
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
          name="time"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Horário</FormLabel>
              <FormControl>
                <Input type="time" placeholder="Informe o horário" {...field} />
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
