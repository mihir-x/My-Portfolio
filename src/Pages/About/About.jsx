import { Card } from "flowbite-react";


const About = () => {
    return (
        <div className=" max-w-screen-lg mx-auto">
            <Card className="">
                {/* <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div> */}
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
                        <p>Hi, I am Mihir Hasan. I&apos;ve come from a small village named Sheikhpara. I am a Frontend Web Developer. I like to code and love to read. </p>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row md:gap-20 lg:mt-6">
                        <div className="flex-1">
                            <h1 className=" text-lg md:text-2xl font-bold">My Academic qualification:</h1>
                            <p className="mt-3">M.Sc. in Information and Communications Technology (2016-2017),
                                Islamic University, Kushtia. <br /> <br />
                                B.Sc. in Information and Communications Technology (2013-2016),
                                Islamic University, Kushtia.
                            </p>
                        </div>
                        <div className="flex-1">
                            <h1 className=" text-lg md:text-2xl font-bold">My Experience:</h1>
                            <p className="mt-3">I have worked as a freelancer in my friend&apos;s company Rubel Design Solution from 2021-2022. <br /> <br /> I am learning web development past 6 months. In this period I worked on many projects including medical camp management system, blog website, brand shop etc. I am specialized in react.js. Mainly I work on MERN stack projects. <br /> <br /> I also have experience in the field of IOT. In my academic year I worked on few IOT projects like home automation, obstacle finder using sonar sensor etc.</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default About;