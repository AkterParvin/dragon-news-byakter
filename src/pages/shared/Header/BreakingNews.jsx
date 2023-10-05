import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex  items-center">
            <button className="btn btn-secondary btn-md">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}
                style={{
                    background: 'linear-gradient(to right, #dcebae, #6aaeba)',
                padding:'4px' }}>
                <Link to='/' className="mr-4" >I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/' className="mr-4">I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/' className="mr-4">I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/' className="mr-4">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;