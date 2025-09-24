import React from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Server,
  Zap,
  Layout,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservices', level: 70 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'UI Design', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Prototyping', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: Terminal },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Layout },
    { name: 'Postman', icon: Zap },
    { name: 'Chrome DevTools', icon: Globe },
    { name: 'Responsive Design', icon: Smartphone }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-blue-600 mr-3" size={28} />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
              >
                <tool.icon 
                  className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200 mb-2" 
                  size={32} 
                />
                <span className="text-sm text-gray-700 text-center font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">
            Additional Skills
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum', 'Test-Driven Development', 'CI/CD', 'Performance Optimization',
              'SEO', 'Accessibility', 'Cross-browser Compatibility', 'Mobile-First Design',
              'API Integration', 'Version Control', 'Code Review', 'Technical Writing'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
