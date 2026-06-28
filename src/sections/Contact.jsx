import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
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

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
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

const Leetcode = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const GeeksForGeeks = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    {...props}
  >
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" />
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
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: false }));
    setErrors((prev) => ({ ...prev, [name]: null }));
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

    fetch("https://formsubmit.co/ajax/dev.subham07@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: form.name,
        Email: form.email,
        Message: form.message,
        _subject: `New Portfolio Message from ${form.name}`
      })
    })
      .then((res) => {
        if (res.ok) {
          setSubmitStatus("success");
          setForm({ name: "", email: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
        setTouched({});
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch(() => {
        setSubmitStatus("error");
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/saha007subham",
      icon: Github,
      color: "#24292e",
      glow: "rgba(255,255,255,0.06)",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saha007subham/",
      icon: Linkedin,
      color: "#0a66c2",
      glow: "rgba(10,102,194,0.15)",
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/devSubham07/",
      icon: Leetcode,
      color: "#ffa116",
      glow: "rgba(255,161,22,0.15)",
    },
    {
      name: "Geeks for Geeks",
      url: "https://www.geeksforgeeks.org/profile/saha01subham?tab=activity",
      icon: GeeksForGeeks,
      color: "#308d46",
      glow: "rgba(48,141,70,0.15)",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing particles */}
      <div
        className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full pointer-events-none filter blur-[150px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono-custom tracking-[0.2em] uppercase text-[var(--color-primary)] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Let's build{" "}
            <span className="gradient-text glow-text">together</span>
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
                I'm currently open to frontend engineering opportunities,
                architectural contract engagements, and creative collaborative
                projects. Reach out via email, social links, or use the direct
                contact form!
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
              <div
                className="flex items-center gap-3 pb-4 border-b border-opacity-5"
                style={{ borderColor: "var(--color-muted)" }}
              >
                <MessageSquare
                  size={20}
                  className="text-[var(--color-primary)]"
                />
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
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-[var(--color-input-bg)] border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${touched.name && errors.name
                      ? "border-red-500/50"
                      : touched.name && !errors.name
                        ? "border-green-500/50"
                        : "border-[var(--color-input-border)]"
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
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-[var(--color-input-bg)] border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${touched.email && errors.email
                      ? "border-red-500/50"
                      : touched.email && !errors.email
                        ? "border-green-500/50"
                        : "border-[var(--color-input-border)]"
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
                    className={`w-full px-5 py-4 rounded-xl font-space font-semibold text-sm bg-[var(--color-input-bg)] border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] ${touched.message && errors.message
                      ? "border-red-500/50"
                      : touched.message && !errors.message
                        ? "border-green-500/50"
                        : "border-[var(--color-input-border)]"
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
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-space font-semibold flex items-center gap-2.5"
                  >
                    <AlertCircle size={16} />
                    Failed to send message. Please try again later or email directly.
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
