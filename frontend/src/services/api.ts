export const API_URL = "http://localhost:3001/topics";

export async function getTopics() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTopic(topic: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(topic),
  });
  return res.json();
}

export async function updateTopic(id: number, data: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTopic(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}