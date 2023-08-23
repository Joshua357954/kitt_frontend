
import React from 'react';
import { Link } from 'react-router-dom'
import { IoMdArrowBack as ArrowBack } from 'react-icons/io'



const TimetableScreen = () => {
     return (

        <div className="bgc flex justify-center items-center w-screen h-screen ">
        	
        	<div className="lga h-full w-[60%] bg-white px-2">
        		
        		
        		<div className="mb-4 shadow-lg gap-x-5 shadow-gray-100 h-14 w-full flex justify-center border-b-2 border-gray-200 items-center ">
        			
        			{<Link to="/"> 
	        			<div className="border-2 shadow-gray-100 border-gray-500 left-3 bg-blue-300 p-2 rounded-lg ">
		        			<ArrowBack  className="text-black"/> 	
		        		</div>
	        		</Link>}

					<p className="font-bold">Timetable</p>
	        		
        		</div>


        	{/* Body */}
        		


        	</div>
       </div>
    );
};

export default TimetableScreen;
