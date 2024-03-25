import Image from "next/image";
import React from "react";

function TestimonialBlock({
  imageSrc,
  name,
  handle,
  testimonial,
}: {
  imageSrc: string;
  name: string;
  handle: string;
  testimonial: string;
}) {
  return (
    <div className="flex">
      <div>
        <Image
          src={imageSrc}
          alt={name}
          width={10}
          height={10}
          className="h-auto w-10 grayscale"
          unoptimized
        />
      </div>
      <div className="ml-4 text-xs flex flex-col gap-2">
        <a
          href={handle}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          {name}
        </a>

        <div>&quot;{testimonial}&quot;</div>
      </div>
    </div>
  );
}

export default TestimonialBlock;
