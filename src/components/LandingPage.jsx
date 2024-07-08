import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import mainImage from "../assets/mainBgImage.png";
import Product from "./Product";
const LandingPage = () => {
    return (
        <>

            <div className="w-full md:px-0  md:pt-[150px] " >
                <div className="max-w-screen-xl px-2 mx-auto min-h-screen md:rounded-3xl items-center flex py-24 px-2 md:p-20" style={{ background: "url(" + mainImage + ")", backgroundSize: "cover" }}>
                    <div className="h-fit md:w-[80%]">
                        <h1 className="text-6xl font-trajan py-6 md:py-0 text-white ">
                            Discover Timeless & Elegant Luxury Men's Brogues
                        </h1>
                        <div className="font-bold font-cabinet">

                            <p className="text-white w-full md:w-[45%] py-12 text-xl">
                                Our exclusive collection of executive men’s brogues, crafted to elevate your style effortlessly.
                            </p>
                            <div className="w-full md:w-fit gap-4 md:flex">
                                <button className="bg-white py-4 w-full md:w-fit px-8 rounded-full">Browse products</button>
                                <button className="border-white border w-full my-4 md:my-0 md:w-fit text-white py-4 px-8 rounded-full">About us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto  mt-16  px-2">
                    <h1 className="md:text-[80px] text-[40px] font-trajan">
                        featured products
                    </h1>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD black"} price={320000} image={product2} />
                        <Product name={"Italian Black"} price={106000} image={product3} />
                        <Product name={"OXFORD BROWN"} price={192000} image={product1} />
                        <Product name={"OXFORD black"} price={320000} image={product2} />
                        <Product name={"Italian Black"} price={106000} image={product3} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;