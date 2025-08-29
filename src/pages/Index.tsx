import React, { useState } from 'react';
import { Shield, Code, Users, Award, Mail, Phone, Linkedin, Github, Terminal as TerminalIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Terminal from '@/components/Terminal';
import Counter from '@/components/Counter';
import kshitijPortrait from '@/assets/kshitij-new-portrait.jpg';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  const stats = [
    { number: 15, suffix: '+', label: 'Certifications Earned' },
    { number: 7, suffix: '+', label: 'Projects Deployed' },
    { number: 100, suffix: '+', label: 'Students Mentored' },
    { number: 3, suffix: '+', label: 'Years in Cybersecurity' },
  ];

  const skills = [
    { name: 'Red Teaming', level: 95 },
    { name: 'IoT Security', level: 90 },
    { name: 'Malware Analysis', level: 85 },
    { name: 'IoT Development', level: 85 },
    { name: 'Penetration Testing', level: 95 },
    { name: 'Python/C++', level: 90 },
  ];

  const certifications = [
    'Cisco Certified - Ethical Hacker',
    'Cisco Certified - Cyber Threat Management',
    'Cisco Certified - Endpoint Security',
    'Cisco Certified - Introduction to Cybersecurity',
    'EC-Council - Advanced Penetration Testing',
    'EC-Council - TypeScript Certification',
    'EC-Council - SQL Injection Attacks',
    'EC-Council - Dark Web & Cryptocurrency',
    'Microsoft - Cybersecurity Essentials',
    'LinkedIn Learning - Cybersecurity Essentials',
    'ASD Academy - Advanced Offensive Security',
  ];

  const projects = [
    {
      title: 'Cross-Platform Keylogging System',
      description: 'Advanced monitoring solution for academic integrity with real-time data capture',
      tech: 'Python, C++, Cross-Platform APIs',
      type: 'Red Team'
    },
    {
      title: 'RFID-GSM Attendance System',
      description: 'IoT-based attendance automation with SMS notifications and real-time tracking',
      tech: 'ESP32, RFID, GSM, IoT',
      type: 'IoT Innovation'
    },
    {
      title: 'ESP IoT Server',
      description: 'Standalone server implementation on ESP devices for edge computing applications',
      tech: 'ESP32, Web Server, IoT',
      type: 'IoT Innovation'
    },
    {
      title: 'YARA-Based Malware Analysis',
      description: 'Advanced threat detection and classification system using YARA rules',
      tech: 'YARA, Python, Machine Learning',
      type: 'Security Research'
    },
    {
      title: 'ESP Duno Coin Mining',
      description: 'Experimental IoT-based cryptocurrency concepts for embedded systems',
      tech: 'ESP32, Blockchain, IoT',
      type: 'IoT Innovation'
    },
    {
      title: 'SQL Injection Toolkit',
      description: 'Ethical penetration testing automation with multiple attack vectors',
      tech: 'Python, SQL, Security Testing',
      type: 'Red Team'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                  <TerminalIcon className="h-4 w-4 text-cyber" />
                  <span>Initializing secure connection...</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="gradient-text">Kshitij</span>
                  <br />
                  <span className="cyber-text">MK</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
                  Cybersecurity Professional & Tech Innovator
                </p>
                <p className="text-lg text-foreground max-w-2xl font-medium">
                  Securing Tomorrow, One Byte at a Time
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-display font-bold text-primary">
                      <Counter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:scale-105 transition-transform primary-glow"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Initiate Secure Connection
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-cyber text-cyber hover:bg-cyber hover:text-cyber-foreground"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Lab Projects
                </Button>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={kshitijPortrait} 
                  alt="Kshitij MK" 
                  className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-primary shadow-primary animate-float"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20 animate-pulse-soft"></div>
              </div>
              <Terminal className="hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                Profile Analysis
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate cybersecurity professional dedicated to making a global impact in ethical hacking and IoT development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-lift">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Current Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Terratech College Club President</p>
                    <p className="font-semibold">GeeksforGeeks Campus Ambassador</p>
                    <p className="font-semibold">Cybersecurity R&D at CYBERSENA India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Code className="h-8 w-8 text-cyber mb-2" />
                  <CardTitle>Specialization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">Red Teaming</Badge>
                    <Badge variant="secondary">IoT Security</Badge>
                    <Badge variant="secondary">Malware Analysis</Badge>
                    <Badge variant="secondary">IoT Development</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">BE VTU (2022-26)</p>
                    <p>Current Student</p>
                    <p className="text-sm text-muted-foreground">
                      Navkis College of Engineering Student
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                Arsenal & Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Technical skills and certifications acquired through years of dedicated practice
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skills Chart */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Code className="h-6 w-6 text-cyber mr-2" />
                  Core Competencies
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Award className="h-6 w-6 text-cyber mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border hover-lift">
                      <div className="w-2 h-2 bg-cyber rounded-full flex-shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                Lab & Research
              </h2>
              <p className="text-xl text-muted-foreground">
                Innovative projects and security research initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={project.type.includes('Red') ? 'destructive' : project.type.includes('IoT') ? 'default' : 'secondary'}>
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Tech Stack:</span>
                        <p className="font-mono text-sm">{project.tech}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-display font-bold gradient-text mb-4">
                Secure Communications
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to collaborate on cybersecurity initiatives or discuss speaking opportunities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">kshitijmk414@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 8867183845</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Professional Network</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Github className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Code Repository</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5 text-primary" />
                    <span>Send Message</span>
                  </CardTitle>
                  <CardDescription>
                    Initiate secure communication channel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Message subject"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your encrypted message..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-primary hover:scale-105 transition-transform">
                      <Send className="h-4 w-4 mr-2" />
                      Transmit Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-cyber mr-2" />
                      Security Protocols
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyber rounded-full" />
                        <span>End-to-end encryption enabled</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyber rounded-full" />
                        <span>Response time: 24-48 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyber rounded-full" />
                        <span>All communications logged securely</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Collaboration Opportunities</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Speaking engagements</p>
                      <p>• Research partnerships</p>
                      <p>• Open source projects</p>
                      <p>• Cybersecurity consulting</p>
                      <p>• Educational workshops</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-cyber" />
                <span>All communications encrypted with industry-standard protocols</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Response time: 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Kshitij MK. All rights reserved. | Ethical Hacker Verified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
