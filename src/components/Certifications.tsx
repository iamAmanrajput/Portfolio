import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Full Stack Developer Intern",
    issuer: "Cyberguards Consulting (OPC) Pvt. Ltd.",
    date: "Aug 2025 - Nov 2025",
    link: "https://www.linkedin.com/posts/aman-kumar-910843327_internshipcompleted-fullstackdeveloper-webdevelopment-activity-7409818308830658560-OAKa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKHLVwBSaKGs5ATGr6cSEXv79goxVIOZ5E",
    image: "../assets/internship-letter.jpg",
  },
  {
    title: "Python Technology",
    issuer: "Deloitte",
    date: "June 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_uxY2kuKExpQ3uBYPL_1750766164494_completion_certificate.pdf",
    image: "../assets/python.jpg",
  },
  {
    title: "Web Development",
    issuer: "Sololearn",
    date: "May 2025",
    link: "https://www.linkedin.com/posts/aman-kumar-910843327_webdevelopment-mernstack-techjourney-activity-7329895050031603713-M2qD/",
    image: "../assets/Web-Development.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="certifications">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Some courses I actually completed instead of just bookmarking them - fancy certificates!">
            Certifications
          </SectionTitle>
          <Slider {...settings} className="max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.title} className="px-4">
                <CertificationCard {...cert} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </SectionBackground>
  );
}
