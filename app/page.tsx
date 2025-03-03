import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Terminal, Server, Database, Code, Briefcase, GraduationCap, ExternalLink, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary">David Chen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Backend Developer | Node.js & NestJS Expert
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              I build robust, scalable, and high-performance backend systems that power modern applications. Specializing in Node.js, NestJS, and microservices architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 mt-10">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070" 
                  alt="David Chen" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Terminal className="mr-2 h-6 w-6" /> About Me
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm a backend developer with 6+ years of experience building server-side applications and APIs. My expertise lies in creating efficient, secure, and scalable backend systems using Node.js and NestJS.
              </p>
              <p className="text-muted-foreground mb-6">
                After completing my Master's in Computer Science at Tech University, I've worked with startups and enterprise companies to architect and implement complex backend solutions that handle millions of requests daily.
              </p>
              <p className="text-muted-foreground mb-8">
                I'm passionate about clean code, microservices architecture, and performance optimization. When not coding, I contribute to open-source projects and mentor junior developers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-chart-1 hover:bg-chart-1/80">Node.js</Badge>
                <Badge className="bg-chart-2 hover:bg-chart-2/80">NestJS</Badge>
                <Badge className="bg-chart-3 hover:bg-chart-3/80">TypeScript</Badge>
                <Badge className="bg-chart-4 hover:bg-chart-4/80">Express.js</Badge>
                <Badge className="bg-chart-5 hover:bg-chart-5/80">MongoDB</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Redis</Badge>
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>AWS</Badge>
                <Badge>Microservices</Badge>
                <Badge>REST APIs</Badge>
                <Badge>GraphQL</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className="mr-2 h-6 w-6" /> Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="work" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="work">Work Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              
              <TabsContent value="work" className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Senior Backend Developer</CardTitle>
                        <CardDescription>TechNova Solutions</CardDescription>
                      </div>
                      <Badge>2021 - Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Lead the development of a microservices architecture using NestJS and TypeScript, improving system scalability by 300%</li>
                      <li>Designed and implemented RESTful and GraphQL APIs serving 5M+ daily requests</li>
                      <li>Optimized database queries and implemented caching strategies, reducing response times by 60%</li>
                      <li>Mentored junior developers and established coding standards and best practices</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Backend Developer</CardTitle>
                        <CardDescription>FinTech Innovations</CardDescription>
                      </div>
                      <Badge>2018 - 2021</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Built secure payment processing systems using Node.js and Express</li>
                      <li>Implemented authentication and authorization systems with JWT and OAuth2</li>
                      <li>Developed real-time notification services using WebSockets and Socket.io</li>
                      <li>Collaborated with frontend teams to design and document APIs</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Junior Developer</CardTitle>
                        <CardDescription>WebSphere Inc.</CardDescription>
                      </div>
                      <Badge>2016 - 2018</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Developed and maintained RESTful APIs using Node.js and MongoDB</li>
                      <li>Implemented automated testing using Jest and Supertest</li>
                      <li>Assisted in database design and optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Master of Science in Computer Science</CardTitle>
                        <CardDescription>Tech University</CardDescription>
                      </div>
                      <Badge>2014 - 2016</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Specialized in Distributed Systems and Cloud Computing. Thesis on "Optimizing Microservices Communication in Node.js Applications"</p>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                        <CardDescription>State University</CardDescription>
                      </div>
                      <Badge>2010 - 2014</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Graduated with honors. Participated in multiple hackathons and coding competitions.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Code className="mr-2 h-6 w-6" /> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Microservices",
                description: "A scalable e-commerce backend built with NestJS microservices architecture, handling product catalog, user management, and order processing.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
                tags: ["NestJS", "Microservices", "PostgreSQL", "Redis", "Docker"]
              },
              {
                title: "Real-time Chat API",
                description: "High-performance chat backend supporting millions of concurrent connections with features like message persistence, read receipts, and typing indicators.",
                image: "https://images.unsplash.com/photo-1611746872915-64382b5c2a98?q=80&w=2070",
                tags: ["Node.js", "Socket.io", "MongoDB", "Redis", "AWS"]
              },
              {
                title: "FinTech Payment Gateway",
                description: "Secure payment processing system with fraud detection, transaction monitoring, and compliance with PCI DSS standards.",
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070",
                tags: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ"]
              },
              {
                title: "Content Management API",
                description: "Headless CMS backend with content versioning, role-based access control, and multi-language support.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
                tags: ["Node.js", "Express", "MongoDB", "GraphQL"]
              },
              {
                title: "IoT Device Management",
                description: "Backend system for managing IoT devices, collecting telemetry data, and providing real-time analytics.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
                tags: ["NestJS", "MQTT", "TimescaleDB", "Kubernetes"]
              },
              {
                title: "Authentication Microservice",
                description: "Reusable authentication and authorization service with support for multiple authentication methods and fine-grained permissions.",
                image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070",
                tags: ["Node.js", "JWT", "OAuth2", "Redis", "MongoDB"]
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Server className="mr-2 h-6 w-6" /> Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5" /> Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    Node.js, NestJS, Express.js
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    RESTful API Design
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    GraphQL, Apollo Server
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Microservices Architecture
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" /> Databases & Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    MongoDB, PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Redis, ElasticSearch
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    TypeORM, Mongoose
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-3">Intermediate</Badge>
                    Cassandra, TimescaleDB
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Languages & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    TypeScript, JavaScript
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Docker, Kubernetes
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Git, CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-3">Intermediate</Badge>
                    Python, Go
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5" /> DevOps & Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    AWS (EC2, Lambda, S3)
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    CI/CD (GitHub Actions, Jenkins)
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Terraform, Infrastructure as Code
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-3">Intermediate</Badge>
                    Google Cloud Platform
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Terminal className="mr-2 h-5 w-5" /> Testing & Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    Jest, Mocha, Chai
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    TDD, BDD Methodologies
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Integration Testing
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-3">Intermediate</Badge>
                    Load Testing (k6, Artillery)
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Architecture & Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    RESTful API Design
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-1">Expert</Badge>
                    Microservices Architecture
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Event-Driven Architecture
                  </li>
                  <li className="flex items-center">
                    <Badge className="mr-2 bg-chart-2">Advanced</Badge>
                    Domain-Driven Design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Mail className="mr-2 h-6 w-6" /> Get In Touch
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  I'm always open to discussing new projects, opportunities, or partnerships.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border border-border rounded-md bg-background"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-border rounded-md bg-background"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full p-2 border border-border rounded-md bg-background"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 border border-border rounded-md bg-background"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <Mail className="h-8 w-8 mb-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:david@example.com" className="text-primary hover:underline">
                    david@example.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <Linkedin className="h-8 w-8 mb-2" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-primary hover:underline">
                    linkedin.com/in/davidchen
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <Github className="h-8 w-8 mb-2" />
                    GitHub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="#" className="text-primary hover:underline">
                    github.com/davidchen
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} David Chen. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}