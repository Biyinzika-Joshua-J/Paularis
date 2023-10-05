"use client";
import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const formSchema = z.object({
  name: z.string().min(2, "Name must be greater than 2 characters!").max(50),
  email: z.string().email("Invalid email address"),
  telephone: z.string().regex(phoneRegex, "Invalid telephone number!"),
  message: z
    .string()
    .min(10, "Your message is to short! Make it more than 10 characters")
    .max(800, "Your message is to long! Make it 800 characters or less."),
});
