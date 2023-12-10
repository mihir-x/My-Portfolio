

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="flex flex-col md:flex-row-reverse md:justify-around items-center min-h-screen">
                    <img src="https://i.ibb.co/9TRxMzm/mihir.png" className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, This is <br /> MIHIR HASAN</h1>
                        <p className="py-6">I am a web developer</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;