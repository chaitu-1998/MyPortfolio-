import html from '../Design/html.jpg';
import re from '../Design/React.png';
import angular from '../Design/Angular.jpg';
import css from '../Design/css.jpg';
import js from '../Design/JavaScript.jpeg';
import Java from '../Design/java.jpeg';
import Python from '../Design/python.jpeg';
import node from '../Design/node.jpeg';
import spring from '../Design/spring.webp';
import mysql from '../Design/mysql.jpeg';
import postgresql from '../Design/postgressql.jpeg';
import mangodb from '../Design/mangodb.jpeg';
import hibernates from '../Design/hibernate.png';
import DSA from '../Design/dsa.jpeg';
import opps from '../Design/oops.png';
import aws from '../Design/aws.png';
import google from '../Design/google.webp';
import git from '../Design/git.png';
import graph from '../Design/graphql.png';
import kafka from '../Design/kafka.png';
import dockers from '../Design/docker.png';
import kubernetes from '../Design/Kubernetes.jpeg';
import apache from '../Design/Apache.png';
export const skillList = [
   {
    Technology:'Front-end Technology',
    Image: [html,re,angular,css,js],
    para:'Front-end technologies, including HTML, CSS, and JavaScript, are expertly utilized alongside frameworks such as React and Angular to craft responsive and interactive user interfaces, facilitated by efficient build tools and APIs',
    mainHeading :'Proficient in Frontend Development',
    subHeading : 'Technical Skills ',
    languages : ['HTML','CSS','JAVASCRIPT'],
    frameWorks : ['React js','Angular js','BootStrap','Tailwind css'],
   },
   {
    Technology:'Back-end Technology',
    Image: [Java,Python,node,spring],
    para:'Back-end technologies, leveraging languages like Python and Java, are adeptly employed in tandem with frameworks such as Spring Boot and Node js to develop robust server-side logic and data management systems, supported by various databases and cloud services.',
    mainHeading :'Proficient in Back-End Development',
    subHeading : 'Technical Skills ',
    languages : ['Python', 'java'],
    frameWorks : ['Spring Boot', 'Node.js'],
   },
   {
    Technology:'Database',
    Image: [mysql,postgresql,mangodb,hibernates],
    para:'Database technologies, integrating MySQL, Postgres SQL, and MongoDB, complement back-end solutions crafted with languages like Python and Java, alongside frameworks such as Spring Boot and Node.js, ensuring resilient data management across diverse applications and platforms.',
    mainHeading :'Proficient in Database technology',
    subHeading : 'Technical Skills ',
    languages : ['MYSQL', 'postgres sql','mango db'],
    frameWorks : ['hibernates']
   },
]

export const concept = [{
    name: 'Concepts',
    skills :[DSA,opps,aws,google]
},
{
    name: 'Other Skills',
    skills: [git,graph,apache,kubernetes,dockers,kafka]
}]