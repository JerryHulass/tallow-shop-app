import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({
  id,
  index,
  title,
  description,
  image,
  link,
  color,
  targetScale,
  range,
  progress,
}) => {
  const cardContainerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const reversedScaleForImage = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="h-[90svh] md:h-screen w-full sticky top-8 sm:top-0 flex items-center justify-center"
    >
      <motion.div
        className="p-3 md:p-6 flex flex-col gap-6 mx-auto w-[98vw] max-w-[430px] md:w-[90vw] md:max-w-[900px] min-w-[100px] h-[70vh] md:h-[500px] relative rounded-2xl"
        style={{
          backgroundColor: color,
          scale: cardScale,
          top: `calc(-5% + ${index * 25}px)`,
        }}
      >
        <h2 className="w-full text-center text-lg lg:text-2xl text-[#2F3B32] font-semibold">
          {title || "-"}
        </h2>
        <div className="text-sm lg:text-base h-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5">
          <div className="w-full md:w-1/2 h-full text-[#2F3B32] mb-0">
            <p className="md:mb-4 line-clamp-3 lg:line-clamp-5">
              {description || "-"}
            </p>
            <a className="text-blue-600 underline font-medium" href={link}>
              Read more
            </a>
          </div>
          <div className="relative w-full md:w-1/2 h-auto sm:h-48 md:h-full rounded-2xl overflow-hidden">
            <motion.div
              style={{ scale: reversedScaleForImage }}
              className="h-full w-full"
            >
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={title}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
