import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "CodSoft",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1VuQPScKW2LGWZISzja-iZIqanAEn6uKc/view?pli=1",
    image: "../assets/CodSoft Internship-1.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8 max-w-lg">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="w-full">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
