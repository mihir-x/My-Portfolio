import { useEffect, useState } from "react";
import Headings from "../../Components/Shared/Headings/Headings";
import SkillCard from "./SkillCard";


const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(()=>{
        fetch('/public/tech.json').then(res =>res.json()).then(data => setSkills(data))
    },[])
    
    return (
        <div className=" max-w-screen-lg mx-auto mb-5 md:mb-20">
            <Headings heading='Technologies I Work With'></Headings>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    skills.map(skill => <SkillCard key={skill.id} item={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;