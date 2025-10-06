import { ArrowDown } from "lucide-react"

export const HeroSection =() =>{
    return <section id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
        <div className="container max--w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
              <h1 className="text-4xl md-text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm  </span>
                    <span className="text-primary opacity-0 animate-fade-in">Vinoth</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                        {" "}
                        Selvam</span>
                </h1>
<p className="mt-2 text-lg text-gray-300">
  Frontend Developer | React.js | Crafting clean, responsive, and dynamic web apps.
</p>
<a 
  href="#projects"
  className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
  View My Work
</a>

{/* <p className="text-lg md-text-lg text-muted-foreground max-2-2xl mx-atuo opacity-0 animate-fade-in-delay-3">Full Stack Web Developer (MERN Stack) | React.js | Node.js | MongoDB | REST APIs. I build scalable, responsive web applications with clean UI and robust backend logic.</p> */}
                <p className="text-lg md:text-lg text-muted-foreground max-w-4xl mx-auto animate-fade-in-delay-3">
  Full Stack Web Developer (MERN Stack) | React.js | Node.js | MongoDB | REST APIs.
  I build scalable, responsive web applications with clean UI and robust backend logic.
</p>

                <div className="pt-0 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 trasform-translate-1/2 flex felx-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                 <a href="#about">
                        Scroll
            <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>

                    </a>
                </span>
        </div>
     </section>
}
