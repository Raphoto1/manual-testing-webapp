export default async function handlePostText(route, formDataPack) {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataPack),
    });

    const data = await response.json();
    
    return { status: response.status, data };
  } catch (error) {
    return { status: 500, error: error.message };
  }
}