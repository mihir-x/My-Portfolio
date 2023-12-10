import { Carousel } from "flowbite-react";
import Headings from "../../Components/Shared/Headings/Headings";


const Projects = () => {
    return (
        <div className=" max-w-screen-lg mx-auto">
            <div>
                <Headings heading={'My Latest Projects'}></Headings>
            </div>
            <div className="my-5 md:my-8">
                <div className="shadow-2xl mt-5 md:mt-10 p-5">
                    <div className="text-center">
                        <h1 className="font-bold text-lg md:text-2xl">MediVoyage</h1>
                        <p className="max-w-xl mx-auto mt-2">MediVoyage is a service based website where different types of medical camp can be added by the organizer and participant can join by paying for the camp using stripe payment gateway</p>
                        <div className="flex gap-8 justify-center my-1 md:my-4">
                            <a href="https://github.com/mihir-x/medical-camp-management-project" className="btn">GitHub Link</a>
                            <a href="https://gorgeous-kitten-b026ab.netlify.app" className="btn">Live Link</a>
                        </div>
                    </div>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 p-5">
                        <Carousel slideInterval={2000}>
                            <img src="/src/assets/images/projects/medi1.PNG" alt="..." />
                            <img src="/src/assets/images/projects/medi2.PNG" alt="..." />
                            <img src="/src/assets/images/projects/medi3.PNG" alt="..." />
                            <img src="/src/assets/images/projects/medi4.PNG" alt="..." />
                            <img src="/src/assets/images/projects/medi5.PNG" alt="..." />
                        </Carousel>
                    </div>
                </div>
                <div className="shadow-2xl mt-5 md:mt-10 p-5">
                    <div className="text-center">
                        <h1 className="font-bold text-lg md:text-2xl">Blog Hub</h1>
                        <p className="max-w-xl mx-auto mt-2">Blog Hub is blogging website where people can write blogs and also comment on other blog</p>
                        <div className="flex gap-8 justify-center my-1 md:my-4">
                            <a href="https://github.com/mihir-x/my-blog-website-assignment" className="btn">GitHub Link</a>
                            <a href="https://gorgeous-kitten-b026ab.netlify.app" className="btn">Live Link</a>
                        </div>
                    </div>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 p-5">
                        <Carousel slideInterval={2000}>
                            <img src="/src/assets/images/projects/blog1.PNG" alt="..." />
                            <img src="/src/assets/images/projects/blog2.PNG" alt="..." />
                            <img src="/src/assets/images/projects/blog3.PNG" alt="..." />
                            <img src="/src/assets/images/projects/blog4.PNG" alt="..." />
                            <img src="/src/assets/images/projects/blog5.PNG" alt="..." />
                        </Carousel>
                    </div>
                </div>
                <div className="shadow-2xl mt-5 md:mt-10 p-5">
                    <div className="text-center">
                        <h1 className="font-bold text-lg md:text-2xl">Brand Shop</h1>
                        <p className="max-w-xl mx-auto mt-2">The brand shop website showcases 6 types of car brand. People can add different cars, also can add them to their cart.</p>
                        <div className="flex gap-8 justify-center my-1 md:my-4">
                            <a href="https://github.com/mihir-x/automotive-brand-shop-project" className="btn">GitHub Link</a>
                            <a href="https://celadon-croissant-bebbb3.netlify.app" className="btn">Live Link</a>
                        </div>
                    </div>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 p-5">
                        <Carousel slideInterval={2000}>
                            <img src="/src/assets/images/projects/brand1.PNG" alt="..." />
                            <img src="/src/assets/images/projects/brand2.PNG" alt="..." />
                            <img src="/src/assets/images/projects/brand3.PNG" alt="..." />
                            <img src="/src/assets/images/projects/brand4.PNG" alt="..." />
                            <img src="/src/assets/images/projects/brand5.PNG" alt="..." />
                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;