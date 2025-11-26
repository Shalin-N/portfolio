import { useState } from 'react';
import './Timeline.css';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timelineData: TimelineItem[] = [
    {
      year: "Present",
      title: "MongoDB Migration",
      company: "FNZ",
      description: "Migrating Azure Cosmo DB infrastructure to on premise MongoDB infrastructure so that FNZ can meet Swedish financial data regulatory requirements.",
      technologies: ["Azure Cosmo DB", "MongoDB"]
    },
    {
      year: "Present",
      title: "Token Vault",
      company: "FNZ",
      description: "Building a secure token vault using Azure Key Vault and .NET Core to manage sensitive credentials and secrets for agentic workflows.",
      technologies: ["Azure Key Vault", ".NET Core"]
    },
    {
      year: "Present",
      title: "Project Overlord",
      company: "FNZ",
      description: "Built a platform to mesh all the different FNZ systems together for a unified data experience.",
      technologies: ["Jira API", "GitHub API", "Azure DevOps API", "React"]
    },
    {
      year: "2025",
      title: "Agentic Framework",
      company: "FNZ",
      description: "Worked with Microsoft Engineers to migrate FNZ's LangChain agentic framework to Semantic Kernel.",
      technologies: ["Semantic Kernel", "MCP"]
    },
    {
      year: "2025",
      title: "Programmatic MCP Deployments",
      company: "Personal Project",
      description: "Built a tool to take an OpenAPI Spec and generate a corresponding MCP deployment through cloudflare.",
      technologies: ["Cloudflare", "MCP"]
    },
    {
      year: "2025",
      title: "KiwiSaver/IRD Production Support",
      company: "FNZ",
      description: "Provided production support for the KiwiSaver/IRD integration project, ensuring smooth operation and quick resolution of any issues.",
      technologies: [".Net Framework", "C#", "SQL Server"]
    },
    {
      year: "2025",
      title: "KiwiSaver/IRD Team Lead",
      company: "FNZ",
      description: "Led a team working with the IRD to build the KiwiSaver proposition for FNZ's wealth management platform.",
      technologies: [".Net Framework", "C#", "SQL Server"]
    },
    {
      year: "2025",
      title: "KiwiSaver/IRD Test Lead",
      company: "FNZ",
      description: "Led the testing efforts for the KiwiSaver/IRD integration project, ensuring all components met quality standards and regulatory compliance.",
      technologies: ["Test Planning", "Quality Assurance"]
    },
    {
      year: "2025",
      title: "GVC Calculation Engine",
      company: "FNZ",
      description: "Built an engine to calculate the KiwiSaver goverment contributions owed to customers each year.",
      technologies: [".Net Framework", "C#", "SQL Server"]
    },
    {
      year: "2025",
      title: "WhaiRawa CRM Integration",
      company: "FNZ",
      description: "Working as the technical lead for FNZ's WhaiRawa project, I helped design a solution for data syncing between the FNZ platform and WhaiRawa's CRM.",
      technologies: [".Net Framework", "C#", "SQL Server"]
    },
    {
      year: "2024",
      title: "President of FNZ Auckland Culture Club",
      company: "FNZ",
      description: "Led the FNZ Auckland Culture Club, as a team of 16 we organise events and activities to foster team bonding and cultural exchange among employees.",
      technologies: ['Team Leadership', 'Event Planning']
    },
    {
      year: "2024",
      title: "TDA Calculation Engine",
      company: "FNZ",
      description: "Built an engine to calculate tax entitlements related to the onshore bonds investment accounts.",
      technologies: [".Net Framework", "C#", "SQL Server"]
    },
    {
      year: "2024",
      title: "New Starter Mentorship Program",
      company: "FNZ",
      description: "Designed and implemented a mentorship program for new starters at FNZ to accelerate their onboarding and integration into teams.",
      technologies: ["Mentorship", "Onboarding"]
    },
    {
      year: "2023",
      title: "Plant Scheduling for Fonterra",
      company: "University of Auckland",
      description: "Built a generalised discrete-time evolution-based model for scheduling continuous production plants and evaluated the impact of various heuristic techniques on the model's feasibility, schedule quality, and run-time performance.",
      technologies: ["Julia", "JuMP", "CPLEX"]
    },
    {
      year: "2023",
      title: "Social Vice President of AUES",
      company: "University of Auckland",
      description: "Was the Social Vice President of the Auckland University Engineering Society (AUES), organising events and activities for engineering students to enhance their university experience.",
      technologies: ["Team Leadership", "Event Planning"]
    },
    {
      year: "2023",
      title: "Developer for Dentally APAC",
      company: "Henry Schein One",
      description: "Contributed to the development of Dentally in the APAC region, a cloud-based dental practice management software, by implementing new features and improving existing functionality.",
      technologies: ["Ruby on Rails", "Ember.js"]
    },
    {
      year: "2022",
      title: "Software Services Consultant",
      company: "Vista",
      description: "Maintained and cultivated business relationships by engaging with business partners to triage issues, run workshops, and assist in deploying new sites and resources. By addressing all business partner issues within SLAs, I was promoted to the first line of contact for Dendy Cinema (AU).",
      technologies: ["Customer Service", "Stakeholder Management", "SQL Server"]
    },
    {
      year: "2022",
      title: "Software Services Intern",
      company: "Vista",
      description: "Developed a fuzzy matching algorithm to aggregate related data using C#, and implemented a dashboard using HTML and JavaScript to neatly present findings that were then used to fine-tune the exception boundaries of the automation tool. This resulted in a 50% reduction in false positives from alert logging.",
      technologies: ["HTML", "CSS", "JavaScript", "C#"]
    }
  ];

  return (
    <div className="timeline-section">
      <div className="timeline-header">
        <h2>My Journey</h2>
        <p>Key milestones and experiences that shaped my career</p>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-snake-line"></div>
        {timelineData.map((item, index) => (
          <div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${selectedItem === index ? 'expanded' : ''}`}
            onClick={() => setSelectedItem(selectedItem === index ? null : index)}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
            </div>            
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              
              {selectedItem === index && (
                <div className="timeline-details">
                  <p className="timeline-description">{item.description}</p>
                </div>
              )}

            <div className="timeline-technologies">
                {item.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
