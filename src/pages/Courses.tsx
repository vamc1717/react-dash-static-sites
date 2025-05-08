
import { ChevronRight } from 'lucide-react';

// CourseCard Component
const CourseCard = ({ imageUrl, rating }: { imageUrl: string; rating: number }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt="Course thumbnail" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-center text-gray-600">&lt;Content&gt;</h3>
      </div>
      <div className="absolute top-4 right-4">
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// CourseSection Component
const CourseSection = ({ title }: { title: string }) => {
  const courseImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {courseImages.map((image, index) => (
          <CourseCard key={index} imageUrl={image} rating={4} />
        ))}
        
        {/* Navigation arrows */}
        <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
          <ChevronRight size={24} className="transform rotate-180" />
        </button>
        <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// Courses Page
const Courses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      
      <CourseSection title="Instructor 1" />
      <CourseSection title="Instructor 2" />
    </div>
  );
};

export default Courses;
