import "./App.css";
import { useEffect, useState } from "react";
import { getTopics } from "./services/api";
import TopicList from "./components/TopicList";
import AddTopic from "./components/AddTopic";

export default function App() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadTopics() {
    setLoading(true);
    const data = await getTopics();
    setTopics(data);
    setLoading(false);
  }

  useEffect(() => {
    loadTopics();
  }, []);

  return (
   <div className="container">
    <h1>Controle de Revisões 📖</h1>

      <AddTopic onAdd={loadTopics} />

      {loading ? (
        <p>Carregando...</p>
      ) : topics.length === 0 ? (
        <p>Nenhum conteúdo ainda.</p>
      ) : (
        <TopicList topics={topics} onUpdate={loadTopics} />
      )}
    </div>
  );
}