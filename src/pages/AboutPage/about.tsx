export default function About() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          I'm a passionate Computer Science and Applied Mathematics student with interests in 
          machine learning, web development, and algorithm design.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Contact Information</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="font-medium mr-2">Email:</span> 
            <a href="mailto:lucas.liona@example.com" className="text-blue-600 hover:underline">
              lucas.liona@example.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-medium mr-2">LinkedIn:</span> 
            <a href="https://linkedin.com/in/lucas-liona" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/lucas-liona
            </a>
          </li>
          <li className="flex items-center">
            <span className="font-medium mr-2">GitHub:</span> 
            <a href="https://github.com/lucasliona" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/lucasliona
            </a>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Education</h3>
        <p className="mb-2">
          <span className="font-medium">B.S. Computer Science & Applied Mathematics</span><br />
          University Name<br />
          Expected Graduation: May 2025
        </p>
      </div>
    </div>
  )
}