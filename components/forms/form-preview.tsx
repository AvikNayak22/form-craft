"use client";

import { Question } from "@/lib/generated/prisma";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

type FormPreviewProps = {
  form: {
    id: string;
    title: string;
    description: string | null;
    question: Question[];
  };
};

const FormPreview = ({ form }: FormPreviewProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{form.title}</h1>
        {form.description && (
          <p className="text-gray-600 mt-2">{form.description}</p>
        )}
      </div>

      <form>
        <div className="space-y-4">
          <Label>Your Name (Optional)</Label>
          <Input placeholder="Enter your name" value={name} />
        </div>
      </form>
    </div>
  );
};

export default FormPreview;
