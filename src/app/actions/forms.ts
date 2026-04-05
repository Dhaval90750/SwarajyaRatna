'use server';

export async function submitRegistration(formData: FormData) {
  const object = Object.fromEntries(formData);
  
  // Generate a Unique Mavala ID
  // Format: SRM-26-XXXXX (Swarajya Mavala - 2026 - 5 char random hex)
  const randomHex = Math.random().toString(16).slice(2, 7).toUpperCase();
  const mavalaId = `SRM-26-${randomHex}`;
  
  // Attach ID to both DB and Email
  const submissionData = {
    ...object,
    mavala_id: mavalaId,
    status: 'enrolled',
    enrolled_at: new Date().toISOString()
  };

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
        body: JSON.stringify(submissionData)
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
        subject: `New Mavala Enlisted: ${object.fullName} [${mavalaId}]`,
        mavala_id: mavalaId,
        ...object
      });
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });
    } catch (e) {}
  }

  return { success: true, mavalaId };
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
