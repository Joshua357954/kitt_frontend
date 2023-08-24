import React, { useState, useEffect } from 'react';
// school
import { universities } from '../School/school_data.js'
import { allCourses } from '../School/courses.js'

import { Link, redirect } from 'react-router-dom'
import { firebaseConfig } from "../firebase/key.js"
import bgImage from '../assets/images/serious-girl (1).jpg'
// redux
import { updateProfile } from '../redux/slice/userSlice.js'
import { useDispatch, useSelector } from 'react-redux'
// firebase auth
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Service 
import { getOrCreateUser } from '../service/UserService.js'

function Dropdown ({name,options,value,onChange}) {

	// const dispatch = useDispatch()

	return (
		<div className="inline-block relative">
			
			<select name={name} value={value} onChange={onChange} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">

		      {options?.map((option,index) => (
		        <option key={index} value={option}>
		          {option}
		        </option>
		      ))}

			</select>
			
			<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
			    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12L15 7 5 7z"/></svg>
			</div>

		</div>
	)
}

const AuthScreen = () => {
	const vals = {
					name: '',
					email: '',
					gender: '',
					picture: '',
					schoolName: '',
					course: '',
					userType:''
				}
	const dispatch = useDispatch()

	const { user } = useSelector(state => state.user)

	const [gender,setGender] = useState('')
	const [userType,setUserType] = useState('')
	const [school,setSchool] = useState({school:"",country:"",cousrse:""})
	// const [course,setCourse] = useState('')
	
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

	const handleDropdown = (event) => {
		const { name, value } = event.target;
	    setSchool((prevSchool) => ({
	       ...prevSchool,
	      [name]: value
	    }));
	}



	
	// Function to get universities of a specific country
	function getUniversities() {
	  return Object.keys(universities) || [];
	}

	// courses
	function getCourses() {
		const schoolCourses = {};
		for (const faculty in allCourses) {
			schoolCourses[faculty] = allCourses[faculty];
		}
		return schoolCourses;
	}

	function getUniByCountry (country) {
		return universities[country]
	}

	function preSignin (userData) {
			return {
					name: userData.displayName,
					email: userData.email,
					gender,
					picture: userData.pic,
					schoolName: school.school,
					course: school.cousrse,
					userType
				}
	}

	async function postSignIn (data)  {
		return await getOrCreateUser(data)
	}


	// G Sign Function
	function GoogleSignIn () {

		// check for validity
		if(!gender || !userType)
			return alert("Fill in the missing fields") 

		// const preSigninData = preSignin()

		signInWithPopup(auth, provider)
		  	.then((result) => {	
			 	const credential = GoogleAuthProvider.credentialFromResult(result);
			    const token = credential.accessToken;
			    const guser = result.user;
			    console.log(Object.keys(guser))

			    // alert(JSON.stringify(user))

gess

			    if (guser.email) {
				    // get user data from backend and,
				    console.log("Done")

				    const preSigninData = preSignin(guser)
				    console.log('\n\n',preSigninData,'\n\n')
			    	const postSignInData = postSignIn(preSigninData)
			    	dispatch(updateProfile(preSigninData))
			    	// send the data to redux state
			    	return redirect('/home')
			    }else {
			    	console.log("An error occured 1 , Pls try again")
			    }
		  
		  }).catch((error) => {
		  		console.log("An Error Occured 2 , Please try again",error)
		  });
	}

	// useEffect(() => {
	// 	(async () => {
	// 		if (user.name)
	// 			alert(user.name)
	// 			return redirect('/')

	// 	})()
	// })

    return (
        <main className="flex w-screen h-screen border-0 border-gray-300">
        	
        	<section className={`w-0 md:w-[40%] bg-gray-200 border-r-2 border-gray-200`} >
        		<img src={bgImage} className="h-screen bg-cover  object-cover"/>
        		
        	</section>


        	<section className="Two sm:w-full md:w-[60%] bg-white overflow-auto">

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

		        	{/* Dropdowns */}
		        	<div></div>


			        <div className="flex items-center gap-x-3">
		        		<p className="bg-gray-100 rounded font-bold border-t-2 border-white px-2 rounded-sm text-black p-1 mr-1">Country : </p> 
				        <Dropdown name='country' options={getUniversities(universities)} value={school.country} onChange={handleDropdown} />
					</div>



		        	{ school.country ?
		        		
		        		<div className="flex items-center gap-x-3">
		        			<p className="bg-gray-100 rounded font-bold border-t-2 border-white px-2 rounded-sm text-black p-1 mr-1">School : </p> 
			        		<Dropdown name='school' options={getUniByCountry(school.country)} value={school.school} onChange={handleDropdown} />
					 	</div>

					 : " "}

	        		{/* Google Popup signup */}
	        		<Link to='/home' className="w-[60%]">
		        		<div className="w-[60%]">
		        		<button  className="mt-4 py-4 w-full border-2 text-black border-gray-600 text-[17px] bg-green-300"> Sign In </button>
	        			</div>
	        		</Link>

					{/*</div>*/}


	        		{/*<div> </div>*/}

	        	</section>
	        		
        	
        		
        	</section>

        </main>
    );
};


export default AuthScreen;
