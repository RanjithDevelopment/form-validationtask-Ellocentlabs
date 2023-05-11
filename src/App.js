import "./css/formstyles.css";
import React, { useState } from "react";
function App() {
  let formValues = {

    name: "",
    email: "",
   countryCode: "",
    phone: "",
   gender: "",
  password: "",
  confirmPassword:"",
    error: {
      name: "",
      email: "",
     countryCode: "",
      phone: "",
     gender: "",
    password: "",
    confirmPassword:""
    }
};
const [formData, setFormData] = useState(formValues);
const [errors, setErrors] = useState({});
//to handle Form Values 
const handleChange = (e) => {
    let error = { ...formData.error };
    if (e.target.value === "") {
        error[e.target.name] = `${e.target.name} is Required`;
    } else {
        error[e.target.name] = "";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value, error });

};

const handleSubmit = (e)=>{
  let error = {};
e.preventDefault();

if (formData.name.length < 3 || formData.name.length > 15 || !/^[a-zA-Z]+$/.test(formData.name)){
error.name="name should contain only letters and length would be 3 to 15";
}

if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))

error.email="Not a valid email";

const phoneRegex =/^\d{10}$/;
if (!phoneRegex .test(formData.phone)){
  error.phone="Not a valid Phone number"
}
if(!['Male','Female','others'].includes(formData.gender)){
  error.gender="gender is Not Entered";
}
const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,15}$/;
if(!passwordFormat.test(formData.password)){
  error.password="Password should be 6 to 15 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character."

}
if( formData.password !== formData.confirmPassword){
  error.confirmPassword= "Password doesn't match"
}
console.log(formData);
alert("All The Data Is valid")
setErrors(error);
setFormData(formValues);
}



  return (
    <>
              <h1>Form Validation Task</h1>
            <form onSubmit={handleSubmit} >
              
                <label>Name</label>
                <input type="text" value={formData.name} name="name" onChange={(e) => handleChange(e)} />
                <span style={{ color: "red" }}>{formData.error.name}</span>
                 <span className="error" style={{ color: "red" }}>{errors.name}</span>
                <label>Email</label>
                <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
                <span style={{ color: "red" }}>{formData.error.email}</span>
                <span className="error" style={{ color: "red" }}>{errors.email}</span>
                <label>Phone</label>
                <select value={formData.countryCode} name="countryCode" onChange={(e) => handleChange(e)}>
                  <option  value=''>Select the country code here</option>
                  <option value="US">US (+1)</option>
                  <option value="UK">UK (+44)</option>
                  <option value="INDIA">IND (+91)</option>
                </select>
                <span style={{ color: "red" }}>{formData.error.countryCode}</span>
                <input type="number" name="phone" value={formData.phone} onChange={(e) => handleChange(e)} />
                <span style={{ color: "red" }}>{formData.error.phone}</span>
                <span className="error" style={{ color: "red" }}>{errors.phone}</span>
              <div>
                <label>gender</label>
                <br />

                <input type='radio' value='Male' name="gender" onClick={(e) => handleChange(e)} />
                <label>Male</label>
                <br />

                <input type='radio' value='Female' name="gender" onClick={(e) => handleChange(e)} />
                <label>Female</label>
                <br />

                <input type='radio' value='Others' name="gender" onClick={(e) => handleChange(e)} />
                <label>Others</label>
                <span style={{ color: "red" }}>{formData.error.gender}</span>
                <span className="error" style={{ color: "red" }}>{errors.gender}</span>
                </div>
                <label>Password</label>
                <input type='password' value={formData.password} name="password" onChange={(e) => handleChange(e)} />
                <span style={{ color: "red" }}>{formData.error.gender}</span>
                <span className="error" style={{ color: "red" }}>{errors.password}</span>
                <label>Confrim Password</label>
                <input type='password' value={formData.confirmPassword} name="confirmPassword" onChange={(e) => handleChange(e)} />
                <span style={{ color: "red" }}>{formData.error.confirmPassword}</span>
                <span className="error" style={{ color: "red" }}>{errors.confirmPassword}</span> 
 <button className="btn" type="submit">Submit </button>
            </form>



    </>

  );
}

export default App;
