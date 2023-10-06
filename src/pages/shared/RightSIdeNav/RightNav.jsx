// import { BiLogoGoogle, BiLogoGithub, BiLogoFacebookCircle, BiLogoInstagramAlt } from 'react-icons/Bi';
// import { AiFillTwitterCircle } from 'react-icons/Ai';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import adBg from '../../../assets/bg1.png';


const RightNav = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className="text-xl font-semibold text-zinc-700 my-2">Login With</h2>
                <button className='w-full btn btn-outline rounded-lg text-blue-700 mb-2'>
                    {/* <BiLogoGoogle className='text-xl bg-'></BiLogoGoogle> */}
                    <p>Login With Google</p>
                </button>
                <button className='w-full btn btn-outline rounded-lg text-neutral-800'>
                    {/* <BiLogoGithub className='text-2xl bg-'></BiLogoGithub> */}
                    Login With Github
                </button>

            </div>



            {/* findUs Section  */}
            <div className='mb-5 p-4'>
                <h2 className="text-xl font-semibold text-zinc-700 mt-7 mb-5">Find Us On</h2>
                <button className='w-full border border-zinc-700 py-2 px-5 text-zinc-800 rounded-t-lg flex items-center'>
                    {/* <BiLogoFacebookCircle className='text-4xl bg-slate-300 rounded-full p-2 text-blue-700 mr-3'></BiLogoFacebookCircle> */}
                    <p className='font-medium'>Facebook</p>
                </button>

                <button className='w-full border-x border-zinc-700 py-2 px-5 text-zinc-800  flex items-center'>
                    {/* <AiFillTwitterCircle className='text-4xl bg-slate-300 rounded-full p-2 text-sky-500 mr-3'></AiFillTwitterCircle> */}
                    <p className='font-medium'>Twitter</p>
                </button>
                <button className='w-full border border-zinc-700 py-2 px-5 text-zinc-800  flex items-center rounded-b-lg '>
                    {/* <BiLogoInstagramAlt className='text-4xl text-rose-600 p-2 bg-slate-300 rounded-full mr-3'></BiLogoInstagramAlt> */}
                    <p className='font-medium'>Instagram</p>
                </button>
            </div>

            {/* Q-Zone  */}
            <div className='p-4 bg-slate-200 rounded'>
                <h2 className="text-xl font-semibold text-zinc-700 my-2">Q-Zone</h2>
                <img src={qzone1} alt="" className='mb-5' />
                <img src={qzone2} alt="" className='mb-5' />
                <img src={qzone3} alt="" className='mb-7' />


            </div>
            <div className='flex flex-col p-4 relative '>
                <img src={adBg} alt="" />
                <div className=' absolute w-100% h-100% bg-gray-400 z-50'></div>
                <div className=' absolute w-100% h-100% text-center px-4 left-0.5
                '>

                    <h2 className='mt-16 mb-9 text-3xl font-bold text-white'>Create an Amazing Newspaper</h2>

                    <p className='text-lg font-medium text-white mb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                    <button className='px-5 py-3 bg-pink-600 text-white font-bold text-lg'>Learn More</button>

                </div>

            </div>
        </div>
    );
};

export default RightNav;