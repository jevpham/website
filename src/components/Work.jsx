import React from "react";
import WorkItem from "./WorkItem";
import Transitions from "./Transitions";

const data = [
  {
    year: 2022,
    company: "Medical Database",
    title: "Software Engineer",
    duration: "2 Years",
    details: `Collaborated alongside product manager to revamp multi-page web 
    app into a single page web app with SEO principles boosting site traffic. 
    Optimized ad-serving algorithm for the platform enhancing user experience with improved page load times.
    Oversaw teams projects while reviewing code and creating tests for donor web application.
    Built RESTful APIs in .NET backend that provided data to the React front-end based on dynamic user inputs`,
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

const Work = () => (
  <Transitions>
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} {...item} />
      ))}
    </div>
  </Transitions>
);

export default Work;
