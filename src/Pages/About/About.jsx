import { Card } from "flowbite-react";


const About = () => {
    return (
        <div className=" max-w-screen-lg mx-auto">
            <Card className="">
                
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Bonnie image"
                        height="96"
                        src='/public/photo.jpg'
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">MD. MIHIR HASAN</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
                    <div className=" max-w-lg text-center my-5 md:my-10">
                        <p className=" text-gray-600">Hi, I am Mihir Hasan. I&apos;ve come from a small village named Sheikhpara. I am a Frontend Web Developer. I like to code and love to read. </p>
                        <p><span className=" font-bold">Contact Info:</span> mihirhx@gmail.com</p>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row md:gap-20 lg:mt-6">
                        <div className="flex-1 border-r-2">
                            <h1 className=" text-lg md:text-2xl font-bold">My Academic qualification:</h1>
                            <p className="mt-3 text-gray-600">M.Sc. in Information and Communications Technology (2016-2017),
                                Islamic University, Kushtia. <br /> <br />
                                B.Sc. in Information and Communications Technology (2013-2016),
                                Islamic University, Kushtia.
                            </p>
                        </div>
                        <div className="flex-1">
                            <h1 className=" text-lg md:text-2xl font-bold">My Experience:</h1>
                            <p className="mt-3 text-gray-600">I have worked as a freelancer in my friend&apos;s company Rubel Design Solution from 2021-2022. <br /> <br /> I am learning web development past 6 months. In this period I worked on many projects including medical camp management system, blog website, brand shop etc. I am specialized in react.js. Mainly I work on MERN stack projects. <br /> <br /> I also have experience in the field of IOT. In my academic year I worked on few IOT projects like home automation, obstacle finder using sonar sensor etc.</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default About;