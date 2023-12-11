import { useEffect, useState } from "react";
import Headings from "../../Components/Shared/Headings/Headings";
import SkillCard from "./SkillCard";
import { Progress } from "flowbite-react";


const Skills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('/public/tech.json').then(res => res.json()).then(data => setSkills(data))
    }, [])

    return (
        <div className=" max-w-screen-lg mx-auto mb-5 md:mb-20">
            <Headings heading='MY Skill Level'></Headings>
            <div className="mt-5 md:mt-8 mb-20 space-y-2 max-w-lg mx-auto">
                <Progress progress={75} textLabel="React" size="lg" labelProgress labelText />
                <Progress progress={55} textLabel="JavaScript" size="lg" labelProgress labelText />
                <Progress progress={85} textLabel="HTML5" size="lg" labelProgress labelText />
                <Progress progress={80} textLabel="Css3" size="lg" labelProgress labelText />
                <Progress progress={90} textLabel="Tailwind" size="lg" labelProgress labelText />
            </div>
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