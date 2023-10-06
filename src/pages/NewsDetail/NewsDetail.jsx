import {  useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightNav from "../shared/RightSIdeNav/RightNav";
import Nav from "../shared/Navbar/Nav";


const NewsDetail = () => {
    const{id}=useParams()
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <h1 className='text-xl font-semibold text-zinc-700 my-5'>Dragon News Home</h1>
            <div className="grid md:grid-cols-4">
                

                <div className='p-5 md:col-span-3'>
                    <p>{id}</p>
                    {/* <h2 className='text-xl font-bold text-zinc-700'>{title}</h2>
                        <img className=" w-full h-80 rounded-xl py-5" src={thumbnail_url} alt="Article" />
                        <p className='text-base mt-3'>{details.slice(0, 200)} <br />
                            <Link to='' className='text-orange-800 font-semibold'>Read More ...</Link> </p>  */}
                </div>

                <div>
                    <RightNav></RightNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetail;