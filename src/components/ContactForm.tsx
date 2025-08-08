import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const WEBHOOK_URL = 'https://canary.discord.com/api/webhooks/1402815861789687848/ZAjMueIlu0GtLySB5587PX3h5BSpBcfRRVmRxNnVv8pSSXsS0y_rlwbUl-_zz3vDKqj2';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!email || !message) {
      toast({ title: 'Missing fields', description: 'Please provide your email and a message.' });
      return;
    }

    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `New portfolio contact` +
            `\n• Name: ${name || 'N/A'}` +
            `\n• Email: ${email}` +
            `\n• Message: ${message}`,
        }),
      });

      toast({ title: 'Sent', description: 'Your message has been delivered.' });
      form.reset();
    } catch (err) {
      toast({ title: 'Failed', description: 'Could not send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sharp-card p-8 space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm text-text-secondary font-mono">Name (optional)</label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full bg-surface border border-border px-4 py-3 text-foreground outline-none focus:ring-1 focus:ring-accent"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm text-text-secondary font-mono">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-surface border border-border px-4 py-3 text-foreground outline-none focus:ring-1 focus:ring-accent"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm text-text-secondary font-mono">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-surface border border-border px-4 py-3 text-foreground outline-none focus:ring-1 focus:ring-accent resize-none"
          placeholder="Write your message"
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="sharp-button px-6 py-3 uppercase tracking-wider disabled:opacity-60"
        >
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
