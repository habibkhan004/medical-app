import React from "react";
import Hero from "@/Components/frontend/Hero";
import Brand from "@/Components/frontend/Brand";
import TabbedSection from "@/Components/frontend/TabbedSection"
import DoctorsList from "@/Components/DoctorsList";

export default function Home() {
  return (
    <section className="text-3xl  min-h-screen justify-center items-center max-w-6xl mx-auto ">

      <Hero />
      <hr />
      <Brand />
      <TabbedSection />
      <DoctorsList title={"In Person Visit"} isInPerson={true} className ={'bg-white py-8 px-4 rounded-md '} />
      <DoctorsList title={"Telehealth Visit"} isInPerson={false} className ={'bg-pink-100 py-8 px-4 rounded-md '} />
    </section>
  );
}
