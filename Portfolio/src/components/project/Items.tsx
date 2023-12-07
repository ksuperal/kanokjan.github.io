import React from 'react';
import { projects } from '../../Data';
import shapeTwo from '../../assets/shape-2.png';
import { motion } from 'framer-motion';
import { FaArrowRightToBracket } from "react-icons/fa6";

interface ProjectItem {
  id: number;
  img: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

interface ItemsProps {
  projectItems: ProjectItem [];
}

const Items: React.FC< ItemsProps > = ({ projectItems }) => {
  return (
    <>
      {projectItems.map(( projectItem ) => {
        const { id, img, category, title, description, link } = projectItem;
        return (
          <motion.div layout 
          animate ={ { opacity:1, scale:1 } } 
          initial ={ { opacity:0.8, scale:0.6 } }
          exit ={ { opacity:0.8, scale:0.6 } }
          transition ={ { duration:0.3 } }
          key={id} className="portfolio__items card card-two">
            <div className="portfolio__img-wrapper">
              <img src={img} alt={title} className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <a href={link} className="portfolio__description"><FaArrowRightToBracket/> </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
