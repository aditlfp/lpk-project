import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import api from "../utils/axios";
import DOMPurify from "dompurify";

const CustomFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqItems, setFaqItems] = useState(null);
  const contentRefs = useRef([]);
  const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await api.get("/custom-faqs");
      setFaqItems(res.data.data);
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    faqItems &&
      faqItems.forEach((_, i) => {
        const content = contentRefs.current[i];
        if (content) {
          if (i === activeIndex) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = "0px";
          }
        }
      });
  }, [activeIndex, faqItems]);

  return (
    <section id="faq" className="px-4 py-10 mb-10 md:mx-20 md:mb-5">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex flex-col gap-y-4 mb-2 md:mb-10">
          <span className="font-semibold text-xl text-blue-500">
            Frequently Asked Questions (FAQ)
          </span>
          <h1 className="text-4xl font-semibold">
            Pertanyaan Yang Sering Diajukan
          </h1>
          <span className="text-gray-400 font-semibold md:text-xl">
            Pertanyaan yang Sering Diajukan Ke Kami Terkait Prosedur, Dokumen,
            Seleksi, Dan Lainnya.
          </span>
        </div>
        {isLoading ? (
          <>
            <div className="skeleton h-16 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
          </>
          ) : (
          <>
            {faqItems &&
              faqItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-md transition"
                >
                  {/* Header */}
                  <button
                    onClick={() => setActiveIndex(i === activeIndex ? null : i)}
                    className={`w-full text-left px-6 py-4 font-medium text-base transition-colors duration-300 ${
                      activeIndex === i
                        ? "bg-primary text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <div className="flex justify-between items-center md:text-xl">
                      <span>{item.title}</span>
                      <span>
                        {activeIndex === i ? (
                          <FaChevronUp className="text-white" />
                        ) : (
                          <FaChevronDown className="text-primary" />
                        )}
                      </span>
                    </div>
                  </button>
                  {/* Body */}
                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    className="overflow-hidden  transition-all duration-500 bg-white px-6 text-sm md:text-xl text-gray-800 prose max-w-none"
                    style={{ maxHeight: "0px" }}
                  >
                    <div
                      className="py-8 faq-content"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.desc),
                      }}
                    />
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default CustomFAQ;
