import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="flex flex-col md:flex-row-reverse md:justify-around items-center min-h-screen">
                    <img src="https://i.ibb.co/9TRxMzm/mihir.png" className="max-w-sm rounded-lg hover:transform hover:scale-125 hover:duration-1000" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, This is <br /> MIHIR HASAN</h1>
                        <p className="py-6">I am a web developer <br /> Waiting to collaborate with you in awesome projects <br />Feel free to contact me</p>
                        <Link to='/contact'><button className="btn btn-primary">Contact Me</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;