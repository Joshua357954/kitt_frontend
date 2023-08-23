import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom'
import { firebaseConfig } from "../firebase/key.js"
import bgImage from '../assets/images/serious-girl (1).jpg'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthScreen = () => {

	const [gender,setGender] = useState('')
	const [userType,setUserType] = useState('')
	
	const app = initializeApp(firebaseConfig);
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const handleGender = (event) => {
		// alert(event.target.value)
	    setGender(event.target.value);
	 };
	const handleST = (event) => {
		setUserType(event.target.value)
	}
	

	function GoogleSignIn () {
		signInWithPopup(auth, provider)
		  	.then((result) => {	
			 	const credential = GoogleAuthProvider.credentialFromResult(result);
			    const token = credential.accessToken;
			    const user = result.user;
			    console.log(user)

			    alert(JSON.stringify(user))

			    if (user) {
			    	// get user data from backend and,
			    	// send the data to redux state
			    	return redirect('/home')
			    }
		  
		  }).catch((error) => {
		  		alert("An Error Occured , Please try again")
		  });
	}

    return (
        <main className="flex w-screen h-screen border-0 border-gray-300">
        	
        	<section className={`w-0 md:w-[40%] bg-gray-200 border-r-2 border-gray-200`} >
        		<img src={bgImage} className="h-screen bg-cover  object-cover"/>
        		
        	</section>


        	<section className="Two sm:w-full md:w-[60%] bg-white">

	        	<div className="flex flex-col mx-4 mt-3 py-3 border-b-2 border-gray-300">
					<h1 className="font-bold"> Qitt </h1>
					<p className="text-gray-400">Welcome to Qit , Get everything in one kit</p>
	        	</div>

	        	<section className="flex items-center gap-y-5 py-2 pt-5 flex-col">
	  

	        		{/* Gender */}
	        		<div className="my-2 flex justify-center items-center"> 
	        			<p className="border-t-2 text-black border-white rounded bg-gray-100 font-bold px-2 rounded-sm p-1 mr-1"> Gender : </p> 
	        			
	        			<label className="ml-2">
	        				<input value="male" checked={gender === 'male'} onChange={handleGender} type="radio" className="mr-1"/>
	        				Male
	        			</label>

	        			<label className="ml-2">
	        				<input value="female" checked={gender === 'female'} onChange={handleGender} type="radio" className="mr-1"/>
	        				Female
	        			</label>


	        		</div>


	        		{/* Who are you*/}
	        		<div className="flex flex-wrap  justify-center items-center">
	        			<p className="bg-gray-100 rounded font-bold border-t-2 border-white px-2 rounded-sm text-black p-1 mr-1">Who Are You : </p> 
	        			
	        			<label className="ml-2">
	        				<input  value="lecturer" checked={userType === 'lecturer'} onChange={handleST} type="radio" className="mr-1"/>
	        				Lecturer
	        			</label>

	        			<label  className="ml-2">
	        				<input  value="student" checked={userType === 'student'} onChange={handleST}  type="radio" className="mr-1"/>
	        				Student
	        			</label>	

	        			<label  className="ml-2">
	        				<input  value="course rep" checked={userType === 'course rep'} onChange={handleST}  type="radio" className="mr-1"/>
	        				Course Rep
	        			</label>

	        			<label  className="ml-2">
	        				<input  value="aspirant" checked={userType === 'aspirant'} onChange={handleST}  type="radio" className="mr-1"/>
	        				Aspirant
	        			</label>			
	        		</div>


	        		{/*<Link to='/home' className="w-[60%]">*/}
	        		<div className="w-[60%]">
	        		<button onClick={GoogleSignIn} className="mt-4 py-4 w-full border-2 text-black border-gray-600 text-[17px] bg-green-300"> Sign In </button>
	        		{/*</Link>*/}
					</div>
	        		<div> </div>

	        	</section>
	        		
        	
        		
        	</section>

        </main>
    );
};


export default AuthScreen;
