import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/bento-grid";
import { gridData } from "./data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridData.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
