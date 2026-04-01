type Topic = {
  id: number;
  titulo: string;
  assunto: string;
  revisado: string;
};

type Props = {
  topics: Topic[];
  onUpdate: () => void;
};

import TopicItem from "./TopicItem";

export default function TopicList({ topics, onUpdate }: Props) {
  return (
    <div>
      {topics.map((topic) => (
        <TopicItem key={topic.id} topic={topic} onUpdate={onUpdate} />
      ))}
    </div>
  );
}