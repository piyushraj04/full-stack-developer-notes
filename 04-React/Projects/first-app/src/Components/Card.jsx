
import React from 'react'

const Card = () => {
    const name = "Piyush Raj";
    const description = "Hi, I'm Piyush, a Computer Science graduate and an aspiring Java Full Stack Developer. I enjoy building web applications using Java, Spring Boot, SQL, React, and modern web technologies. I'm passionate about writing clean code, solving DSA problems, and creating projects that solve real-world problems.";
  return (
    <div className='card-parent'>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card