export default async function handlePostAttatch(route, formDataPack) {
  try {
    const response = await fetch(route, {
      method: "POST",
      body: formDataPack,
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 500, error: error.message };
  }
}