import PhotosynthesisLab from './unit4-plant-physiology/PhotosynthesisLab';

function createLearningPrompts(topic) {
  return [
    `Use ${topic.visualizer} as the main interactive view.`,
    `Teach ${topic.subtopics.length} subtopics with simple guided steps.`,
    'Keep the interface focused on one concept at a time.',
  ];
}

function TopicVisualizer({ topic }) {
  const learningPrompts = createLearningPrompts(topic);

  return (
    <section className="visualizer-shell simple-visualizer-shell">
      <div className="visualizer-grid generic-visualizer-grid">
        <article className="panel-card">
          <p className="eyebrow">Subtopics</p>
          <h3>{topic.title}</h3>
          <ul className="plain-list">
            {topic.subtopics.map((subtopic) => (
              <li key={subtopic}>{subtopic}</li>
            ))}
          </ul>
        </article>

        <article className="panel-card">
          <p className="eyebrow">Interaction Plan</p>
          <h3>{topic.visualizer}</h3>
          <ul className="plain-list">
            {learningPrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default function UnitPage({ chapter, topic }) {
  const isPhotosynthesisChapter = chapter.id === 'photosynthesis';

  return isPhotosynthesisChapter ? (
    <PhotosynthesisLab chapter={chapter} topic={topic} />
  ) : (
    <TopicVisualizer topic={topic} />
  );
}
