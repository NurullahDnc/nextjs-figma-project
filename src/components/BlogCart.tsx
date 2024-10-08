"use client";
import TextClip from "@/lib/TextClip";
import Image from "next/image";
import Link from "next/link";
import { usePathname} from "next/navigation";
import React from "react";

interface CartProps {
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

export default function Cart({ image, title, description, link }: CartProps) {
  const params = usePathname();

  return (
    <div className="   ">
      <Link href={link || ""}>
        <Image src={image} alt="services" className="rounded-md object-cover" />
      </Link>

      <h2 className="font-semibold md:font-bold text-14 md:text-[17px] py-2 ">
        {params.length > 1 ? title : <TextClip text={title} length={50} />}
      </h2>

      <p className=" text-[12.5px] md:text-[15px] ">
        {params.length > 1 ? (
          description
        ) : (
          <TextClip text={description} length={140} />
        )}
      </p>
    </div>
  );
}
