import projects from "../components/work/projects.json";

export const getProjects = async() => {
    return await projects
}

export const getOneProject = async(name: string) => {
    return await projects.projects.filter(project => project.name = name)
}