import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      label: 'What technologies will be used in frontend in typeMuse?',
      content:
        'Originally I was planning to write in pure REACT/REDUX with Server Side Rendering. Now the entire typeMuse system is being written in NEXT.js with TypeScript and style components.',
    },
    {
      label: 'What Backend technologies will be used in typeMuse?',
      content:
        'On the backend part, the entire system will use NEST.js for API development alongside with GraphQL on some instances.',
    },
    {
      label: 'What database will be used in typeMuse?',
      content:
        'typeMuse will use PostgreSQL for data store along with Amazon S3.',
    },
    {
      label: 'More on software architecture and technologies in typeMuse?',
      content:
        'typeMuse will be using microservices architecture with technologies like Redis, Jenkins, Docker, Kubernetes, WebSockets, NGINX, Apache Kafka and more depending upon infrastructure and scalability. Later some services will be written in Golang for high performance!',
    },
    {
      label: 'When I get to play typeMuse?',
      content: 'typeMuse will be launched earlier next year (2024)!',
    },
  ];

  return <Accordion item={items} />;
}

export default App;
