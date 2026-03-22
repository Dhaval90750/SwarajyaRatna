'use server';

export async function submitRegistration(formData: FormData) {
  const object = Object.fromEntries(formData);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/registrations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(object)
      });
    } catch (e) {
      console.error("Supabase Save Error:", e);
    }
  }

  // Fallback to Web3Forms for email notification if key exists
  if (process.env.WEB3FORMS_ACCESS_KEY) {
    try {
      const json = JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Registration: ${object.fullName}`,
        ...object
      });
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
    } catch (e) {}
  }

  return { success: true };
}

export async function submitContact(formData: FormData) {
  const object = Object.fromEntries(formData);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(object)
      });
    } catch (e) {
      console.error("Supabase Save Error:", e);
    }
  }

  if (process.env.WEB3FORMS_ACCESS_KEY) {
    try {
      const json = JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Message: ${object.name}`,
        ...object
      });
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
    } catch (e) {}
  }

  return { success: true };
}
