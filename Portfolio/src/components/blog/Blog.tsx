import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Blog1 from '../../assets/2.jpg';
import Blog2 from '../../assets/cm.jpg';
import './blog.css'


const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Outstanding Activity</h2>
        <p className="section__subtitle">
        My <span> Activity </span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs"> 13 December, 2018 </span>
                <h3 className="blog__title"> Stem Project</h3>
                    <p className="blog__description">
                        Build and present as a representator for project about the STEM project to Her Royal Highness Princess Maha Chakri Sirindhorn. 
                        The STEM project include the 3D printer, the robot, the drone, the smart home, the smart farm, the smart city, the smart factory and the smart building.
                        This project is to show the ability of technology and software development such as"python" to improve suberb and society.
                    </p>

                    <a href='http://www.sakhononline.com/news/2017/?p=8118' className='link'>
                        Read More
                        <FaArrowRight/>
                    </a>
                
                    <img src={Blog1} alt="" className="blog__img"/>
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs"> NA </span>
                <h3 className="blog__title"> Coming Soon... </h3>
                    <p className="blog__description">
                        ---
                    </p>

                    <a href='' className='link'>
                        Read More
                        <FaArrowRight/>
                    </a>
                
                    <img src={Blog2} alt="" className="blog__img"/>
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs"> NA </span>
                <h3 className="blog__title"> Coming Soon... </h3>
                    <p className="blog__description">
                        ---
                    </p>

                    <a href='' className='link'>
                        Read More
                        <FaArrowRight/>
                    </a>
                
                    <img src={Blog2} alt="" className="blog__img"/>
            </div>
        </div>
    </section>
  )
}

export default Blog