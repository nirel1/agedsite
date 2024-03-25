import React from "react";
import PartnerLogos from "./PartnerLogos";
import PersonPic from "@/public/Person.jpeg";
import TestimonialBlock from "./TestimonialBlock";

function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full px-36">
      <div className="w-full">Testimonials</div>
      <div className="mt-10 flex justify-between gap-8 w-full">
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i, index) => (
            <TestimonialBlock
              key={`testimonial-${index}`}
              imageSrc={PersonPic.src}
              name={"Pied Piper"}
              handle={"https://google.com"}
              testimonial={"Coolest product ever. Would recommend 10/10."}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i, index) => (
            <TestimonialBlock
              key={`testimonial-${index}`}
              imageSrc={PersonPic.src}
              name={"Pied Piper"}
              handle={"https://google.com"}
              testimonial={"Coolest product ever. Would recommend 10/10."}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
