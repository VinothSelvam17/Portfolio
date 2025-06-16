import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects= [
    {
        id: 1,
        title: "BMI Calculater ",
        description:"BMI Calculator checks health status using height and weight to classify body type.",
        image:"/projects/BMI.png",
        tags: ["React", "CSS"],
        demoUrl: "https://github.com/VinothSelvam17/Weather_tracker/blob/main/Weather.png",
        githubUrl: "https://github.com/VinothSelvam17/BMI_Calculator",

    },
    {
        id: 2,
        title: "Weather Tracker",
        description:"Weather Tracker displays real-time temperature, humidity, and conditions for any location.",
        image:"/projects/Weather.png",
        tags: ["React", "CSS"],
        demoUrl: "https://github.com/VinothSelvam17/BMI_Calculator/blob/main/BMI.png",
        githubUrl: "https://github.com/VinothSelvam17/Weather_tracker",

    },
    {
        id: 3,
        title: "LinkedIn_Chatbox",
        description:"LinkedIn Chatbox enables real-time professional messaging with a simple, interactive interface.",
        image:"/projects/linkedin.png",
        tags: ["React", "CSS", "MangoDB", "Express"],
        demoUrl: "#",
        githubUrl: "https://github.com/VinothSelvam17/LinkedIn_Chatbox",
        
    },

]

export const ProjectSection = () =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Freatured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefull crafted with attention to detail, performance and user experience.</p>
            <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, key) => (
  <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
        <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink size={20}></ExternalLink></a>
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github size={20}></Github>
                    </a>
                </div>
            </div>
            </div>
  </div>
))}
            </div>
    <div className="text-center mt-12">
        <a className=" cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/VinothSelvam17" target="_blank">
            check My Github <ArrowRight size={20}></ArrowRight>
        </a>
    </div>           
        </div>
    </section>
}