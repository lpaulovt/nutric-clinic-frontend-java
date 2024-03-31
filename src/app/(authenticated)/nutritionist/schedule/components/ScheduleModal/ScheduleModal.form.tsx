"use client";

import * as z from "zod";

import { DialogFooter } from "@/components/ui/dialog";

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
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import { FormProps, defaultValues, formSchema } from ".";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tag } from "@/components/designSystem/Tag";
import { useState } from "react";
import { useFindAllAddress } from "@/app/services/address/useFindAll";

export function FormComponent({ onSubmit, onClose, values }: FormProps) {
  const [value, setValue] = useState("");
  const { data } = useFindAllAddress();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: values ? values : defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full gap">
        <FormField
          control={form.control}
          name="date_appointments"
          render={({ field }) => (
            <FormItem className="mb-4 flex flex-col w-full">
              <FormLabel>Data </FormLabel>
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
                        format(field.value, "dd/MM/yyyy")
                      ) : (
                        <span>Informe sua data</span>
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
          name="serviceLocationId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Local de atendimento</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o local de atendimento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.results?.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.full_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => {
            return (
              <FormItem className="mb-4">
                <FormLabel>Horários</FormLabel>
                <FormControl>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                      type="time"
                      placeholder="Digite o seu horário"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (value === "") return;

                        if (!field.value) {
                          field.onChange([value]);
                          return;
                        }

                        if (field.value?.includes(value)) {
                        } else {
                          field.onChange([...field.value, value]);
                        }

                        setValue("");
                      }}
                    >
                      Adicionar
                    </Button>
                  </div>
                </FormControl>

                {field.value ? (
                  <div className="flex flex-row items-center flex-wrap gap-1">
                    {field.value?.map((item) => (
                      <Tag
                        type="ACTIVE"
                        key={item}
                        content={item}
                        onClick={() => {
                          field.onChange(
                            field.value?.filter((value) => value !== item),
                          );
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <></>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
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
