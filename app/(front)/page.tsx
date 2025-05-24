import React from "react";
import Hero from "@/Components/frontend/Hero";
import Brand from "@/Components/frontend/Brand";
import TabbedSection from "@/Components/frontend/TabbedSection"

export default function Home() {
  return (
    <section className="text-3xl  min-h-screen justify-center items-center max-w-6xl mx-auto ">

      <Hero />
      <hr />
      <Brand />
      <TabbedSection />

    </section>
  );
}
