import React from "react";
import { Bookmark } from "lucide-react";

const Cards = ({job}) => {
    const{brandLogo,companyName,datePosted,post,tag1,tag2,pay,location} = job;
  return (
    <div className="cards">
      <div className="top">
        <img
          src={brandLogo}
          alt="logo"
        />
        <button>
          Save <Bookmark />
        </button>
      </div>

      <div className="center">
        <div className="company">
          <h3>{companyName}</h3>
          <span>{datePosted}</span>
        </div>
        <h2>{post}</h2>
        <div className="tag">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
