import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // env variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const contactTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
  const replyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      // send email to YOU
      await emailjs.sendForm(
        serviceId,
        contactTemplate,
        formRef.current,
        publicKey
      );

      // small delay (avoids rate issues)
      await new Promise((res) => setTimeout(res, 300));

      // send confirmation to USER
      await emailjs.sendForm(
        serviceId,
        replyTemplate,
        formRef.current,
        publicKey
      );

      setStatus("✓ Message sent — check your email");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-xl px-4 py-10">
      <div className="space-y-6">

        {/* header */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="text-3xl font-semibold">Get in touch</h1>
        </div>

        {/* form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-border px-4 py-3"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full rounded-xl border border-border px-4 py-3"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-xl border border-border px-4 py-3"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            required
            className="w-full rounded-xl border border-border px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full border border-border px-5 py-2.5 text-sm transition-opacity hover:opacity-70 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>

        {/* status */}
        {status && (
          <p className="text-sm text-muted-foreground text-center">
            {status}
          </p>
        )}

      </div>
    </section>
  );
}