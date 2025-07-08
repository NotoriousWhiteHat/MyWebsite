
import React from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:contact@notorious.dev', color: 'text-red-400' },
  { icon: MessageSquare, label: 'Discord', href: 'https://discord.com/users/959238547133595648', color: 'text-blue-400' },
  { icon: Github, label: 'GitHub', href: '#', color: 'text-gray-400' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-blue-500' },
];

export const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
          Get In Touch
        </h2>
        
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Ready to collaborate on security projects or need ethical hacking services? 
          Let's build something secure together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 bg-green-500/5 border border-green-500/20 rounded-xl backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards`
              }}
            >
              <div className={`p-4 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 group-hover:from-green-500/20 group-hover:to-cyan-500/20 transition-all duration-300 ${link.color}`}>
                <link.icon className="w-6 h-6" />
              </div>
              <span className="text-white font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
