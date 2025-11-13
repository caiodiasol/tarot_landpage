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
  phone: z
    .string()
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Informe o WhatsApp no formato (11) 99999-9999."),
  subject: z.string().min(2, "Informe o tema da consulta."),
  message: z.string().min(10, "Conte um pouco sobre suas dúvidas."),
});

const FORM_ENDPOINT = "https://formsubmit.co/tarot.raissa@gmail.com";
const SUCCESS_TIMEOUT = 5000;

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm({ className }: { className?: string }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
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

  const phoneRegister = register("phone", {
    onChange: (event) => {
      const input = event.target as HTMLInputElement;
      const formatted = formatPhone(input.value);
      input.value = formatted;
      setValue("phone", formatted, { shouldValidate: true, shouldDirty: true });
    },
  });

  const onSubmit = async (values: ContactValues) => {
    try {
      setSubmitting(true);
      setSuccess(false);
      setSubmitError(null);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      formData.append("_subject", `Novo contato: ${values.subject}`);
      formData.append("_replyto", values.email);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_honey", "");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o formulário.");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), SUCCESS_TIMEOUT);
    } catch (error) {
      console.error(error);
      setSubmitError(
        "Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou fale pelo WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("grid gap-4 rounded-3xl border border-primary/20 bg-background/80 p-6 shadow-sm", className)}
    >
      {isSuccess ? (
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-sm text-emerald-700">
          Mensagem enviada com sucesso! Em breve você receberá um retorno no e-mail informado.
        </div>
      ) : null}
      {submitError ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {submitError}
        </div>
      ) : null}

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome
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
            WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            inputMode="tel"
            maxLength={15}
            className="h-11 rounded-full border border-border bg-transparent px-4 text-sm text-foreground outline-none transition focus:border-primary"
            {...phoneRegister}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Assunto da mensagem
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Ex.: Leitura de Tarot Terapêutico"
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
          placeholder="Me conte o que você está buscando com um atendimento de Tarot e quais as suas dúvidas."
          className="w-full rounded-3xl border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button className="cursor-pointer" type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const d1 = digits.slice(0, 2);
  const d2 = digits.slice(2, 7);
  const d3 = digits.slice(7, 11);

  let formatted = "";

  if (d1) {
    formatted += `(${d1}`;
    if (d1.length === 2) {
      formatted += ") ";
    }
  }

  if (d2) {
    formatted += d2;
    if (d2.length === 5 && d3) {
      formatted += "-";
    }
  }

  if (d3) {
    formatted += d3;
  }

  return formatted.trim();
}
