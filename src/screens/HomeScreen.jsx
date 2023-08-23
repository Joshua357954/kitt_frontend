import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import  Sam from '../assets/images/clay-bank.jpg'
import { BiSearch as SearchIcon } from 'react-icons/bi'
import { FaRegUser as User, FaMoneyBillWave as Cash } from 'react-icons/fa'
import { SiChatbot as Chat } from 'react-icons/si'
import { MdSchool as School, MdAssignment as Assign } from 'react-icons/md'
import { IoMdNotifications as Notify } from 'react-icons/io'
import { TbCalendarTime as Time } from 'react-icons/tb'
import { GrAnnounce as Speaker } from 'react-icons/gr'
import {BsFillCameraFill as Camera} from 'react-icons/bs'
import { FiSettings as Settings } from 'react-icons/fi'

function HomeNav () {
	return (
		<div className="border-b-2 border-gray-100  flex justify-between px-4 py-4 items-center">

			<h2 className="text-4xl font-black">Qitt</h2>

			<div className="flex gap-x-2 justify-between items-center bg-gray-100 p-1 rounded-lg">
				<div className="bg-white p-2 rounded"> <SearchIcon/> </div>
				<input placeholder="Search"  className="placeholder-black p-1 focus:outline-none bg-gray-100"/> 
			</div>

			<div className="flex gap-x-4">
				<div className="bg-gray-100 border-2 border-gray-500 rounded-lg p-1">
					<Notify size={20}/>
				</div>

				<div className="bg-gray-100 rounded-lg p-1">
					<Settings size={20}/>
				</div>
			</div>
		</div>
	)	
}

function HABlocks ({name,icon,color}) {
	const navigate = useNavigate()
	console.log(navigate)
	return (
		<Link to={"/"+ name.toLowerCase()}>
		<div onClick={navigate('/')} className="border-0 border-black  h-full flex flex-col justify-center items-center gap-y-3 bg-gray-50 w-24 rounded-lg">
			<div className={`p-2 rounded-lg bg-blue-300`}>{icon}</div>
			<p className="font-bold text-black">{name}</p>
		</div>
		</Link>

	)
}

function HomeActivityNav () {
	return (
		<div className="py-2 border-b-2 border-gray-200 flex gap-x-2 px-2 bg-gray-0 h-32 w-full">
			<HABlocks name={'Post'} icon={<Camera color="black" size={22} />} color="blue"/>
			<HABlocks name={'Notice'} icon={<Speaker color="black" size={22}/>} color="yellow"/>
			<HABlocks name={'Timetable'} icon={<Time color="black" size={22}/>} color="green"/>
		</div>
	)
}


function FeedPostCard () {
	return (
		<div className="bg-gray-0 w-full h-48  px-2">

			<div className="bg-blue-100 w-full h-full font-bold justify-center items-center">
				All Posts
			</div> 

		</div>
	)
}

function MiniProfileCard() {
	return (
		<div className="bg-gray-50 px-2 flex gap-x-3 w-full items-center rounded-md py-2">

			<div className="w-14 h-14 flex rounded-full overflow-hidden">
				<img src={Sam} className="rounded-full w-full h-full object-cover"/>
			</div>

			<div> 
				<p className="font-medium ">Joshua Boyi</p>
				<p className="font-extralight ">University Of Portharcourt</p>
			</div>
		</div>
	)
}

function UtilsCard ({name,discription,icon}) {
	return (
		<Link to={"/"+name.toLowerCase()}>
			<div className="imgg text-black py-2 px-4 bg-gray-50 gap-y-3 rounded-md">

				<div className="flex gap-x-4  items-center"> 
					{icon}
					<p className="text-[20px] font-medium">{name}</p>
				</div> 

				<p className="font-light">{discription}</p>
				{/*<div> <User/> <p>Assignments</p> </div> */}
			</div>
		</Link>
	)
}

const HomeScreen = () => {
    return (
        <div className=" h-screen w-screen">
        	{<HomeNav/>}
        	<section className=" h-full flex">
        	
        	{/* Left */}
        		<div className='h-full w-[70%] bg-white overflow-y-auto px-2'>
        			<HomeActivityNav />

        			<div className="w-full h-full pt-2">
	        			<FeedPostCard />
        			</div>

        		</div>

        	{/* Right */}
        		<div className="overflow-auto h-full pt-2 w-[30%] px-2 bg-white flex justify-start gap-y-3 items-center flex-col">
        			
    				<MiniProfileCard />
    				<UtilsCard name="Assignment"discription="Get Assignments updates when given" icon={<Assign fill="blue" size={25}/>}/>
    				<UtilsCard name="Forum" discription="Discuss and share ideas with friends, lecturers and more" icon={<Chat fill="yellow" size={25}/>}/>
    				<UtilsCard name="Monitization" discription="Make money from sharing material & content " icon={<Cash fill="green" size={25}/>}/>
    				<UtilsCard name="Assignment"discription="Get Assignments updates when given" icon={<Assign fill="blue" size={25}/>}/>
    				<UtilsCard name="Monitization" discription="Make money from sharing material & content " icon={<Cash fill="green" size={25}/>}/>

        		</div>

        	</section>
        </div>
        
    );
};


export default HomeScreen;
