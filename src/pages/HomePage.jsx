
//have to use { allProjects } because there are two exports, there is no default
//import {  allProjects  } from "../data";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "../HomePage.css"; 

function HomePage() {
    const { projects } = useProjects();

    if (isLoading) return <h1>loading...</h1>;

    if (error) return <h1> {error.message} </h1>;
    
    return (
        <div id="project-list">
            
            {projects.map((projectData, key) => {
                //return <div key={key} > {projectData.title}</div>;
                return <ProjectCard key={key} projectData={projectData} />

            })}

        </div>
    )
    
};

export default HomePage;
