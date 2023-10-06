import Header from '../shared/Header/Header'
import Nav from '../shared/Navbar/Nav'
import BreakingNews from '../shared/Header/BreakingNews'
import Leftnav from "../shared/LeftNav/Leftnav";
import RightNav from "../shared/RightSIdeNav/RightNav";
import { useLoaderData } from 'react-router-dom';
import NewsCard from './newsCard';


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-black">
                    <Leftnav></Leftnav>
                </div>
                <div className="md:col-span-2 bg-amber-50 ">
                    <h1 className='text-xl font-semibold text-zinc-700 my-5'>Dragon News Home</h1>
                    {
                        news.map(aNews =>
                            <NewsCard
                                key={aNews._id} news={aNews}
                            >
                            </NewsCard>)
                    }

                </div>
                <div className="border border-black">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;