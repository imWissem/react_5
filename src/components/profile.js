import React from 'react';


const Profile =(props)=>{
 const{fullName, bio, profession, img}=props;
    return(
     <div className="Profile" >
      <img className= "image" src={img} alt ="image"/>
      <p style={{fontSize:"25px"}}>{fullName}</p>
      <p style={{fontSize:"20px"}} >{profession}</p>
      <p style={{fontSize:"15px"}} >{bio}</p>
      </div> 
      
    )
}
export default Profile;