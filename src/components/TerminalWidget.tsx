
import React, { useState, useEffect } from 'react';
import { Terminal, Minimize2 } from 'lucide-react';

const commands = [
  { command: 'nmap -sS target.com', output: 'Starting Nmap scan...' },
  { command: 'sqlmap -u "http://target.com/page.php?id=1"', output: 'Testing for SQL injection...' },
  { command: 'hashcat -m 1000 hashes.txt wordlist.txt', output: 'Cracking password hashes...' },
  { command: 'metasploit > use exploit/multi/handler', output: 'Setting up reverse shell...' },
  { command: 'burpsuite --proxy=127.0.0.1:8080', output: 'Intercepting HTTP traffic...' },
  { command: 'john --wordlist=rockyou.txt shadow.txt', output: 'John the Ripper running...' },
];

export const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
        const command = commands[currentCommand];
        let index = 0;
        
        const typeInterval = setInterval(() => {
          if (index < command.command.length) {
            setDisplayText(command.command.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setDisplayText(command.output);
              setTimeout(() => {
                setCurrentCommand((prev) => (prev + 1) % commands.length);
                setDisplayText('');
                setIsTyping(false);
              }, 2000);
            }, 500);
          }
        }, 100);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, currentCommand, isTyping]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-8 left-8 w-96 bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden z-40 font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-green-500/10 px-4 py-2 border-b border-green-500/20">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-300">notorious@kali:~$</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-32 overflow-hidden">
        <div className="text-green-400">
          <span className="text-green-300">notorious@kali:~$ </span>
          {displayText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
};
