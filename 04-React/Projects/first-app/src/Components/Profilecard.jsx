import React from 'react'


const userInfo = {
    image : "src",
    name : "Piyush Raj",
    desg : "Java Full Stack Developer",
    contact : 7979919112,
    bloodGrp : "B+"
}
function Profilecard() {
  return (
    <div className='profile-card'>
      <img src="https://i.pinimg.com/736x/52/80/fe/5280fe0369d5f693c43c04e48de68a4b.jpg" alt="img of thalaiva" />
        <h1>{userInfo.name}</h1>
        <h2>{userInfo.desg}</h2>
        <h3>{userInfo.contact}</h3>
        <h4>{userInfo.bloodGrp}</h4>
    </div>
  )
}

export default Profilecard