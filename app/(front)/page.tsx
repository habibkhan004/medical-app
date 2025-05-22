import React from "react";
import Hero from "@/Components/frontend/Hero";
import { MegaMenu } from "@/Components/frontend/MegaMenu";
export default function Home() {
  return (
    <section className="text-3xl  min-h-screen justify-center items-center max-w-6xl mx-auto ">
      <div className="bg-gray-600 text-gray-50">
        <MegaMenu></MegaMenu>
      </div>
      <Hero />
    </section>
  );
}
