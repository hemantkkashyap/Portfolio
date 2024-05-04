import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };


  const projects = [
    {
      name: 'Codebox',
      category: 'Desktop Application',
      image: 'codebox.png',
      link: 'https://github.com/hemantkkashyap/CodeBox.git'
    },
    {
      name: 'Amphicraft',
      category: 'Web Development',
      image: 'Event.png',
      link: 'https://github.com/hemantkkashyap/Amphicraft.git'
    },
    {
      name: 'My Portfolio',
      category: 'Web Development',
      image: 'Port.png',
      link: 'https://github.com/hemantkkashyap/Portfolio.git'
    },
    {
      name: 'Chatbot',
      category: 'Web Development',
      image: 'Chatbot.png',
      link: 'https://github.com/hemantkkashyap/CHATBOT.git'
    },
    {
      name: 'File Zipper',
      category: 'Spring Boot',
      image: 'zip.png',
      link: 'https://github.com/hemantkkashyap/FileZipper.git'
    },
    {
      name: 'Temperature Converter',
      category: 'Web Development',
      image: 'convertor.png',
      link: 'https://github.com/hemantkkashyap/Tempratureconverter.git'
    },
    // Add more project objects here...
  ];

  const categories = ['All', 'Web Development', 'Desktop Application', 'Spring Boot'];


  return (
    <article class="projects active" data-page="projects">
    <header>
      <h2 class="h2 article-title">Projects</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
      {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
      </ul>


      <ul className="project-list">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${project.category.toLowerCase() === selectedCategory.toLowerCase() || selectedCategory === 'All' ? 'active' : ''}`}
              data-filter-item=""
              data-category={project.category.toLowerCase()}
            >
              <Link to={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon
                      name="eye-outline"
                      role="img"
                      className="md hydrated"
                      aria-label="eye outline"
                    ></ion-icon>
                  </div>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-category">{project.category}</p>
              </Link>
            </li>
          ))}
        </ul>

    </section>
  </article>
  )
}
