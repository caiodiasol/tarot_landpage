"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Digite um e-mail válido."),
  phone: z.string().optional(),
  subject: z.string().min(2, "Informe o tema da consulta."),
  message: z.string().min(10, "Conte um pouco sobre suas dúvidas."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm({ className }: { className?: string }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    setSubmitting(true);
    const mailto = createMailto(values);
    window.open(mailto, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      reset();
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid gap-4 rounded-3xl border border-primary/20 bg-background/80 p-6 shadow-sm", className)}
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          placeholder="Como devemos te chamar?"
          className="h-11 rounded-full border border-border bg-transparent px-4 text-sm text-foreground outline-none transition focus:border-primary"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@dominio.com"
            className="h-11 rounded-full border border-border bg-transparent px-4 text-sm text-foreground outline-none transition focus:border-primary"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            WhatsApp (opcional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            className="h-11 rounded-full border border-border bg-transparent px-4 text-sm text-foreground outline-none transition focus:border-primary"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Tema da consulta
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Ex.: Amor, carreira, espiritualidade"
          className="h-11 rounded-full border border-border bg-transparent px-4 text-sm text-foreground outline-none transition focus:border-primary"
          {...register("subject")}
        />
        {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Como posso te ajudar?
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Conte um pouco sobre o que está sentindo e quais respostas procura."
          className="w-full rounded-3xl border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Ao enviar, você será redirecionada(o) para abrir um e-mail com todas as informações preenchidas. Atualize o endereço em
        {" "}
        <code className="rounded bg-primary/10 px-1">createMailto</code> conforme sua conta oficial.
      </p>
    </form>
  );
}

function createMailto(values: ContactValues) {
  const to = "contato@raissatarot.com"; // substitua pelo email oficial
  const subject = encodeURIComponent(`Novo contato: ${values.subject}`);
  const body = encodeURIComponent(
    `Nome: ${values.name}
E-mail: ${values.email}
WhatsApp: ${values.phone ?? "-"}

Mensagem:
${values.message}`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
