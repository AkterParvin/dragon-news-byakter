/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsBookmark, BsFillStarFill, BsFillEyeFill } from 'react-icons/Bs';
import { BiGitBranch } from 'react-icons/Bi';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { author, title, image_url, details, _id } = news;

    return (
        <div className="my-10 shadow-xl  bg-white rounded-lg  dark:bg-gray-800">

            <div className=" flex justify-between items-center p-5 bg-stone-200 mb-3">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src={author.img} alt="Avatar" />
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{author.name}</a>
                    </div>
                    <span className="mx-12 text-sm font-semibold text-gray-600 dark:text-gray-300">{author.published_date}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <BsBookmark></BsBookmark>
                    <BiGitBranch></BiGitBranch>
                </div>
            </div>

            <div className='p-5'>
                <h2 className='text-xl font-bold text-zinc-700'>{title}</h2>
                <img className=" w-full h-80 rounded-xl py-5" src={image_url} alt="Article" />
                {
                    details.length > 200 ? <p className='text-base mt-3'>{details.slice(0, 200)} <br/> <Link to={`/news/${_id}`} className='text-orange-800 font-semibold'>Read More ...</Link> </p> :
                        <p>details</p>

                }
            </div>


            <div className=" flex justify-between items-center p-5 border border-t-slate-200 mb-3">

                <div className='flex items-center gap-2'>
                    <BsFillStarFill className='text-xl text-orange-500'></BsFillStarFill>
                    <BsFillStarFill className='text-xl text-orange-500'></BsFillStarFill>
                    <BsFillStarFill className='text-xl text-orange-500'></BsFillStarFill>
                    <BsFillStarFill className='text-xl text-orange-500'></BsFillStarFill>
                    <BsFillStarFill className='text-xl text-orange-500'></BsFillStarFill>

                    <p className='text-xl'>4.9</p>

                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-3">
                        <BsFillEyeFill className='text-2xl'></BsFillEyeFill>
                        <p>499</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default NewsCard;