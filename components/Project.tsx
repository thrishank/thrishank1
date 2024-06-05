import { projectsData } from '@/data/data';
import React from 'react';
import Card from './UI/Card';

const Project = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading pb-8">
        Recent
        <span className="text-purple"> Projects </span>I Built
      </h1>
      <div className="flex flex-wrap justify-center items-baseline p-4 gap-16 md:gap-12 mt:10">
        {projectsData.map((item, i) => (
          <Card
            key={i}
            img={item.img}
            title={item.title}
            description={item.des}
            link={item.link}
            icons={item.iconLists}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
