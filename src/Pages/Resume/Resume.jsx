// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

const Resume = () => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // };
    return (
        <div className="max-w-screen-lg mx-auto p-5 shadow-2xl">
            {/* <h2>PDF Viewer</h2>
            <Document
                file="/public/resume.pdf" // Replace with the actual path to your PDF file
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p> */}
            <div className=" text-center mt-5 md:mt-10">
                <h1 className=" text-xl md:text-3xl font-bold">MD. MIHIR HASAN</h1>
                <p>Frontend Web Developer</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-40 mt-5 md:mt-20 border-b-2">
                <div className="flex-1 md:border-r-2 md:p-5">
                    <h1 className=" text-lg md:text-2xl font-bold">About Me:</h1>
                    <p>I am MD. Mihir Hasan, Front-End Web Developer with expertise in the MERN stack, hands-on
                        experience in creating responsive and user-friendly web applications. Skilled in front-end
                        technologies such as JavaScript, React.js, HTML5, CSS3 combined with back-end development
                        using Node.js and Express.js.</p>
                </div>
                <div className=" mt-5 md:mt-0 flex-1 md:p-5">
                    <h1 className=" text-lg md:text-2xl font-bold">My Contact:</h1>
                    <p className="mt-3"><span className="font-bold">Address:</span> Jhenaidah, Dhaka, Bangladesh <br />
                        <span className="font-bold">Email:</span> mihirhx@gmail.com <br />
                        {/* <span className="font-bold">Phone:</span> +8801737975336 <br /> */}
                        <span className="font-bold">LinkedIn:</span> https://www.linkedin.com/in/mihir-hasan-130767283 <br />
                        <span className="font-bold">GitHub:</span> https://github.com/mihir-x
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-40 mt-5 md:mt-20 border-b-2">
                <div className="flex-1 md:border-r-2 md:p-5">
                    <h1 className=" text-lg md:text-2xl font-bold">Technical Skills:</h1>
                    <p className="mt-3"><span className="font-bold">Expert:</span> React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Firebase, MongoDB <br />
                        <span className="font-bold">Comfortable:</span> Node.js, Express.js <br />
                        {/* <span className="font-bold">Phone:</span> +8801737975336 <br /> */}
                        <span className="font-bold">Familiar:</span> Stripe.js, Next.js, Material UI <br />
                    </p>
                </div>
                <div className=" mt-5 md:mt-0 flex-1 md:p-5">
                    <h1 className=" text-lg md:text-2xl font-bold">Interpersonal Skills:</h1>
                    <p className="mt-3">Adaptability, Perseverance, Quick learner, Teamwork, Responsibility
                    </p>
                </div>
            </div>
            <div className="mt-5 md:mt-20">
                <h1 className=" text-center mb-5 text-lg md:text-2xl font-bold">Projects:</h1>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 border-b-2 md:p-5">
                    <div className=" md:border-r-2">
                        <h1 className=" text-lg md:text-xl font-bold mb-2">Medical Camp Management</h1>
                        <a href="https://github.com/mihir-x/medical-camp-management-project" className="text-white p-1 rounded-md bg-gray-500">GitHub Link</a>
                        <a href="https://luminous-sherbet-6eb0c1.netlify.app" className="text-white p-1 rounded-md bg-gray-500 ml-5">Live Link</a>
                        <p className="font-bold">Features:</p>
                        <ul className="list-disc p-2">
                            <li>Database integration with mongoDB</li>
                            <li>Payment system integration with stripe.js</li>
                            <li>Login/Registration with Firebase</li>
                        </ul>
                    </div>
                    <div className=" md:border-r-2">
                        <h1 className=" text-lg md:text-xl font-bold mb-2">Blog Hub</h1>
                        <a href="https://github.com/mihir-x/my-blog-website-assignment" className="text-white p-1 rounded-md bg-gray-500">GitHub Link</a>
                        <a href="https://gorgeous-kitten-b026ab.netlify.app" className="text-white p-1 rounded-md bg-gray-500 ml-5">Live Link</a>
                        <p className="font-bold">Features:</p>
                        <ul className="list-disc p-2">
                            <li>Database integration with mongoDB</li>
                            <li>Can add, update blog and post comment</li>
                            <li>Login/Registration with Firebase</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=" text-lg md:text-xl font-bold mb-2">Brand Shop</h1>
                        <a href="https://github.com/mihir-x/automotive-brand-shop-project" className="text-white p-1 rounded-md bg-gray-500">GitHub Link</a>
                        <a href="https://celadon-croissant-bebbb3.netlify.app" className="text-white p-1 rounded-md bg-gray-500 ml-5">Live Link</a>
                        <p className="font-bold">Features:</p>
                        <ul className="list-disc p-2">
                            <li>Database integration with mongoDB</li>
                            <li>Dark/light theme integration on homepage</li>
                            <li>Login/Registration with Firebase</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify-between my-5 md:my-20 ">
                <div>
                    <h1 className=" text-lg md:text-2xl font-bold">Education:</h1>
                    <p className="mt-3">M.Sc. in Information and Communications Technology (2016-2017),
                        Islamic University, Kushtia. <br />
                        B.Sc. in Information and Communications Technology (2013-2016),
                        Islamic University, Kushtia.
                    </p>
                </div>
                <div>
                    <h1 className=" text-lg md:text-2xl font-bold">Language:</h1>
                    <p className="mt-3"><p className="mt-3">
                        <span className="font-bold">Bangla:</span> Native<br />
                        <span className="font-bold">English: </span> Comfortable <br />
                    </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;