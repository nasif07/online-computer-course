
const Home = () => {
    return (
        <div className="mx-12 flex">
            <div className="w-2/3 card-container grid grid-cols-3 grid-rows-3">
                <div className="">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/KGPgCX6/download-2.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="cart w-1/3">
                <button className="btn btn-primary">janina</button>
                
            </div>
        </div>
    );
};

export default Home;