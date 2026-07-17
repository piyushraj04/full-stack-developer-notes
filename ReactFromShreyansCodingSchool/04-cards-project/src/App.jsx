import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './components/Cards'
import { Heading1 } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const jobOpenings = [
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/Google-Logo-1-768x432.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo-768x432.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x432.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo-768x251.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Java Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1-768x432.png",
    companyName: "Oracle",
    datePosted: "6 days ago",
    post: "Java Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/05/IBM-logo-768x432.png",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2022/02/NVIDIA_logo-768x432.png",
    companyName: "NVIDIA",
    datePosted: "12 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Santa Clara, USA",
  },
];
// console.log(jobOpenings);

  // arr.map(function(ele){
  //       console.log(ele);
        
  //     })


  return (
     <div className='parent'>
      {jobOpenings.map(function(el,ind){
        return <div key={ind}>
          <Cards job = {el} />
          </div>;
      })}

      
     {/* <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/> */}

     
     </div>
  )
}

export default App
