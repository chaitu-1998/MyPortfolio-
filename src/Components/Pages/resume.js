import React from 'react'
import '../Style/Resume.css';
import Accenture from '../Design/accenture-services-pvt-ltd-bellandur-bangalore-international-call-centres-5ux9ifj1ya.avif';
import TechNest from '../Design/technest-logo-gradient.jpg';

function resume() {
  return (
    <div className='OuterLine'>
        <div className='InnerLine'>
            <div className='Left'>
            <h1>Chaitanya Vidudhala</h1>
            <div className='FirstCompany'>
                <h3>Associate Software Engineer– Accenture | Banglore, Karnataka</h3>
                <ol>
<li>2+ Years of experience as an Associate Software Engineer, specializing in web development, with increasing responsibilities in analysis, web design, and implementation. Proficient in HTML, CSS, MYSQL, Java Spring boot and JavaScript.</li>
<li>Mainly responsible for developing RESTful API using Spring Boot framework. Developed different controllers that return the response both in JSON and XML based on the request type.</li>
<li>Worked on Thread handling to maintain continuity of execution and extensively implemented Multithreading concept to handle Transaction Management with isolation and propagation levels.</li>
<li>Developed Java/J2EE code, business logic using Spring, Hibernate framework and OOP concepts, involved in Peer code reviews.</li>
<li>Experienced with spring framework applications like Spring Core, Spring AOP, Spring MVC, Spring Batch, Spring Security and Spring Boot and did integration to Microservices into the existing system architecture.</li>
<li>Developed Business components using Java Objects and used the Hibernate framework to map the Java classes to the database using Annotations.</li>
<li>Used Spring DAO module for performing CRUD operations on the database and implemented logging in the application using Spring Framework AOP module to know the application status. </li>
<li>Responsible for maintenance of the WebSphere Application Servers and Web Servers on different AIX platforms and setting up the development, testing and staging environments for the ongoing application development.</li>
<li>Writing SQL Queries to get the information from Oracle DB for adjusting the data in DB. Used joins to get the data from more DB Tables. Views and Unions were also part of our implementation.</li>
<li>Designed, analysed and developed the front-end and back-end Servlets, Bootstrap for designing, HTML5, CSS3, Angular JS, Ember JS and AJAX, for developing the presentation layer.</li>
<li>Developed REST web services using Spring MVC to extract client-related data from the database and used SOAPUI.</li>
<li>Used JSP to dynamically generate web pages based on HTML and XML Document types. Use JSF to implement component-based User Interface Applications. JSON is used as the main data-interchange format in place of XML.</li>
<li>Functionality is implemented by developing RESTful web services using Spring Boot, JPA, Cloud Foundry and Oracle.</li>
<li>Deploy and administer microservices-based applications on Cloud infrastructure using Pivotal Cloud Foundry.</li>
<li>Used GIT HUB for maintaining the component and to release version management.</li>
</ol>
                </div>
                <div className='SecondCompany'>
                <h3>Associate Software Engineer – TECHNEST | Chennai, Tamil Nadu </h3>
                <ol>
<li>Developed the Front-End and User Interface of ARWorks applications using JavaScript, ES6, React, and Redux.</li>
<li>Used Babel to compile JSX, and ES6 and follow JSHint standards for high code quality.</li>
<li>Worked in React JS for creating interactive UI using One-way data flow, Virtual DOM, JSX, and React concepts.</li>
<li>Leverages knowledge of W3C standards, classical Model View Layer (MVC) architecture and cross-browser development techniques.</li>
<li>Created the Redux/NGRX data flow by building the store, dispatching the actions, maintaining the store using Reducer and accessing the API Services using UseEffects.</li>
<li>Created various template and data-driven form components using React Forms and defined module-level routing for various components in the application using React Router.</li>
<li>Used React JS to create views to hook up models to the DOM and synchronize data with the server as a Single Page Application (SPA).</li>
<li>Developed Single Page Applications (SPAs) using React-Router to enable navigation from one view to the next as clients perform application tasks.</li>
<li>Parsed HTML requests with express middleware including body-parser, cookie-parser, cors, and Morgan</li>
<li>Enhanced user experience with Reacts life cycle methods, including componentDidMount, shouldComponentUpdate, componentWillUnmount, etc.</li>
<li>Styled the pages using Tailwind CSS and built a highly responsive interface and highly readable classes to use little CSS files.</li>
<li>Used Maven building tool for creating EAR files to be deployed in application servers. It is also used for Dependency management of code in applications.</li>
<li>Developed the backend server with Spring Boot, involving different layers of the application including entity/model, DAO/repository, Controller, Service, Business, and Persistence.</li>
<li>On the server side, I used Spring MVC with Hibernate to connect with Microsoft SQL Server.</li>
<li>Prefer to use Hibernate Criteria API for the query database and perform other CRUD operations as much as possible.</li>
</ol>
                </div>
            </div>
            <div className='Right'>
            <div className='accentureLOGO'>
                <img src={Accenture}/>
            </div>
            <div className='TechNestLogo'>
                <img src={TechNest} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default resume