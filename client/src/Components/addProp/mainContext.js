import React from 'react';
import {useState} from 'react';
import AddProperty from './addProperty';
import "./common.css";
import {useNavigate} from "react-router-dom"; 
import axios from "axios";

export const multiStepContext = React.createContext();

const StepContext = () =>{
	const [currentStep, setStep] = useState(1);
	const [userData,setUserData] = useState([]);
	const [finalData,setFinalData] = useState([]);

	const authToken = localStorage.getItem("authorization");
	const navigate = useNavigate();

	function  submitData(e) {
		// console.log(userData)
		e.preventDefault();

		if(userData.PropertyType === undefined || userData.TotalArea === undefined || userData.DaysLeft === undefined || userData.Mobile === undefined){
			alert("Enter neccessary details")
		}
		else
		{
		axios({
			url:"http://localhost:3001/addProperty/addprop",
			method:"POST",
			headers:{
				authorization: authToken
			},
			data:userData
		}).then((res)=>{
			console.log(res)
			navigate("/viewprop");
		})
		.catch((err)=>{
			navigate("/");
		})
		}
	}

	return(
		<>
			<multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}} className="step3">
				<AddProperty/>
			</multiStepContext.Provider>
		</>
	)
}

export default StepContext; 