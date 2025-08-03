import React from "react";
import { motion } from "framer-motion";
import corp from "../assets/corp.webp";
import img from "../assets/testimonial1.jpg";
import ipsum from "../assets/img_fix/ipsum.png"
import ipsumPj from "../assets/img_fix/ipsum_panjang.png"

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
      <div className="grid grid-cols-3 gap-6 md:gap-12 border-l border-b border-gray-300 p-4">
        {cards.map((card, index) => (
          <div key={index} className="flip-card  border-r border-blue-500 px-1">
            <motion.div
              className="flip-card-inner !w-[10rem] !h-[10rem]"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div className="flip-card-front !rounded-sm">
                <img
                  src={card.frontImg}
                  alt={card.back.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div className="flip-card-back flex items-center justify-center text-center p-4 !rounded-sm">
                <div className="max-h-full">
                  <h3 className="text-lg font-bold">{card.back.title}</h3>
                  <p className="text-sm mt-2">{card.back.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap p-4 gap-4 justify-center w-full my-20">
        {cards_long.slice(0, 4).map((card, index) => (
          <div key={index} className="flip-card w-full sm:w-1/3 xl:w-1/3 px-2">
            <motion.div
              className="flip-card-inner w-full h-48"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div className="flip-card-front rounded-sm overflow-hidden">
                <img
                  src={card.frontImg}
                  alt={card.back.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div className="flip-card-back flex items-center justify-center text-center p-4 rounded-sm overflow-hidden bg-blue-500 text-white">
                <div className="max-h-full">
                  <h3 className="text-lg font-bold">{card.back.title}</h3>
                  <p className="text-sm mt-2">{card.back.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
