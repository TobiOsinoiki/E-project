import { useState } from "react";

const UserForm = () =>{
    const [user, setUser] = useState({
        name: '',
        age:'',
        location:'',
        contact:''
    })
    
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const validate = () => {
        const errors = {};
        if(!user.name.trim()) errors.name = "Name is required";

        if(!user.age || isNaN(user.age) || user.age <= 0) errors.age = "Valid age is required";

        if(!user.location.trim()) errors.location = "Location is required";

        if(!/^\d{10}$/.test(user.contact)) errors.contact = "Contact must be a 10 digit number";

        return errors;
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validateErrors = validate();
        setErrors(validateErrors);

        if(Object.keys(validateErrors).length === 0 ){
            try {
                 const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            });
            if(!response.ok) throw new Error('Failed to save data');

            setStatus("User data save sucessfully");
            setUser({name:" ", age:" ", location:" ", contact:" "});

            } catch (err) {
                console.error(err);
                setStatus('Failed to save data')
            }
        }else{
            setStatus("")
        }
    }


    return(
<>
<div className="container">
<div className="form-input">

<h2>User Registration Form</h2>
<form onSubmit={handleSubmit} style={{width:'600px', height:'400px'}}>
    <input name= "name" placeholder="Name" value={user.name}
     onChange={handleChange}/>
{errors.name && <span style={{color: 'red'}}>{errors.name}</span>}


    <input name= "age" placeholder="Age" value={user.age}
     onChange={handleChange}/>
{errors.age && <span style={{color: 'red'}}>{errors.age}</span>}


    <input name= "location" placeholder="location" value={user.location}
     onChange={handleChange}/>
{errors.location && <span style={{color: 'red'}}>{errors.location}</span>}


    <input name= "contact" placeholder="contact" value={user.contact}
     onChange={handleChange}/>
{errors.contact && <span style={{color: 'red'}}>{errors.contact}</span>}

<button type="submit">Submit</button>

</form>

{status && <p style={{marginTop: '20px', fontWeight: 'bold', textAlign: 'center'}}></p>}




</div>
    </div>
    </>
        
    )
}
export default UserForm;