
import React from 'react';
import { Link } from 'react-router-dom'
import { IoMdArrowBack as ArrowBack } from 'react-icons/io'


function AssignmentCard () {
	return (
		<div className="flex gap-x-2 px-2 py-1 mt-1 bg-gray-50 rounded-lg">
			<div className="w-[30%] bg-blue-400 rounded-lg flex flex-col justify-center items-center">
				<p className="text-white font-black text-3xl">23</p>
				<p>August, 2023</p>
			</div>

			<div className="flex flex-col">
				<h2 className="truncate text-3xl font-medium">Biology Assignment</h2>
				<p>Discription lorem ...</p>
				<p>Biology</p>
				<small className="bg-green-200 rounded-lg p-1 w-10 text-center font-medium">PDF</small>
			</div>
		</div>
	)

}

const AssignmentScreen  = () => {
    return (
        <div className="bgc flex justify-center items-center w-screen h-screen ">
        	
        	<div className="lga h-full w-[60%] bg-white px-2">
        		
        		
        		<div className="mb-4 shadow-lg gap-x-5 shadow-gray-100 h-14 w-full flex justify-center border-b-2 border-gray-200 items-center ">
        			
        			<Link to="/home"> 
	        			<div className="border-2 shadow-gray-100 border-gray-500 left-3 bg-blue-300 p-2 rounded-lg ">
		        			<ArrowBack  className="text-black"/> 	
		        		</div>
	        		</Link>

	        		<p className="font-bold">Assignment</p>

        		</div>


        	{/* Body */}

        	<AssignmentCard />
        	<AssignmentCard />
        	
        		


        	</div>
       </div>
    );
};

export default AssignmentScreen;
