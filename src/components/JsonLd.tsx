import { projects } from "@/data/projects";
import { BASE_URL, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.jobTitle,
    url: BASE_URL,
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.insta],
    description: SITE_CONFIG.description,
    knowsAbout: SITE_CONFIG.skills,
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: `${SITE_CONFIG.name} Portfolio`,
    url: BASE_URL,
    creator: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        url: project.liveUrl || project.githubUrl,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        codeRepository: project.githubUrl,
        programmingLanguage: project.technologies,
      },
    })),
  };


  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: BASE_URL,
    logo: `${BASE_URL}logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Personal Portfolio",
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
