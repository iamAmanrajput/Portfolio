import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Python 3 Ultimate Guide",
    issuer: "Udemy",
    date: "Oct 2023",
    link: "https://www.udemy.com/certificate/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457.jpg?v=1697713760000",
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
