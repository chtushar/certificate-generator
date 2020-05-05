import React, {useState} from 'react';
import FormUserDetails from './FormUserDetails';
import Events from './Events';

function UserForm(){
  
    const [step, setStep] = useState(0);
    const nextStep = () => {
        setStep(step+1);
    }

    const prevStep = () => {
        setStep(step-1);
    }
     

    
    //Handle Inputs
    const [email, setEmail] = useState('');
    const handleChange = input => e =>{
        setEmail(e.target.value)
    }

    switch(step) {
        case 0:
            return (
            <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                email={email}
            />  
            )
        case 1:
            return (
                <Events
                    email={email}
                />
            )
        default:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    email={email}
                />  
            )

    }
    
}
 
export default UserForm;