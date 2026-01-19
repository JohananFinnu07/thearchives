import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SubmitGemForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    gemName: '',
    location: '',
    description: '',
    yourName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build email body
    const emailBody = `
New Hidden Gem Submission

Gem Name: ${formData.gemName}
Location: ${formData.location}

Description:
${formData.description}

Submitted by: ${formData.yourName || 'Anonymous'}
Contact Email: ${formData.email || 'Not provided'}
    `.trim();

    // Open mailto link
    const mailtoLink = `mailto:johananfinnutalari@gmail.com?subject=${encodeURIComponent(`Hidden Gem Discovery: ${formData.gemName}`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Show success state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        gemName: '',
        location: '',
        description: '',
        yourName: '',
        email: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full gradient-forest text-primary-foreground shadow-elevated hover:scale-105 transition-transform"
        aria-label="Share a hidden gem"
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium text-sm hidden sm:inline">Share a Gem</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[calc(100%-2rem)] sm:w-[420px] max-h-[85vh] overflow-y-auto bg-background rounded-2xl shadow-elevated border border-border"
            >
              {/* Header */}
              <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Share a Hidden Gem
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Help us discover more treasures
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                        Thank You!
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Your discovery has been submitted. We'll review it and add it to our archives.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <p className="text-muted-foreground text-sm">
                        Found something special during your travels? A rare spice, traditional craft, or local delicacy? 
                        Let us know and help preserve cultural heritage.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="gemName" className="block text-sm font-medium text-foreground mb-1.5">
                            What did you discover? *
                          </label>
                          <Input
                            id="gemName"
                            name="gemName"
                            value={formData.gemName}
                            onChange={handleChange}
                            placeholder="e.g., Wild Bamboo Rice, Tribal Pottery"
                            required
                            className="bg-muted/50"
                          />
                        </div>

                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">
                            Where did you find it? *
                          </label>
                          <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g., Araku Valley, Andhra Pradesh"
                            required
                            className="bg-muted/50"
                          />
                        </div>

                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
                            Tell us more *
                          </label>
                          <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe what makes it special, its cultural significance, or how it's made..."
                            rows={4}
                            required
                            className="bg-muted/50 resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="yourName" className="block text-sm font-medium text-foreground mb-1.5">
                              Your Name
                            </label>
                            <Input
                              id="yourName"
                              name="yourName"
                              value={formData.yourName}
                              onChange={handleChange}
                              placeholder="Optional"
                              className="bg-muted/50"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Optional"
                              className="bg-muted/50"
                            />
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full gradient-forest text-primary-foreground"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Discovery
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting, you agree that we may feature your discovery on TheArchives.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubmitGemForm;
