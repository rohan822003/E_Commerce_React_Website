import React, { useState } from 'react';
import './Header.css';
const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        // Perform validation, API calls, etc.
        console.log(formData);
        // Reset form after submission
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className='register'>
            <div className='ui white segment'>
                <div className='ui aligned center aligned grid'>
                    <div className='column'>
                        
                    
            <h2 className='ui orange header'>
                <div className='contentlog'>Registration</div>
                </h2>
            <form onSubmit={handleSubmit} className='ui large form'>
                <div className='ui stacked segment'>
                    <div className='field'>
                        <div className='ui left icon input'>
                            <i className='user icon'></i>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Username' required />
                    </div>
                    </div>
                </div>
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
                <div className='ui stacked segment'>
                    <div className='field'>
                        <div className='ui left icon input'>
                        <i className='lock icon'></i>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
                </div>
                </div>
                </div>
                <div class="ui buttons">
  <button class="ui button">Cancel</button>
  <div class="or"></div>
  <button type="submit" class="ui positive button">Submit</button>
</div>
            </form>
        </div>
        </div>
                </div>
            </div>
    );
};

export default Registration;
