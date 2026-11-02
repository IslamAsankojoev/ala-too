import type { Lead } from "./lead-schema";

/**
 * The site is exported as static files, so there is no server of our own.
 * Leads are POSTed as JSON to NEXT_PUBLIC_LEAD_ENDPOINT (set at build time) —
 * e.g. Formspree, Getform, a Google Apps Script web app or your own PHP script.
 * Without an endpoint the lead is only logged (useful for development).
 */
export async function submitLead(lead: Lead & { source?: string }) {
  const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
  const payload = { ...lead, phone: `+996${lead.phone}`, page: location.pathname };

  if (!endpoint) {
    console.info("[lead] NEXT_PUBLIC_LEAD_ENDPOINT is not set, lead not sent:", payload);
    return;
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Lead endpoint responded ${res.status}`);
}
