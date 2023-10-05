import BreakingNews from "./shared/Header/BreakingNews";
import Header from "./shared/Header/Header";
import Leftnav from "./shared/LeftNav/Leftnav";
import Nav from "./shared/Navbar/Nav";
import RightNav from "./shared/RightSIdeNav/RightNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-black">
                   <Leftnav></Leftnav>
                </div>
                <div className="md:col-span-2 border border-black">
                    <h2 className="text-4xl">News coming Soon...</h2>
                </div>
                <div className="border border-black">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;