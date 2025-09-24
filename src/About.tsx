import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Code, description: 'React, TypeScript, Tailwind CSS' },
    { name: 'Design', icon: Palette, description: 'UI/UX, Figma, Adobe Creative Suite' },
    { name: 'Backend', icon: Zap, description: 'Node.js, Python, PostgreSQL' },
    { name: 'Passion', icon: Heart, description: 'Clean code, User experience' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a creative developer with a passion for building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications that not only look great but also provide 
              exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices. When I'm not coding, you can 
              find me exploring new design trends or contributing to open-source projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <skill.icon className="text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
