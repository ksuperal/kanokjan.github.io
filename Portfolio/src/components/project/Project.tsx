import React, {useState} from 'react';
import './project.css';
import List from './List';
import Items from './Items';
import { projects } from '../../Data';
import { AnimatePresence } from 'framer-motion';

const allNavList = [ 'all', ...new Set(projects.map((project) => project.category))];

  
const Project = () => {
    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCategories] = useState(allNavList);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);
        setMenuItems(newProjectItems);
    };

    return (
        <section className='portfoilio section' id='work'>
            <h2 className="section__title text-cs">Portfolio</h2>
            <p className="section__subtitle">
                My <span>Projects</span>
            </p>

            <List list={navList} filterItems={filterItems}/>
            <div className="portfolio__container container grid">
                <AnimatePresence initial= { false }>
                    <Items projectItems={projectItems}/>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Project;