import React from "react"
const Login =()=>{
return(
<div >
  <div style={{display :"flex",justifyContent:"flex-start"}}>
    <div>Flipkart ExplorePlus</div>
    <div><input type ="text" placeholder="Search for Products,Brands and More" style={{backgroundColor:"lightgray",width:"100px"}}/></div>
    </div>
    <div style={{display :"flex",justifyContent:"flex-end"}}>
    <div>
     <p>
    <img className="profileIcon" src ="https://icons.veryicon.com/png/o/miscellaneous/1em/profile-24.png"/>
     Login
      </p>
    </div>
     <div>
     <p>
    <img className="profileIcon" src ="https://icons.veryicon.com/png/o/application/tmall-icon-library/cart-55.png"/>
     Cart
      </p>
    </div>
     <div>
     <p>
    <img className="profileIcon" src ="https://icons.veryicon.com/png/o/application/2020-hema-app-icon-library/shop-18.png"/>
     Become a seller
      </p>
    </div>
    </div>
    </div>
)
}
export default Login