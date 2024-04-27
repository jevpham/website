import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    company: "Medical Database",
    title: "Software Engineer",
    duration: "2 Years",
    details: `Developed ICD website list with a search algorithm for users in React. 
    Incorporated AWS Datastore for backend using GraphQL API and DynamoDB.
    Oversaw teams projects while reviewing code and creating tests for donor web application.
    Constructed logic so the web application could scale to more users improving page speed`,
  },
  {
    year: 2021,
    company: "IPM Medical Group",
    title: "Full Stack Developer",
    duration: "1 Year",
    details: `Reconstructed company website using modern SPA frameworks enhancing user experience. 
    Integrated Hubspot CRM for health assessment questionnaires using Amazon Web Services. 
    Automated workloads for medical professionals to simplify new online patient profiles. 
    Helped facilitate development and production environment for engineering team`,
  },
  {
    year: 2018,
    company: "Moneytree",
    title: "Full Stack Developer Intern",
    duration: "4 Months",
    details: `Designed an automated data entry process, resulting in a 20% usability efficiency increase.
    Utilized web scraping techniques to gather and examine competitor data for financials.
    Enacted data regression analyses to predict customer compensation reducing human error.
    Wrote scripts and queried the database generating detailed reports`,
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1000px] m-auto md:pl-20 p-4 py-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          company={item.company}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
