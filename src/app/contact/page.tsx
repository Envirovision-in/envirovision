'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send form data via mailto link or API
    // For now, we'll open the default email client with the form data
    const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:marketing@envirovision.in?subject=${subject}&body=${body}`;

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#1A1F2E] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#00968e] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#007a73] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00968e] via-[#007a73] to-[#005f5a] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-2xl font-bold">Let&apos;s Connect</p>
                  <p className="text-white/80 mt-2">We&apos;d love to hear from you</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-[#00968e] font-semibold text-sm uppercase tracking-wider mb-4">
                Join the Movement
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Innovate for a Sustainable India
              </h1>
              <p className="text-lg text-gray-300">
                Whether you&apos;re a city planner, business owner, or concerned citizen, EnviroVision has a solution for you. Together, we can tackle pollution, transform waste, and pave the way for a greener tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1F2E] mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-[#718096] mb-10">
                Have questions about our solutions? Want to explore partnership opportunities? We&apos;re here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1F2E] mb-1">Email Us</h3>
                    <a href="mailto:marketing@envirovision.in" className="text-[#718096] hover:text-[#00968e] transition-colors">
                      marketing@envirovision.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00968e] to-[#007a73] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1F2E] mb-1">Call Us</h3>
                    <a href="tel:+91XXXXXXXXXX" className="text-[#718096] hover:text-[#00968e] transition-colors">
                      +91 XXX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007a73] to-[#005f5a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1F2E] mb-1">Location</h3>
                    <p className="text-[#718096]">India</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-[#F7FAFC] rounded-2xl border border-[#E2E8F0]">
                <h3 className="font-semibold text-[#1A1F2E] mb-4">Office Hours</h3>
                <div className="space-y-2 text-[#718096]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F7FAFC] rounded-3xl p-8 lg:p-10 border border-[#E2E8F0]">
              <h2 className="text-2xl font-bold text-[#1A1F2E] mb-2">
                Want to know more?
              </h2>
              <p className="text-[#718096] mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#00968e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F2E] mb-2">Thank You!</h3>
                  <p className="text-[#718096]">
                    Your message has been prepared. Please send the email that opened in your mail client.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-[#00968e] hover:text-[#007a73] font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D3748] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00968e] focus:ring-2 focus:ring-[#00968e]/20 outline-none transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D3748] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00968e] focus:ring-2 focus:ring-[#00968e]/20 outline-none transition-all bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2D3748] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00968e] focus:ring-2 focus:ring-[#00968e]/20 outline-none transition-all bg-white"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D3748] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#00968e] focus:ring-2 focus:ring-[#00968e]/20 outline-none transition-all resize-none bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <p className="text-sm text-[#718096]">
                    Our privacy policy applies.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00968e] hover:bg-[#007a73] text-white px-8 py-4 rounded-xl font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
