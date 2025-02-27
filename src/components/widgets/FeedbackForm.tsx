// Currently not in use

'use client'
import React, { useState } from "react";

interface FormValues {
  name: string;
  number: string;
  motherhoodStage: string;
  gender: string;
  baby1_name: string;
  baby2_name: string;
  twins_info: string;
  birthdate: string;
  delivery: string;
  postpartum_workout: string;
  feeding: string;
  solids: string;
  baby1_birth_weight: string;
  baby2_birth_weight: string;
  born_term: string;
  weeks_preterm: string;
  country: string;
  city: string;
}

const Form: React.FC = () => {
  const [formStep, setFormStep] = useState<number>(0);
  const [values, setValues] = useState<FormValues>({
    name: "",
    number: "", 
    motherhoodStage: "",
    gender: "",
    baby1_name: "",
    baby2_name: "",
    twins_info: "",
    birthdate: "",
    delivery: "",
    postpartum_workout: "",
    feeding: "",
    solids: "",
    baby1_birth_weight: "",
    baby2_birth_weight: "",
    born_term: "",
    weeks_preterm: "",
    country: "",
    city: "",
  });
    console.log(values);
    console.log(formStep);
  const completeFormStep = () => {
    setFormStep((curr) => curr + 1);
  };

  const renderButton = () => {
    if (formStep > 13) {
      return undefined;
    } else if (formStep === 13) {
      return (
        <button
          type="submit"
          className="mt-6 bg-primary-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-primary-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Ok
        </button>
      );
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission
    console.log("submited");
    window.alert(JSON.stringify(values, null, 2));
    completeFormStep();
  };
  return (
    <div className="min-h-screen bg-primary-800 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-primary-600 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-3xl font-semibold">
          Feedback Form
        </h1>
        
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="progressbar w-[100%] h-1 ">
          <div
            className="bg-yellow-500 h-1"
            style={{
              width:
                formStep === 0
                  ? "7.6%"
                  : formStep === 1
                  ? "15.2%"
                  : formStep === 2
                  ? "22.8%"
                  : formStep === 3
                  ? "30.4%"
                  : formStep === 4
                  ? "38%"
                  : formStep === 5
                  ? "45.6%"
                  : formStep === 6
                  ? "53.2%"
                  : formStep === 7
                  ? "60.8%"
                  : formStep === 8
                  ? "68.4"
                  : formStep === 9
                  ? "76%"
                  : formStep === 10
                  ? "83.6%"
                  : formStep === 11
                  ? "92%"
                  : formStep === 12
                  ? "100%"
                  : "0%",
            }}
          ></div>
        </div>
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit}>
            {formStep >= 0 && (
                <section className={formStep === 0? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Dear Babynama Parent,
                        <br/>
                        Please help us with your name in order to proceed
                    </h2>
                    <input 
                        type = "text"
                        id="name"
                        name="name"
                        className="text-input"
                        onChange={(e)=>setValues({...values, name:e.target.value})}
                        required
                    /> 
                </section>
            )}
            {formStep >= 1 && (
                <section className={formStep === 1? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        
                        {values.name} kindly enter your WhatsApp Number
                    </h2>
                    <input 
                        type = "text"
                        id="number"
                        name="number"
                        className="text-input"
                        onChange={(e)=>setValues({...values, number:e.target.value})}
                        required
                    /> 
                </section>
            )}
            {formStep >= 2 && (
                <section className={formStep === 2? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Thank you! Please tell us what stage of motherhood are you at?
                    </h2>
                    <input             
                    type="radio"
                    id="firstTime"
                    name="motherhoodStage"
                    value="firstTime"         
                    onChange={(e)=>setValues({...values, motherhoodStage:e.target.value})}
                    />
                              
                    <label htmlFor="firstTime">First Time Parent</label>
                  <br />
                  <input             
                    type="radio"
                    id="hadBaby"
                    name="motherhoodStage"
                    value="hadBaby"         
                    onChange={(e)=>setValues({...values, motherhoodStage:e.target.value})}
                    />
                              
                    <label htmlFor="hadBaby">I have had baby before</label>
                </section>
            )}
            {formStep >= 3 && (
                <section className={formStep === 3? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Thank you. Please tell us your youngest baby gender
                    </h2>
                    <input             
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"         
                    onChange={(e)=>setValues({...values, gender:e.target.value})}
                    />
                              
                    <label htmlFor="male">Male</label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e)=>setValues({...values, gender:e.target.value})}
                  />
                  <label htmlFor="female">Female</label>
                  <br />
                  <input
                    type="radio"
                    id="Twins"
                    name="gender"
                    value="twins"
                    onChange={(e)=>setValues({...values, gender:e.target.value})}
                  />
                  <label htmlFor="twins">Twins</label>
                  
                </section>
            )}
            {values.gender!=="twins" && formStep >= 4 && (
                <section className={values.gender!=="twins" && formStep === 4? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Please tell your baby name
                    </h2>
                    <input             
                    type="text"
                    id="baby1_name"
                    name="baby1_name"       
                    onChange={(e)=>setValues({...values, baby1_name:e.target.value})}
                    />
                </section>
            )}
            {values.gender==="twins" && formStep >= 4 && (
                <section className={values.gender==="twins" && formStep === 4? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Please tell us some info about your twins
                    </h2>
                    <textarea            
                    id="twins_info"
                    name="twins_info"       
                    onChange={(e)=>setValues({...values, twins_info:e.target.value})}
                    />
                    <h2 className=" text-lg mb-8">
                        Please tell us your first baby name
                    </h2>
                    <input
                    type="text"           
                    id="baby1_name"
                    name="baby1_name"       
                    onChange={(e)=>setValues({...values, baby1_name:e.target.value})}
                    />
                    <h2 className=" text-lg mb-8">
                        Please tell us your second baby name
                    </h2>
                    <input
                    type="text"           
                    id="baby2_name"
                    name="baby2_name"       
                    onChange={(e)=>setValues({...values, baby2_name:e.target.value})}
                    />
                </section>
            )}
            {formStep >= 5 && (
                <section className={formStep === 5? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Please tell us your baby birth date
                    </h2>
                    <input
                    type="date"           
                    id="birthdate"
                    name="birthdate"       
                    onChange={(e)=>setValues({...values, birthdate:e.target.value})}
                    />
                    
                </section>
            )}
            {formStep >= 6 && (
                <section className={formStep === 6? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Did you have a normal delivery or a c-section delivery?
                    </h2>
                    <input             
                    type="radio"
                    id="normal"
                    name="delivery"
                    value="normal"         
                    onChange={(e)=>setValues({...values, delivery:e.target.value})}
                    />
                              
                    <label htmlFor="male">Normal Delivery</label>
                  <br />
                  <input
                    type="radio"
                    id="c-section"
                    name="delivery"
                    value="c-section"
                    onChange={(e)=>setValues({...values, delivery:e.target.value})}
                  />
                  <label htmlFor="female">C-section Delivery</label>
                </section>
            )}
            {formStep >= 7 && (
                <section className={formStep === 7? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Have you started or are planning to start postpartum workout?
                    </h2>
                    <input             
                    type="radio"
                    id="started"
                    name="postpartum_workout"
                    value="started"         
                    onChange={(e)=>setValues({...values, postpartum_workout:e.target.value})}
                    />
                              
                    <label htmlFor="started">I have started postpartum workout</label>
                  <br />
                  <input
                    type="radio"
                    id="planning"
                    name="postpartum_workout"
                    value="planning"
                    onChange={(e)=>setValues({...values, postpartum_workout:e.target.value})}
                  />
                  <label htmlFor="planning">I am planning to start postpartum workout</label>
                </section>
            )}
            {formStep >= 8 && (
                <section className={formStep === 8? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        How are you feeding your baby?
                    </h2>
                    <input             
                    type="radio"
                    id="Breastfeeding"
                    name="feeding"
                    value="Breastfeeding"         
                    onChange={(e)=>setValues({...values, feeding:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">Exclusive Breastfeeding</label>
                  <br />
                  <input             
                    type="radio"
                    id="formula"
                    name="feeding"
                    value="formula"         
                    onChange={(e)=>setValues({...values, feeding:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">Exclusive Formula</label>
                    <br/>
                    <input             
                    type="radio"
                    id="formula+breastfeeding"
                    name="feeding"
                    value="formula+breastfeeding"         
                    onChange={(e)=>setValues({...values, feeding:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">Exclusive Formula + Breastfeeding</label>
                </section>
            )}
            {formStep >= 9 && (
                <section className={formStep === 9? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        {values.name} You must have started solids for your baby. Are you facing any issues with this yet?
                    </h2>
                    <input             
                    type="radio"
                    id="not_started"
                    name="solids"
                    value="not_started"         
                    onChange={(e)=>setValues({...values, solids:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">I have not started solids yet.</label>
                  <br />
                  <input             
                    type="radio"
                    id="facing_issues"
                    name="solids"
                    value="facing_issues"         
                    onChange={(e)=>setValues({...values, solids:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">I am facing issues with solids</label>
                  <br />
                    <input             
                    type="radio"
                    id="started"
                    name="solids"
                    value="started"         
                    onChange={(e)=>setValues({...values, solids:e.target.value})}
                    />
                              
                    <label htmlFor="Breastfeeding">I am able to feed solids without any issues</label>
                  <br />
                </section>
            )}
            {values.gender!=="twins" && formStep >= 10 && (
                <section className={values.gender!=="twins" && formStep === 10? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Tell us about {values.baby1_name} birth weight (In Grams)
                    </h2>
                    <input             
                    type="text"
                    id="baby1_name"
                    name="baby1_name"       
                    onChange={(e)=>setValues({...values, baby1_birth_weight:e.target.value})}
                    />
                </section>
            )}
            {values.gender==="twins" && formStep >= 10 && (
                <section className={values.gender==="twins" && formStep === 10? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Tell us about {values.baby1_name} birth weight (In Grams)
                    </h2>
                    <input             
                    type="text"
                    id="baby1_weight"
                    name="baby1_weight"       
                    onChange={(e)=>setValues({...values, baby1_birth_weight:e.target.value})}
                    />
                    <h2 className=" text-lg mb-8">
                        Tell us about {values.baby2_name} birth weight (In Grams)
                    </h2>
                    <input             
                    type="text"
                    id="baby2_weight"
                    name="baby2_weight"       
                    onChange={(e)=>setValues({...values, baby2_birth_weight:e.target.value})}
                    />
                </section>
            )}
            {formStep >= 11 && (
                <section className={formStep === 11? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Were your baby (babies) born at full term, or pre-term?
                    </h2>
                    <input             
                    type="radio"
                    id="preterm"
                    name="term"
                    value="preterm"         
                    onChange={(e)=>setValues({...values, born_term:e.target.value})}
                    />
                              
                    <label htmlFor="term">Pre term</label>
                  <br />
                  <input             
                    type="radio"
                    id="fullterm"
                    name="term"
                    value="fullterm"         
                    onChange={(e)=>setValues({...values, born_term:e.target.value})}
                    />
                              
                    <label htmlFor="term">Full term</label>
                </section>
            )}
            {formStep >= 11 && values.born_term === "preterm" && (
                <section className={formStep === 11? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        How many weeks pre-term were they born?
                    </h2>
                    <input             
                    type="text"
                    id="weeks_preterm"
                    name="weeks_preterm"    
                    onChange={(e)=>setValues({...values, weeks_preterm:e.target.value})}
                    />
                </section>
            )}
            {formStep >= 12 && (
                <section className={(formStep === 12)? "block":"hidden"}>
                    <h2 className=" text-lg mb-8">
                        Please choose your country from the dropdown below.
                    </h2>
                    <input             
                    type="text"
                    id="country"
                    name="country"    
                    onChange={(e)=>setValues({...values, country:e.target.value})}
                    />
                    <h2 className=" text-lg mb-8">
                        Please tell us about your city name below.
                    </h2>
                    <input             
                    type="text"
                    id="city"
                    name="city"    
                    onChange={(e)=>setValues({...values, city:e.target.value})}
                    />
                </section>
            )}
            {formStep>=13 && (<div>
              <h1>Thank you!</h1>
              <p>Your form has been submitted successfully</p>
              </div>)
            }
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
