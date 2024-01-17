import { useState } from 'react'
import '../App.css'


export default function BmiCalc() {
    //creating the state variables using useState
    const [heightValue, setHeightValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [bmiValue, setBmiValue] = useState('')
    const [bmiMessage, setBmiMessage] = useState('')

    //function to calculate BMI
    const calculateBmi = () => {
        if (heightValue && weightValue) {
            //calculate height in meters 
            const heightInMeters = heightValue / 100
            //calculate BMI and set BMI state variable value
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2)
            setBmiValue(bmi)

            //create message response
            let message = ''

            if (bmi < 18.5) {
                message = "You are Underweight"
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight'
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight'
            } else {
                message = 'You are Obese'
            }

            //set bmi message value 
            setBmiMessage(message)
        } else {
            setBmiValue('')
            setBmiMessage('')
        }
    }
    return (
        <div className='container'>
            <h1>Health and Healing BMI Calculator</h1>
            <div>
                <div className='input-container'>
                    <label
                        htmlFor="height"
                    >
                        Enter Your Height(cm):
                    </label>
                    <input
                        id="height"
                        name="height"
                        type="number"
                        value={heightValue}
                        onChange={(e) => setHeightValue(e.target.value)}
                    />
                </div>
                <div className='input-container'>
                    <label
                        htmlFor="weight"
                    >
                        Enter Your Weight(kg):
                    </label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={weightValue}
                        onChange={(e) => setWeightValue(e.target.value)}
                    >
                    </input>
                </div>
                <button 
                className='calculate-btn'
                onClick={calculateBmi}
                >
                    Click to Calculate BMI
                </button>

            </div>
            {bmiValue && bmiMessage && (
                 <div className="result">
                 <p>
                     Your BMI: <span className='bmi-value'>{bmiValue}</span>
                 </p>
                 <p>
                     Result:<span className='bmi-message'>{bmiMessage}</span>
                 </p>
             </div>
            )}
        </div>
    )
}

//How to make this harder? 
// -add options to chose to do height in inches, and weight in lbs instead 