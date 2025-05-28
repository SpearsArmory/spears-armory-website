import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ShieldCheck, Target } from "lucide-react";

export default function SpearsArmory() {
  return (
    <div className="p-6 space-y-12 max-w-5xl mx-auto text-white bg-black min-h-screen">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">Spears Armory</h1>
        <p className="text-xl italic text-gray-400">Precision. Privacy. Power.</p>
        <p className="text-md text-gray-300">A modern, concierge-style firearms experience for discerning buyers. Appointment only. Trusted. Licensed. Elite.</p>
        <Button className="mt-2 text-lg">Book a Private Appointment</Button>
      </section>
    </div>
  );
}