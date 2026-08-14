import React, { useState } from "react";

function Student() {
  //   const [studentDetails, setStudentDetails] = useState({
  //     // Personal
  //     firstName: "Piyush",
  //     lastName: "Raj",
  //     fathersName: "Bishwa Prakash Lal",
  //     mothersName: "Indu Karn",
  //     DOB: "16-10-2004",
  //     gender: "Male",
  //     bloodGroup: "B+",

  //     // Contact
  //     mobileNo: "7979919112",
  //     mailId: "piyushraj.java@gmail.com",
  //     address: "Bangalore",
  //     line1: "BTM Layout",
  //     line2: "2nd Stage",
  //     country: "India",
  //     state: "Karnataka",
  //     pinCode: "560076",

  //     // Education
  //     highestDegree: "B.Tech",
  //     stream: "CS",
  //     ifOther: "",
  //     YOP: "2026",
  //     university: "Arya College of Engineering",
  //     percentage: "75",

  //     // Placement
  //     skills: ["HTML", "CSS", "JavaScript", "ReactJS"],

  //     domain: "Development",

  //     placeOfPreference: ["Bangalore", "Pune", "Delhi"],

  //     expectedSalary: "16-50 LPA",

  //     // Create Account
  //     userName: "piyushraj",
  //     password: "12345678",
  //     reEnterPassword: "12345678",
  //     termsAndCondition: true,
  //   });
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    mothersName: "",
    DOB: "",
    gender: "",
    bloodGroup: "",

    mobileNo: "",
    mailId: "",
    address: "",
    line1: "",
    line2: "",
    country: "",
    state: "",
    pinCode: "",

    highestDegree: "",
    stream: "",
    ifOther: "",
    YOP: "",
    university: "",
    percentage: "",

    domain: "",
    placeOfPreference: "",
    expectedSalary: "",

    userName: "",
    password: "",
    reEnterPassword: "",
    termsAndCondition: false,
  });
  const [skills, setSkills] = useState([]);
  const handleStudentInput = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };
  const handleForm = (e) => {
    alert(`Form Submitted`);
    e.preventDefault();
    const studentData = {
      name: studentDetails.firstName,
      email: studentDetails.email,
      phone: studentDetails.phone,
      age: studentDetails.age,
      gender: studentDetails.gender,
      address: studentDetails.address,
      city: studentDetails.city,
      state: studentDetails.state,
      pincode: studentDetails.pincode,
      course: studentDetails.course,
      college: studentDetails.college,
    };
    localStorage.setItem("user1", JSON.stringify(studentDetails));
  };

  return (
    <div>
      <form onSubmit={handleForm} className="student-form">
        <h2>Student Details</h2>
        {/* ================= PERSONAL ================= */}
        <h3>Personal</h3>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={studentDetails.firstName}
          onChange={handleStudentInput}
          placeholder="Enter First Name"
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={studentDetails.lastName}
          onChange={handleStudentInput}
          placeholder="Enter Last Name"
        />
        <br />
        <label>Father's Name:</label>
        <input
          type="text"
          name="fathersName"
          value={studentDetails.fathersName}
          onChange={handleStudentInput}
          placeholder="Enter Father's Name"
        />
        <br />
        <label>Mother's Name:</label>
        <input
          type="text"
          name="mothersName"
          value={studentDetails.mothersName}
          onChange={handleStudentInput}
          placeholder="Enter Mother's Name"
        />
        <br />
        <label>DOB:</label>
        <input
          type="date"
          name="DOB"
          value={studentDetails.DOB}
          onChange={handleStudentInput}
        />
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={studentDetails.gender === "Male"}
          onChange={handleStudentInput}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={studentDetails.gender === "Female"}
          onChange={handleStudentInput}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Others"
          checked={studentDetails.gender === "Others"}
          onChange={handleStudentInput}
        />
        Others
        <br />
        <label>Blood Group:</label>
        <select
          name="bloodGroup"
          value={studentDetails.bloodGroup}
          onChange={handleStudentInput}
        >
          <option value="">-- Choose --</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        {/* ================= CONTACT ================= */}
        <h3>Contact</h3>
        <label>Mobile No:</label>
        <input
          type="tel"
          name="mobileNo"
          value={studentDetails.mobileNo}
          onChange={handleStudentInput}
          placeholder="Enter Mobile Number"
        />
        <br />
        <label>Mail ID:</label>
        <input
          type="email"
          name="mailId"
          value={studentDetails.mailId}
          onChange={handleStudentInput}
          placeholder="Enter Email"
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={studentDetails.address}
          onChange={handleStudentInput}
          placeholder="Enter Address"
        />
        <br />
        <label>Line 1:</label>
        <input
          type="text"
          name="line1"
          value={studentDetails.line1}
          onChange={handleStudentInput}
          placeholder="Enter Address Line 1"
        />
        <br />
        <label>Line 2:</label>
        <input
          type="text"
          name="line2"
          value={studentDetails.line2}
          onChange={handleStudentInput}
          placeholder="Enter Address Line 2"
        />
        <br />
        <label>Country:</label>
        <select
          name="country"
          value={studentDetails.country}
          onChange={handleStudentInput}
        >
          <option value="">-- Choose Country --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <label>State:</label>
        <select
          name="state"
          value={studentDetails.state}
          onChange={handleStudentInput}
        >
          <option value="">-- Choose State --</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Bihar">Bihar</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
        <br />
        <label>Pin Code:</label>
        <input
          type="text"
          name="pinCode"
          value={studentDetails.pinCode}
          onChange={handleStudentInput}
          placeholder="Enter Pin Code"
        />
        {/* ================= EDUCATION ================= */}
        <h3>Education</h3>
        <label>Highest Degree:</label>
        <select
          name="highestDegree"
          value={studentDetails.highestDegree}
          onChange={handleStudentInput}
        >
          <option value="">-- Choose --</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
        <br />
        <label>Stream:</label>
        <input
          type="radio"
          name="stream"
          value="Mech"
          checked={studentDetails.stream === "Mech"}
          onChange={handleStudentInput}
        />
        Mech
        <input
          type="radio"
          name="stream"
          value="Civil"
          checked={studentDetails.stream === "Civil"}
          onChange={handleStudentInput}
        />
        Civil
        <input
          type="radio"
          name="stream"
          value="CS"
          checked={studentDetails.stream === "CS"}
          onChange={handleStudentInput}
        />
        CS
        <input
          type="radio"
          name="stream"
          value="EC"
          checked={studentDetails.stream === "EC"}
          onChange={handleStudentInput}
        />
        EC
        <input
          type="radio"
          name="stream"
          value="IT"
          checked={studentDetails.stream === "IT"}
          onChange={handleStudentInput}
        />
        IT
        <input
          type="radio"
          name="stream"
          value="EEE"
          checked={studentDetails.stream === "EEE"}
          onChange={handleStudentInput}
        />
        EEE
        <br />
        <label>If Other:</label>
        <input
          type="text"
          name="ifOther"
          value={studentDetails.ifOther}
          onChange={handleStudentInput}
          placeholder="Enter Other Stream"
        />
        <br />
        <label>YOP:</label>
        <select
          name="YOP"
          value={studentDetails.YOP}
          onChange={handleStudentInput}
        >
          <option value="">-- Choose Year --</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
        <br />
        <label>University:</label>
        <input
          type="text"
          name="university"
          value={studentDetails.university}
          onChange={handleStudentInput}
          placeholder="Enter University"
        />
        <br />
        <label>Percentage:</label>
        <input
          type="number"
          name="percentage"
          value={studentDetails.percentage}
          onChange={handleStudentInput}
          placeholder="Enter Percentage"
        />
        {/* ================= PLACEMENT ================= */}
        <h3>Placement</h3>
        <label>Skills:</label>
        <input
          type="checkbox"
          value="HTML"
          checked={skills.includes("HTML")}
          onChange={handleSkillChange}
        />
        HTML
        <input
          type="checkbox"
          value="CSS"
          checked={skills.includes("CSS")}
          onChange={handleSkillChange}
        />
        CSS
        <input
          type="checkbox"
          value="JavaScript"
          checked={skills.includes("JavaScript")}
          onChange={handleSkillChange}
        />
        JavaScript
        <input
          type="checkbox"
          value="ReactJS"
          checked={skills.includes("ReactJS")}
          onChange={handleSkillChange}
        />
        ReactJS
        <br />
        <input
          type="checkbox"
          value="React Native"
          checked={skills.includes("React Native")}
          onChange={handleSkillChange}
        />
        React Native
        <input
          type="checkbox"
          value="Tailwind"
          checked={skills.includes("Tailwind")}
          onChange={handleSkillChange}
        />
        Tailwind
        <input
          type="checkbox"
          value="NodeJS"
          checked={skills.includes("NodeJS")}
          onChange={handleSkillChange}
        />
        NodeJS
        <br />
        <label>Domain:</label>
        <input
          type="radio"
          name="domain"
          value="Devops"
          checked={studentDetails.domain === "Devops"}
          onChange={handleStudentInput}
        />
        Devops
        <input
          type="radio"
          name="domain"
          value="Testing"
          checked={studentDetails.domain === "Testing"}
          onChange={handleStudentInput}
        />
        Testing
        <input
          type="radio"
          name="domain"
          value="Dev"
          checked={studentDetails.domain === "Dev"}
          onChange={handleStudentInput}
        />
        Dev
        <input
          type="radio"
          name="domain"
          value="Support"
          checked={studentDetails.domain === "Support"}
          onChange={handleStudentInput}
        />
        Support
        <br />
        <label>Place of Preference:</label>
        <input
          type="radio"
          name="placeOfPreference"
          value="Hyderabad"
          checked={studentDetails.placeOfPreference === "Hyderabad"}
          onChange={handleStudentInput}
        />
        Hyderabad
        <input
          type="radio"
          name="placeOfPreference"
          value="Pune"
          checked={studentDetails.placeOfPreference === "Pune"}
          onChange={handleStudentInput}
        />
        Pune
        <input
          type="radio"
          name="placeOfPreference"
          value="Delhi"
          checked={studentDetails.placeOfPreference === "Delhi"}
          onChange={handleStudentInput}
        />
        Delhi
        <input
          type="radio"
          name="placeOfPreference"
          value="Pan India"
          checked={studentDetails.placeOfPreference === "Pan India"}
          onChange={handleStudentInput}
        />
        Pan India
        <br />
        <input
          type="radio"
          name="placeOfPreference"
          value="Bangalore"
          checked={studentDetails.placeOfPreference === "Bangalore"}
          onChange={handleStudentInput}
        />
        Bangalore
        <input
          type="radio"
          name="placeOfPreference"
          value="Chennai"
          checked={studentDetails.placeOfPreference === "Chennai"}
          onChange={handleStudentInput}
        />
        Chennai
        <br />
        <label>Expected Salary:</label>
        <input
          type="radio"
          name="expectedSalary"
          value="Less than 3 LPA"
          checked={studentDetails.expectedSalary === "Less than 3 LPA"}
          onChange={handleStudentInput}
        />
        Less than 3 LPA
        <input
          type="radio"
          name="expectedSalary"
          value="3-6 LPA"
          checked={studentDetails.expectedSalary === "3-6 LPA"}
          onChange={handleStudentInput}
        />
        3-6 LPA
        <input
          type="radio"
          name="expectedSalary"
          value="6-10 LPA"
          checked={studentDetails.expectedSalary === "6-10 LPA"}
          onChange={handleStudentInput}
        />
        6-10 LPA
        <input
          type="radio"
          name="expectedSalary"
          value="More than 10 LPA"
          checked={studentDetails.expectedSalary === "More than 10 LPA"}
          onChange={handleStudentInput}
        />
        More than 10 LPA
        <input
          type="radio"
          name="expectedSalary"
          value="No Expectation"
          checked={studentDetails.expectedSalary === "No Expectation"}
          onChange={handleStudentInput}
        />
        No Expectation
        {/* ================= CREATE ACCOUNT ================= */}
        <h3>Create Account</h3>
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          value={studentDetails.userName}
          onChange={handleStudentInput}
          placeholder="Enter Username"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={studentDetails.password}
          onChange={handleStudentInput}
          placeholder="Enter Password"
        />
        <br />
        <label>Re-Enter Password:</label>
        <input
          type="password"
          name="reEnterPassword"
          value={studentDetails.reEnterPassword}
          onChange={handleStudentInput}
          placeholder="Re-enter Password"
        />
        <br />
        <input
          type="checkbox"
          name="termsAndCondition"
          checked={studentDetails.termsAndCondition}
          onChange={handleStudentInput}
        />
        Agree Terms & Conditions
        <br />
        <br />
        <button type="submit" onClick={handleForm}>
          Submit
        </button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Student;
