import React from "react";
import TabbedItems from "@/Components/frontend/TabbedItems";
const TabbedSection = () => {
  return (
    <section className="  w-full pb-10 pt-8 mt-12 dark:bg-dark ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">

              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Browse Your Doctor BY.
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <TabbedItems></TabbedItems>
      </div>
    </section>
  );
};

export default TabbedSection;


