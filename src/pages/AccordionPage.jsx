import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'qasdj123lk2',
      label: 'What technologies will be used in frontend in typeMuse?',
      content:
        'Originally I was planning to write in pure REACT/REDUX with Server Side Rendering. Now the entire typeMuse system is being written using microfrontend architecture with NEXT.js, TypeScript and Style Components.',
    },
    {
      id: '89jek2jksok',
      label: 'What Backend technologies will be used in typeMuse?',
      content:
        'On the backend part, the entire system will use NestJS for API development alongside with GraphQL on some instances.',
    },
    {
      id: 'were82jk0dj',
      label: 'What database will be used in typeMuse?',
      content:
        'typeMuse will use typeORM for PostgreSQL data store along with Amazon S3.',
    },
    {
      id: 's2erj22k2k',
      label: 'More on software architecture and technologies in typeMuse?',
      content:
        'typeMuse will use microservices architecture with technologies like Apache Kafka, Redis, Redis Pub/Sub, WebSockets, NGINX, Jenkins, Docker, Kubernetes, Amazon Web Services and more for scalability and robust infrastructure. Later some microservices will be written in Golang for high performance!',
    },
    {
      id: 'zs72j202jl',
      label: 'When I get to play typeMuse?',
      content: 'Chill. typeMuse will be launched earlier next year (2024)!',
    },
    {
      id: 'q3oms92jl278',
      label: 'Man behind typeMuse?',
      content:
        "I'm Colson. I'm interested in large web applications, technology infrastructure, scalability and distributed systems.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
