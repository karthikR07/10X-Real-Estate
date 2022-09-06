import "./common.css";
import React, {useContext} from 'react';
import { multiStepContext } from "./mainContext";



const LocationInfo = () => {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    //console.log(userData);

    return (
        <>

        <div className="BasicInfo">
            <div className="PT">
                <div >
                    <label className="inputtxt">Email</label>
                    <div >    
                    <input className="property" placeholder="Email" value={userData['Email']} onChange={(e)=>setUserData({...userData,"Email":e.target.value})}></input>
                    </div>
                </div>

                <div  className="divide">

                    <label className="inputtxt">City</label>

                    <div>
                        <select type="text" className="property" value={userData['City']} onChange={(e)=>setUserData({...userData,"City":e.target.value})}>
                        <option >Select City</option>
                            <option>Chennai</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                        </select>
                    </div>

                </div>
            </div>


            <div className="PT">
                <div> 

                    <label className="inputtxt">Area</label>

                    <div>
                    <select type="text" className="property" value={userData['Area']} onChange={(e)=>setUserData({...userData,"Area":e.target.value})}>
                        <option >Select Area</option>
                            <option>sector1</option>
                            <option>sector2</option>
                            <option>sector3</option>
                            <option>sector4</option>
                        </select>
                    </div>

                </div>


                <div className="divide">

                    <label className="inputtxt">Pincode</label>


                    <div >
                        <select className="property" value={userData['Pincode']} onChange={(e)=>setUserData({...userData,"Pincode":e.target.value})}>
                        <option>Select Pincode</option>
                            <option>625001</option>
                            <option>600001</option>
                            <option>672562</option>
                            <option>728881</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="PT">

                <div >

                    <label className="inputtxt">Address</label>


                    <div >
                    <input className="property" placeholder="Address" value={userData['Address']} onChange={(e)=>setUserData({...userData,"Address":e.target.value})}></input>
                    </div>
                </div>
                <div className="divide">

                    <label className="inputtxt">Landmark</label>


                    <div >
                    <input className="property" placeholder="Landmark" value={userData['Landmark']} onChange={(e)=>setUserData({...userData,"Landmark":e.target.value})}></input>
                    </div>

                </div>


            </div>

            <div className="PT">


                <div >

                    <label className="inputtxt" >Latitude</label>


                    <div>
                        <input className="property" placeholder="Latitude" value={userData['Latitude']} onChange={(e)=>setUserData({...userData,"Latitude":e.target.value})}></input>
                    </div>
                </div>
                <div className="divide">
                    <label className="inputtxt">Longitude</label>
                      
                      <div>
                    <input className="property" placeholder="Longitude" value={userData['Longitude']} onChange={(e)=>setUserData({...userData,"Longitude":e.target.value})}></input>
                    </div>
                </div>

            </div>

            <div className="basicbtns">
                <div>
                    <button className="cancelbtn" onClick={()=>setStep(3)} type="submit" >Previous</button>
                </div>
                <div>
                    <button className="savebtn" onClick={submitData} type="submit" >Add Property</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default LocationInfo;