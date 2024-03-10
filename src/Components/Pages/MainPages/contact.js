import React from 'react'
import '../../Style/contact.css';

function contact() {
    return (
        <div className='ContactInfo'>
            <div className='ContactInfoLeft'>
                <h1>Open to work</h1>
                <h2>Full-Stack Developer | React.js & Spring Boot Specialist</h2>
                <p>
                    Experienced software engineer skilled in Python, Java, JavaScript, HTML, CSS, and frameworks like Spring Boot, React, and Node.js. Proficient in database management with MySQL, PostgreSQL, and MongoDB. Strong track record in web development and optimizing performance.
                </p>
            </div>
            <div className='ContactInfoRight'>
                <h1>
                    Contact Info
                </h1>
                <div className='InfoEmail'>
                    <h3>Email</h3>
                    <h3 className='EmailBox'>chaitanya.vidudhala@gmail.com</h3>
                </div>
                <div className='InfoPhone'>
                    <h3>Mobile No: </h3>
                    <h3 className='PhoneBox'>+1 (205)-899-6197</h3>
                </div>
                <button onClick={() => window.open('mailto:chaitanya.vidudhala@gmail.com')}>Hire</button>
                <div className='Address'>
                    <h3>Address:</h3>
                    <p>1217 Beacon parkway E,</p>
                    <p>Apt E,</p>
                    <p>Birmingham,</p>
                    <p>Alabama, 35209</p>
                </div>
            </div>
        </div>
    )
}

export default contact