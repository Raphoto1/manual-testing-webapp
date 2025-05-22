export default async function handlePostText(route, formDataPack) { 
fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataPack),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
console.log("data.status", data.status);

        return  { status: data.status};
    })
    .catch((error) => {
        console.error("Error:", error);
        return error;
    });
}