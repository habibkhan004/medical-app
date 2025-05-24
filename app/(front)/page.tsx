import React from "react";
import Hero from "@/Components/frontend/Hero";
import Brand from "@/Components/frontend/Brand";
export default function Home() {
  return (
    <section className="text-3xl  min-h-screen justify-center items-center max-w-6xl mx-auto ">

      <Hero />
      <hr />
      <Brand />
    </section>
  );
}
