import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What are Clipping Path Services?",
      answer:
        "Clipping Path Services involve the process of removing the background of an image to isolate the main subject. It is commonly used in e-commerce, product photography, and graphic design to create clean and professional-looking images with a transparent or custom background.",
    },
    {
      question: "What is Product Photo Cleaning?",
      answer:
        "Product Photo Cleaning refers to the enhancement and retouching of product images to make them visually appealing and presentable. It involves tasks like removing dust, scratches, or imperfections, adjusting colors, improving clarity, and optimizing the overall appearance of the product.",
    },
    {
      question: "What are Multiple Clipping Path Services?",
      answer:
        "Multiple Clipping Path Services involve the creation of multiple clipping paths within an image. It allows for selective editing or manipulation of different parts or elements of the image separately. This technique is commonly used in complex image editing tasks such as color correction, background removal, and image masking.",
    },
    {
      question: "What are Jewelry Editing Services?",
      answer:
        "Jewelry Editing Services focus on enhancing and retouching jewelry product images to showcase their beauty and intricacy. It involves tasks like removing imperfections, enhancing gemstones, adjusting metal colors, adding shine or reflections, and ensuring the jewelry appears stunning and appealing to potential customers.",
    },
    {
      question: "What are Shoe Photo Editing Services?",
      answer:
        "Shoe Photo Editing Services involve the retouching and enhancement of shoe product images. It includes tasks like background removal, color correction, adjusting shadows and highlights, adding or enhancing product details, and ensuring the shoes look attractive and well-presented in promotional materials or e-commerce platforms.",
    },
    {
      question: "What is Ghost Mannequin Service?",
      answer:
        "Ghost Mannequin Service is a technique used in apparel product photography to create a hollow or ghost-like effect, where the clothing appears to be floating or worn by an invisible mannequin. It involves photographing the clothing on a mannequin and then using photo editing techniques to remove the mannequin, resulting in a clean and professional-looking product image.",
    },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    return (
      <div>
        <div className="row justify-content-center section-title">
          <SectionTitle
            heading="AirBD"
            subHeading="FREQUENTLY ASKED QUESTIONS"
            details="Welcome to our Frequently Asked Questions (FAQ) section! Here, you'll find answers to the most commonly asked questions about our products, services, and policies. Our goal is to ensure that you have all the necessary information at your fingertips. We have structured the content in an organized and user-friendly manner, making it easy to navigate and locate the relevant information. Thank you for visiting our website, and we hope you find our FAQ section helpful in addressing your queries."
          />
          <div className="section-title-dots text-center">
            <span style={{ background: "#6ca86a" }}></span>
            <span style={{ background: "#eca817" }}></span>
            <span style={{ background: "#3da2d8" }}></span>
            <span style={{ background: "#005374" }}></span>
          </div>
        </div>

        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="indicator">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default FAQSection;
