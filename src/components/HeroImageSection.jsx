import React from "react";
import { motion } from "framer-motion";
import corp from "../assets/corp.webp";
import img from "../assets/testimonial1.jpg";
import ipsum from "../assets/img_fix/ipsum.png";
import ipsumPj from "../assets/img_fix/ipsum_panjang.png";

const cards = [
  {
    frontImg: ipsum,
    back: {
      title: "Asa Hikari Mulya",
      description: "Pusat Pelatihan Bahasa dan Budaya Jepang",
    },
  },
  {
    frontImg: ipsum,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsum,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsum,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsum,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsum,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  // Tambah lainnya
];

const cards_long = [
  {
    frontImg: ipsumPj,
    back: {
      title: "Asa Hikari Mulya",
      description: "Pusat Pelatihan Bahasa dan Budaya Jepang",
    },
  },
  {
    frontImg: ipsumPj,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsumPj,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  {
    frontImg: ipsumPj,
    back: {
      title: "Logo 2",
      description: "Deskripsi Logo 2",
    },
  },
  // Tambah lainnya
];

export default function HeroImageSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10 mt-10 lg:mt-20">
      {/* Logo Bersama (statis) */}
      <div className="mb-12 flex justify-center md:block">
        <img
          src={corp}
          alt="Bersama Logo"
          className="w-[80%] lg:w-full h-auto"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 lg:gap-20 md:justify-center md:items-center">
        {cards.map((card, index) => (
          <div key={index} className="flip-card ">
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front !rounded-sm">
                <img
                  src={card.frontImg}
                  alt={card.back.title}
                  className="w-[50%] md:w-[60%] lg:w-[70%] h-auto object-cover"
                />
              </div>

              {/* BACK */}
              <div className="flip-card-back flex items-center justify-center text-center p-4 md:p-0 !rounded-sm">
                <div className="max-h-full">
                  <h3 className="text-sm md:text-lg font-bold">
                    {card.back.title}
                  </h3>
                  <p className="text-xs md:text-sm mt-2">
                    {card.back.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-2 md:gap-6 lg:gap-12 md:justify-center md:items-center my-20">
        {cards_long.slice(0, 4).map((card, index) => (
          <div key={index} className="flip-card2 ">
            <div className="flip-card-inner2">
              {/* FRONT */}
              <div className="flip-card-front2 !rounded-sm overflow-hidden">
                <img
                  src={card.frontImg}
                  alt={card.back.title}
                  className="lg:w-[100%] lg:h-auto object-cover"
                />
              </div>

              {/* BACK */}
              <div className="flip-card-back2 flex items-center justify-center text-center p-4 md:p-0 !rounded-sm">
                <div className="max-h-full">
                  <h3 className="text-sm md:text-2xl font-bold">
                    {card.back.title}
                  </h3>
                  <p className="text-xs md:text-lg mt-2">
                    {card.back.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
