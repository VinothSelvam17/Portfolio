import { useEffect, useState } from "react";


export const StarBakground = () => {
    const [stars, setStars] = useState([]);
    const [Meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () =>{
            generateStars();
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars= Math.floor((window.innerWidth * window.innerHeight) / 1000);
    

    const newStars = []

    for (let i=0; i < numberOfStars; i++){
        newStars.push({
            id:i,
            size: Math.random() * 3 + 1,
            x: Math. random() * 100,
            y: Math. random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,

        })
    }

    setStars(newStars)
    };

     const generateMeteors = () => {
        const numberOfMeteors= 3;
    

    const newMeteors = []

    for (let i=0; i < numberOfMeteors; i++){
        newMeteors.push({
            id:i,
            size: Math.random() * 2 + 1,
            x: Math. random() * 100,
            y: Math. random() * 20,
            opacity: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,

        })
    }

    setMeteors(newMeteors)
    };
     return ( 
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star)=>(
            <div key={star.id} className="star animate-pluse-subtle" style= {{    
                width: star.size + "px",
                  height:star.size + "px",
                  left:star.x + "%",
                  top:star.y + "%",
                  opacity:star.opacity,
                  animationDuration: star.animationDuration + "s",
            }}
            />
        ))}
        {Meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" style= {{    
                width: meteor.size * 40 + "px",
                  height:meteor.size * 2 + "px",
                  left:meteor.x + "%",
                  top:meteor.y + "%",
                  opacity:meteor.opacity,
                  animationDuration: meteor.animationDuration + "s",
            }}
            />
        ))}
     </div>
     );
    }