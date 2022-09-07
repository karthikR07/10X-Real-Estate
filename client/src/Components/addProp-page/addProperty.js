import React, {useContext} from 'react';
import {Stepper, StepLabel, Step} from "@material-ui/core";
import BasicInfo from './basicInfo';
import PropertyDetails from './propDetails';
import GeneralInfo from './generalInfo';
import LocationInfo from './locationInfo';
import Header from "../header";
import SideContent from "../sideContent"
import "./common.css";
import { multiStepContext } from './mainContext';

const AddProperty = () => {	
	const {currentStep, finalData} = useContext(multiStepContext);

	function showStep(step){
		switch(step){
			case 1:
			return <BasicInfo/>
			case 2:
			return <PropertyDetails/>
			case 3:
			return <GeneralInfo/>
			case 4:
			return <LocationInfo/>
		}
	}
	return(
		<div>
		<SideContent/>
		<Header/>
			<h2 className="h3">Add New Property</h2>
			<div className="steps">
			<Stepper activeStep={currentStep-1} orientation="horizontal">
				<Step className="step2">
					<StepLabel>Basic Info</StepLabel>
				</Step>
				<Step className="step1">
					<StepLabel>Property Details</StepLabel>
				</Step>
				<Step className="step1">
					<StepLabel>General Info</StepLabel>
				</Step>
				<Step className="step1">
					<StepLabel>Location Info</StepLabel>
				</Step>
			</Stepper>
			</div>
			{showStep(currentStep)}
		</div>
	)
}


export default AddProperty;