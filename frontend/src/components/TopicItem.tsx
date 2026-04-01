import { useState } from "react";
import { updateTopic, deleteTopic } from "../services/api";

type Topic = {
  id: number;
  titulo: string;
  assunto: string;
  revisado: string;
  resumo?: string;
};

type Props = {
  topic: Topic;
  onUpdate: () => void;
};

export default function TopicItem({ topic, onUpdate }: Props) {
  const [showResumo, setShowResumo] = useState(false);
  const [resumo, setResumo] = useState(topic.resumo || "");

  async function toggleReviewed() {
    let novoStatus = "não iniciado";

    if (topic.revisado === "não iniciado") {
      novoStatus = "em andamento";
    } else if (topic.revisado === "em andamento") {
      novoStatus = "ok";
    } else {
      novoStatus = "não iniciado";
    }

    await updateTopic(topic.id, {
      revisado: novoStatus,
    });

    onUpdate();
  }

  async function salvarResumo() {
    await updateTopic(topic.id, { resumo });
    setShowResumo(false);
    onUpdate();
  }

  async function handleDelete() {
    const confirmDelete = window.confirm("Tem certeza?");
    if (!confirmDelete) return;

    await deleteTopic(topic.id);
    onUpdate();
  }

  return (
    <div className="card">
      <strong>{topic.titulo}</strong> - {topic.assunto}
      <br /><br />

      <button onClick={toggleReviewed}>
        Status:{" "}
        <span
          className={
            topic.revisado === "ok"
              ? "status-ok"
              : topic.revisado === "em andamento"
              ? "status-andamento"
              : "status-nao"
          }
        >
          {topic.revisado}
        </span>
      </button>

      <button onClick={handleDelete} style={{ marginLeft: 10 }}>
        Excluir
      </button>

      {/* BOTÃO DE RESUMO */}
      {topic.revisado === "ok" && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setShowResumo(!showResumo)}>
            {showResumo ? "Fechar resumo" : "Adicionar resumo"}
          </button>

          {showResumo && (
            <div style={{ marginTop: 10 }}>
              <textarea
                placeholder="Escreva um resumo..."
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />

              <button onClick={salvarResumo} style={{ marginTop: 5 }}>
                Salvar
              </button>
            </div>
          )}
        </div>
      )}

      {/* MOSTRAR RESUMO */}
      {topic.resumo && (
        <p style={{ marginTop: 10, color: "#555" }}>
              {topic.resumo}
        </p>
      )}
    </div>
  );
}