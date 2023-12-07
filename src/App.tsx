import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Services from './components/services/Service';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skills/>
      <Project/>
      <Resume/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
