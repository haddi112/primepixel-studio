import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || !name.trim() || !email.trim() || !message.trim()) return;
    setFormState("loading");
    setErrorMsg("");
    try {
      await actor.submitForm(name.trim(), email.trim(), message.trim());
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState("error");
      setErrorMsg(
        "Something went wrong. Please try again or email us directly.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.10 0.015 240) 0%, oklch(0.11 0.012 265) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.56 0.22 265 / 0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.56 0.22 265 / 0.15)",
              border: "1px solid oklch(0.56 0.22 265 / 0.3)",
              color: "oklch(0.72 0.18 265)",
            }}
          >
            Let&apos;s Talk
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <a
            href="mailto:muhammadhaddi74@gmail.com"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Mail size={16} />
            <span>muhammadhaddi74@gmail.com</span>
          </a>
        </div>

        <div className="fade-in">
          <div className="glass-strong rounded-2xl p-8 md:p-10">
            {formState === "success" ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.72 0.22 145 / 0.2)",
                    border: "1px solid oklch(0.72 0.22 145 / 0.4)",
                  }}
                >
                  <CheckCircle2
                    size={32}
                    style={{ color: "var(--brand-green)" }}
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/60">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState("idle")}
                  className="mt-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white glass hover:bg-white/10 transition-all"
                  data-ocid="contact.secondary_button"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    required
                    data-ocid="contact.input"
                    className="contact-field w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    data-ocid="contact.input"
                    className="contact-field w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    data-ocid="contact.textarea"
                    className="contact-field w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none resize-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                {formState === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-2 p-3 rounded-lg text-sm"
                    style={{
                      background: "oklch(0.577 0.245 27 / 0.15)",
                      border: "1px solid oklch(0.577 0.245 27 / 0.3)",
                      color: "oklch(0.75 0.2 30)",
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  data-ocid="contact.submit_button"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold disabled:opacity-60"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span data-ocid="contact.loading_state">Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
