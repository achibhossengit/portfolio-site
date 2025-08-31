import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully! Thank you for reaching out. I'll get back to you soon.");
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
                <FaEnvelope className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-accent">
                <FaMapMarkerAlt className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">Available Remotely</p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="font-semibold mb-2">Connect on Social</h3>
              <div className="flex gap-3">
                <button className="btn btn-outline btn-sm flex items-center gap-2">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </button>
                <button className="btn btn-outline btn-sm flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Compact */}
          <div className="card bg-surface border border-card-border p-6">
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="label">
                    <span className="label-text text-sm">Name</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    <span className="label-text text-sm">Email</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label">
                  <span className="label-text text-sm">Subject</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="label">
                  <span className="label-text text-sm">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="textarea textarea-bordered w-full"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;