import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic
        console.log(formData);
        // Reset form after submission
        setFormData({
            email: '',
            password: ''
        });
    };

    return (
        <div className='login'>
            <div className='ui white segment'>
                <div className='ui aligned center aligned grid'>
                    <div className='column'>
                        
                    
            <h2 className='ui orange header' >
                <div className='contentlog'>Login</div>
                </h2>
         
            <form onSubmit={handleSubmit} className='ui large form'>
            <div className='ui stacked segment'>
                    <div className='field'>
                        <div className='ui left icon input'>
                        <i className='user icon'></i>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email-address' required />
                </div>
                </div>
                </div>
                <div className='ui stacked segment'>
                    <div className='field'>
                        <div className='ui left icon input'>
                        <i className='lock icon'></i>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='password' required />
                </div>
                </div>
                </div>
                <div >
                    <button className='ui fluid large green submit button'>Login</button>
                </div>
            </form>
            <div className='ui horizontal divider'>
                Or
            </div>
            <div className='ui danger message' id='danger'>
                New here? <Link to="/register">Sign Up</Link>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default LoginForm;
