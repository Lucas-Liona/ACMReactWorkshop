import Card from '../../components/Card'

// Define project type for better type safety
interface Project {
  id: number;
  title: string;
  date: string;
  imgpath?: string;
  description?: string;
}

export default function Home() {
  // Centralize project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'My First Project',
      date: 'September 2019',
      imgpath: "https://i.insider.com/5980b7ca87543302234a1a57?width=800&format=jpeg&auto=webp",
      description: 'This was my first major programming project.'
    },
    {
      id: 2,
      title: 'My First Internship',
      date: 'September 2022',
      imgpath: "https://brandingforthepeople.com/wp-content/uploads/2019/04/Stock-Photography-vs-Real-Imagery.jpg",
      description: 'I worked at a tech company developing web applications.'
    },
    {
      id: 3,
      title: 'Machine Learning Project',
      date: 'January 2023',
      description: 'Developed a neural network for image classification.'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      date: 'June 2023',
      description: 'Created a cross-platform mobile application.'
    },
    {
      id: 5,
      title: 'Database System Design',
      date: 'November 2023',
      description: 'Designed and implemented a relational database system.'
    }
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-left">My Projects &amp; Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card 
            key={project.id}
            title={project.title} 
            date={project.date} 
            imgpath={project.imgpath}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}