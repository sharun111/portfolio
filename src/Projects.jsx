import React from "react";
import "./Projects.css";
import logo from "/src/assets/instagram-application-logo_23-2151544086.avif"

const Projects = () => {
    return (
        <div className="cards">
             <div className="projects-heading">
              <h3>PROJECTS</h3>
            </div>
            <div className="card">
                <div className="card-image">
                    <img
                        src={logo}
                        alt="Spotify Project"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        Instagram clone <span className="arrow">↗</span>
                    </h3>
                    <p className="card-description">
                        Developed a responsive Instagram clone using React.js to simulate core social media features.
                        Utilized React Router for seamless client-side routing and navigation between profile, feed, and stories pages.
                        Integrated JSON Server as a mock backend to handle user profiles, posts, followers, and suggestions.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img
                        src="/src/assets/01cada77a0a7d326d85b7969fe26a728.jpg"
                        alt="Spotify Project"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        Amazon Clone <span className="arrow">↗</span>
                    </h3>
                    <p className="card-description">
                        Developed an Amazon clone application using JavaScript and integrated GitHub for version control and better
                        project tracking.Implemented state management using Local Storage to update the cart and handle other application
                        functionalities.Integrated external libraries to enhance performance and improve overall application quality.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img
                        src="/src/assets/526-5263079_todo-cloud-app-icon-circle-hd-png-download.png"
                        alt="Spotify Project"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        Todo Application <span className="arrow">↗</span>
                    </h3>
                    <p className="card-description">
                        Built a to-do list application where users can add, delete, and mark tasks as complete.
                        Used JavaScript to handle task management, DOM manipulation, and event-driven updates.
                        Deployed on GitHub Pages for easy access.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img
                        src="/src/assets/download.webp"
                        alt="Spotify Project"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        Weather app <span className="arrow">↗</span>
                    </h3>
                    <p className="card-description">
                        Integrated OpenWeatherMap API to fetch and display real-time weather data including temperature, humidity,wind speed, and conditions.
                        Implemented city-based search functionality with dynamic data rendering.
                        Developed a responsive weather application using HTML, CSS, and JavaScript.
                        Used asynchronous JavaScript (async/await, fetch) for smooth API data handling.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img
                        src="/src/assets/download (1).webp"
                        alt="Spotify Project"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">
                        Drum Music Player <span className="arrow">↗</span>
                    </h3>
                    <p className="card-description">
                        Integrated audio functionality to play drum sounds on each button click
                        Utilized DOM manipulation for interactive user experience
                        Used Git for version control and deployed the project online
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Projects;
