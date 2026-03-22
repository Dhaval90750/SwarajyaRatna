'use server';

export async function submitRegistration(formData: FormData) {
  // Automatically blocks execution and uses Mock mode if key isn't provided
  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Mock Registration captured:", Object.fromEntries(formData));
    return { success: true, message: "Mock success - WEB3FORMS_ACCESS_KEY missing." };
  }

  try {
    const object = Object.fromEntries(formData);
    const json = JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `New SwarajyaRatna Registration: ${object.fullName}`,
      ...object
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      return { success: true };
    } else {
      return { success: false, error: result.message };
    }
  } catch (error: any) {
    console.error("Email Error:", error);
    return { success: false, error: error.message };
  }
}

export async function submitContact(formData: FormData) {
  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Mock Contact captured:", Object.fromEntries(formData));
    return { success: true, message: "Mock success - WEB3FORMS_ACCESS_KEY missing." };
  }

  try {
    const object = Object.fromEntries(formData);
    const json = JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      subject: `New SwarajyaRatna Contact Message from ${object.name}`,
      ...object
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
        return { success: true };
    }
    return { success: false, error: result.message };
  } catch (error: any) {
    console.error("Email Error:", error);
    return { success: false, error: error.message };
  }
}
