import React from "react";
export type SingleImageBrand = {
    link: string, imageSrc: string,lightImageSrc:string, altText:string
}
const brandsData = [
  {
    imageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

export default function Brand() {
  return (
    <section className="bg-slate-100 py-6  dark:bg-dark w-full">
        <h1 className="font-bold text-center mb-4">Trusted Brands</h1>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }: { brand: SingleImageBrand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <a
      href={link}
      className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
      <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
      <img src={lightImageSrc} alt={altText} className="hidden h-10 w-full dark:block" />
    </a>
  );
};

