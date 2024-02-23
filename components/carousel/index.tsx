"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";

const slidesData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id officia, dicta aspernatur quisquam temporibus.",
  },
  { id: 3, avatar: "https://i.pravatar.cc/150?img=3", text: "Slide 3 Text" },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod id officia, dicta aspernatur quisquam temporibus.",
  },
  { id: 5, avatar: "https://i.pravatar.cc/150?img=5", text: "Slide 5 Text" },
];

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   return (
//     <div className="relative h-full">
//       <div>
//         {slidesData.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={` ${index === currentSlide ? "block" : "hidden"}`}
//           >
//             <div className="flex flex-col justify-center items-center h-full">
//               <Image
//                 width={62}
//                 height={62}
//                 src={slide.avatar}
//                 alt={`Avatar ${slide.id}`}
//                 className="w-62 h-62 rounded-full mb-4"
//               />
//               <p className="text-xl">{slide.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="absolute bottom-0">
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 bottom-0 px-2 py-1 bg-gray-800 text-white rounded-l"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 bottom-0 px-2 py-1 bg-gray-800 text-white rounded-r"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {slidesData.map((slide) => {
        return (
          <div className="keen-slider__slide" key={slide.id}>
            <Image
              width={62}
              height={62}
              src={slide.avatar}
              alt={`Avatar ${slide.id}`}
              className="w-62 h-62 rounded-full mb-4"
            />
            <span> {slide.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
