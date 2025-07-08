
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, ExternalLink, Mail, User, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "Discord",
      description: "Message me directly",
      value: "959238547133595648",
      action: "Copy ID",
      icon: MessageCircle,
      color: "bg-[#5865F2]"
    },
    {
      name: "Roblox",
      description: "Check out my profile",
      value: "Visit Profile",
      link: "https://www.roblox.com/users/37294166/profile",
      icon: ExternalLink,
      color: "bg-green-500"
    },
    {
      name: "Spotify",
      description: "See what I'm listening to",
      value: "Follow Me",
      link: "https://open.spotify.com/user/853y7u5be5lg8sewleuplhkjx",
      icon: ExternalLink,
      color: "bg-green-400"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Discord ID copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold glow-text mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can 
              build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-card border border-border rounded-lg p-8 glow-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Mail className="mr-3 text-primary" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full glow-border">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Social Links & Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-card border border-border rounded-lg p-8 glow-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <User className="mr-3 text-primary" />
                  Connect With Me
                </h2>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <div 
                      key={social.name}
                      className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:glow-border transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg ${social.color} mr-4`}>
                          <social.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.description}</div>
                        </div>
                      </div>
                      
                      {social.link ? (
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.value}
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => copyToClipboard(social.value)}
                        >
                          {social.action}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-card border border-border rounded-lg p-8 glow-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Current Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm border border-green-500/30">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Response Time</span>
                    <span className="text-muted-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Timezone</span>
                    <span className="text-muted-foreground">Flexible</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-card border border-border rounded-lg p-8 glow-border">
                <h3 className="text-xl font-bold mb-4 text-primary">Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Game Development</li>
                  <li>• Security Auditing</li>
                  <li>• Full-Stack Development</li>
                  <li>• System Architecture</li>
                  <li>• Technical Consulting</li>
                  <li>• Code Review & Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
