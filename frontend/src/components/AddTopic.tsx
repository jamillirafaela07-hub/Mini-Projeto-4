import { useState } from "react";
import { createTopic } from "../services/api";

export default function AddTopic({ onAdd }: any) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!title || !subject) {
      alert("Preencha todos os campos!");
      return;
    }

    await createTopic({
      title,
      subject,
      reviewed: false,
    });

    setTitle("");
    setSubject("");
    onAdd();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Conteúdo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Matéria"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}