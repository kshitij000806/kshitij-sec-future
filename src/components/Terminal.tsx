import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  className?: string;
}

interface CommandResponse {
  command: string;
  response: string | string[];
}

const Terminal: React.FC<TerminalProps> = ({ className = '' }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandResponse[]>([
    {
      command: 'init',
      response: [
        'Kshitij Security Terminal v2.1.0',
        'Type "help" for available commands',
        'Access Level: AUTHORIZED',
        ''
      ]
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | string[]> = {
    help: [
      'Available Commands:',
      '  whoami     - Display user information',
      '  skills     - List technical skills',
      '  projects   - Show recent projects',
      '  certs      - Display certifications',
      '  contact    - Get contact information',
      '  status     - Show security status',
      '  clear      - Clear terminal',
      '  matrix     - Enable the matrix',
      ''
    ],
    whoami: [
      'User: Kshitij MK',
      'Role: Cybersecurity Professional & Tech Innovator',
      'Location: India',
      'Education: BE VTU (2022-26)',
      'Specialization: Red Teaming, IoT Security, Malware Analysis',
      'Current: Terratech College Club President',
      'Mission: Securing Tomorrow, One Byte at a Time',
      ''
    ],
    skills: [
      'Technical Arsenal:',
      '█ Red Teaming          ████████████ 95%',
      '█ IoT Security         ███████████  90%',
      '█ Malware Analysis     ██████████   85%',
      '█ IoT Development      ██████████   85%',
      '█ Penetration Testing  ████████████ 95%',
      '█ Python/C++           ███████████  90%',
      '█ Network Security     ██████████   85%',
      ''
    ],
    projects: [
      'Recent Projects:',
      '1. Cross-Platform Keylogging System',
      '2. RFID-GSM Attendance System',
      '3. ESP IoT Server Implementation',
      '4. YARA-Based Malware Analysis Tool',
      '5. SQL Injection Testing Toolkit',
      '',
      'Status: All projects successfully deployed',
      ''
    ],
    certs: [
      'Certifications Unlocked:',
      '✓ Cisco Certified - Ethical Hacker',
      '✓ Cisco Certified - Cyber Threat Management',
      '✓ Cisco Certified - Endpoint Security',
      '✓ EC-Council - Advanced Penetration Testing',
      '✓ Microsoft - Cybersecurity Essentials',
      '✓ ASD Academy - Advanced Offensive Security',
      '',
      'Achievement Level: Expert',
      ''
    ],
    contact: [
      'Secure Communication Channels:',
      '📧 Email: kshitijmk414@gmail.com',
      '📱 Phone: +91 8867183845',
      '💼 LinkedIn: /in/kshitijmk',
      '💻 GitHub: /kshitijmk',
      '',
      'Response Time: 24-48 hours',
      'Encryption: Available upon request',
      ''
    ],
    status: [
      'System Status: ████████████ ONLINE',
      'Security Level: ████████████ MAXIMUM',
      'Firewall Status: ████████████ ACTIVE',
      'Threat Level: ████████████ MINIMAL',
      '',
      '⚡ All systems operational',
      '🛡️ Security protocols active',
      '🔒 Encrypted connections verified',
      ''
    ],
    matrix: [
      'Wake up, Neo...',
      'The Matrix has you...',
      'Follow the white rabbit...',
      '',
      '🔴 Red pill or blue pill?',
      'Welcome to the real world.',
      ''
    ]
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const response = commands[trimmedCmd] || [`Command "${cmd}" not found. Type "help" for available commands.`];
    
    setHistory(prev => [...prev, {
      command: cmd,
      response
    }]);

    setCommandHistory(prev => [...prev, cmd]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      className={`terminal p-6 max-h-96 overflow-y-auto ${className}`}
      ref={terminalRef}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-1">
        {history.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-2">
              <span className="terminal-prompt font-semibold">kshitij@sec-future:~$</span>
              <span className="text-white">{item.command}</span>
            </div>
            <div className="ml-4 mt-1">
              {Array.isArray(item.response) ? (
                item.response.map((line, lineIndex) => (
                  <div key={lineIndex} className="font-mono text-sm">
                    {line}
                  </div>
                ))
              ) : (
                <div className="font-mono text-sm">{item.response}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-4">
        <span className="terminal-prompt font-semibold flex-shrink-0">kshitij@sec-future:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-white font-mono"
          placeholder="Type 'help' for commands..."
        />
        <span className="animate-blink text-white">|</span>
      </form>
    </div>
  );
};

export default Terminal;