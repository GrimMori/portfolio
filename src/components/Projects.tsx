import React, { useEffect, useState } from "react";
import { getOneProject, getProjects } from "../services/projectServices";
import { Link } from "react-router-dom";
import codersabordo from "../../public/images/codersabordo.jpeg"

type ProjectType = {
	name: string,
	type: string,
	description: string,
	image: string,
	imagealt: string,
	url: string,
	repository: string
}

const cosa = document.querySelector(".project-unfold")

const Projects = () => {
	
	const [projects, setProjects] = useState<ProjectType[]>([])
	
	const fakeArray: boolean[] = []
	projects.forEach(project => fakeArray.push(false))
	
	const [clicked, setClicked] = useState(fakeArray)

	useEffect(() => {
		async function loadProjects() {
			getProjects()
				.catch()
				.then((response) => {
					setProjects(response.projects);
				})
				.catch(err => console.log(err))
		}
		loadProjects()
	}, [])

	const handleClick = (projecte: ProjectType, index: number) => {
		projects.filter(project => project.name == projecte.name)
		clicked[index] = !clicked[index];
		setClicked([...clicked])
	}

	return (
		<>
			{projects.map((project, index)=>(
				<div key={index} >
					<p 
					className="project-title"
					onClick={() => handleClick(project, index)}
					>
						{project.name}
					</p>
					<div
					className={`project-unfold ${clicked[index] ? "project-clicked" : ""}`}>
						<p>{project.description}</p>
						<div>
							{project.image && project.image != "" ? (<>
								<Link 
								to={project.image}
								target="_blank"
								rel="noopener">
								Preview
								</Link>
							</>) : (<></>)}
							{project.url && project.url != "" ? (<>
								<Link 
								to={project.url}
								target="_blank"
								rel="noopener">
								{project.type == "art" ? "Detail" : "Deployment"}
								</Link>
							</>) : (<></>)}
							{project.repository && project.repository != "" ? (<>
								<Link 
								to={project.repository}
								target="_blank"
								rel="noopener">
								Repository
								</Link>
							</>) : (<></>)}
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Projects
