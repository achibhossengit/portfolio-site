import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in discussing opportunities or collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info - Compact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-primary">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-accent">
                <MapPin className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Available Remotely</p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="font-semibold mb-2">Connect on Social</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form - Compact */}
          <Card className="p-6 bg-surface border-card-border">
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-sm">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero"
                size="default"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;