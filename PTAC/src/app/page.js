"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel relative w-full">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://pneuzao.com.br/wp-content/uploads/2023/04/banner-home_brutus_desktop-1.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://pneuzao.com.br/wp-content/uploads/2023/04/banner-home_blacklion_desktop-1.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://pneuzao.com.br/wp-content/uploads/2023/04/banner-home_bkt_desktop-1.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
