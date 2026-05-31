import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Sparkles, AlertCircle, CheckCircle2, MessageSquare } from "lucide-react";

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validateField = (name, value) => {
    if (!value.trim()) {
      return "This field is required.";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
      }
    }
    if (name === "message" && value.trim().length < 10) {
      return "Message must be at least 10 characters.";
    }
    return null;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setTouched({ name: true, email: true, message: true });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      
      // Auto-clear success message
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
      color: "#24292e",
      glow: "rgba(255,255,255,0.06)",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "#0a66c2",
      glow: "rgba(10,102,194,0.15)",
    },
    {
      name: "Email",
      url: "mailto:subham@example.com",
      icon: Mail,
      color: "#ea4335",
      glow: "rgba(234,67,53,0.15)",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing particles */}
      <div
        className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full pointer-events-none filter blur-[150px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono-custom tracking-[0.2em] uppercase text-[var(--color-primary)] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Let's build <span className="gradient-text glow-text">together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info and socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-space font-bold text-[var(--color-text)]">
                Have an idea or a workspace opportunity?
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                I'm currently open to frontend engineering opportunities, architectural contract engagements, and
                creative collaborative projects. Reach out via email, social links, or use the direct contact form!
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="p-5 rounded-2xl glass-card flex items-center justify-between border-opacity-20 hover:border-opacity-65 transition-all duration-300"
                    style={{
                      boxShadow: `0 8px 32px 0 ${social.glow}`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{
                          background: social.color,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-space font-semibold text-sm text-[var(--color-text)]">
                        Connect on {social.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono-custom text-[var(--color-primary)]">
                      Visit ↗
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-[2rem] glass-card border-opacity-25 space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-opacity-5" style={{ borderColor: "var(--color-muted)" }}>
                <MessageSquare size={20} className="text-[var(--color-primary)]" />
                <h4 className="font-space font-bold text-lg">Send Message</h4>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-space font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-5 border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${
                      touched.name && errors.name
                        ? "border-red-500/50"
                        : touched.name && !errors.name
                        ? "border-green-500/50"
                        : "border-white/10 dark:border-white/10"
                    }`}
                  />
                  {touched.name && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      {errors.name ? (
                        <AlertCircle size={16} className="text-red-500" />
                      ) : (
                        <CheckCircle2 size={16} className="text-green-500" />
                      )}
                    </div>
                  )}
                </div>
                {touched.name && errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-space font-semibold"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-space font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-5 border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${
                      touched.email && errors.email
                        ? "border-red-500/50"
                        : touched.email && !errors.email
                        ? "border-green-500/50"
                        : "border-white/10 dark:border-white/10"
                    }`}
                  />
                  {touched.email && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      {errors.email ? (
                        <AlertCircle size={16} className="text-red-500" />
                      ) : (
                        <CheckCircle2 size={16} className="text-green-500" />
                      )}
                    </div>
                  )}
                </div>
                {touched.email && errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-space font-semibold"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-space font-bold uppercase tracking-wider text-[var(--color-muted)]">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Let's build something exceptional..."
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-black bg-opacity-25 dark:bg-white dark:bg-opacity-5 border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${
                      touched.message && errors.message
                        ? "border-red-500/50"
                        : touched.message && !errors.message
                        ? "border-green-500/50"
                        : "border-white/10 dark:border-white/10"
                    }`}
                  />
                  {touched.message && (
                    <div className="absolute right-4 top-6">
                      {errors.message ? (
                        <AlertCircle size={16} className="text-red-500" />
                      ) : (
                        <CheckCircle2 size={16} className="text-green-500" />
                      )}
                    </div>
                  )}
                </div>
                {touched.message && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-space font-semibold"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-space font-bold text-sm text-[#020408] cursor-pointer magnetic-btn disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
                  boxShadow: "0 0 20px rgba(56,189,248,0.25)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Sparkles size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Submit Status Popups */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-space font-semibold flex items-center gap-2.5"
                  >
                    <CheckCircle2 size={16} />
                    Message Sent Successfully! I'll get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
