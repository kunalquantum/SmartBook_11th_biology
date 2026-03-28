import PhotosynthesisLab from './unit4-plant-physiology/PhotosynthesisLab';

function createLearningPrompts(topic) {
  return [
    `Explore ${topic.visualizer} as the main interactive frame for this topic.`,
    `Break the topic into ${topic.subtopics.length} guided steps.`,
    `Turn definitions into click-to-reveal explanations and comparisons.`,
  ];
}

function ChapterRail({ unit, activeChapterId, onSelectChapter }) {
  return (
    <section className="chapter-rail">
      {unit.chapters.map((chapter) => (
        <button
          key={chapter.id}
          className={`chapter-rail-card ${chapter.id === activeChapterId ? 'is-active' : ''}`}
          onClick={() => onSelectChapter(chapter.id)}
        >
          <span>Chapter {chapter.number}</span>
          <strong>{chapter.title}</strong>
          <small>{chapter.topics.length} topics</small>
        </button>
      ))}
    </section>
  );
}

function TopicBrowser({ chapter, activeTopicId, onSelectTopic }) {
  return (
    <section className="topic-browser">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Topics</p>
          <h2>{chapter.title}</h2>
        </div>
        <p>{chapter.description}</p>
      </div>

      <div className="topic-browser-grid">
        {chapter.topics.map((topic, index) => (
          <button
            key={topic.id}
            className={`topic-browser-card ${topic.id === activeTopicId ? 'is-active' : ''}`}
            onClick={() => onSelectTopic(chapter.id, topic.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{topic.title}</strong>
            <small>{topic.visualizer}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

function TopicVisualizer({ unit, chapter, topic }) {
  const learningPrompts = createLearningPrompts(topic);

  return (
    <section className="visualizer-shell">
      <article className="visualizer-hero">
        <div>
          <p className="eyebrow">{unit.title}</p>
          <h2>{topic.title}</h2>
          <p>{chapter.description}</p>
        </div>
        <div className="visualizer-badge">
          <span>Suggested Visualizer</span>
          <strong>{topic.visualizer}</strong>
        </div>
      </article>

      <div className="visualizer-grid">
        <article className="panel-card">
          <p className="eyebrow">Subtopics</p>
          <h3>What this visualizer should cover</h3>
          <ul className="plain-list">
            {topic.subtopics.map((subtopic) => (
              <li key={subtopic}>{subtopic}</li>
            ))}
          </ul>
        </article>

        <article className="panel-card">
          <p className="eyebrow">Interaction Plan</p>
          <h3>Generic experience blueprint</h3>
          <ul className="plain-list">
            {learningPrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </article>

        <article className="panel-card accent-card">
          <p className="eyebrow">Build Prompt</p>
          <h3>Next simulator target</h3>
          <p className="callout-copy">
            Build a focused interactive module for <strong>{topic.title}</strong> that teaches:
          </p>
          <div className="subtopic-pills">
            {topic.subtopics.map((subtopic) => (
              <span key={subtopic}>{subtopic}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default function UnitPage({
  unit,
  chapter,
  topic,
  onSelectChapter,
  onSelectTopic,
}) {
  const isPhotosynthesisChapter = chapter.id === 'photosynthesis';

  return (
    <main className="page-shell">
      <section className="unit-banner">
        <div>
          <p className="eyebrow">{unit.id}</p>
          <h2>{unit.title}</h2>
          <p>{unit.summary}</p>
        </div>
        <div className="unit-banner-meta">
          <span>{unit.chapters.length} chapters</span>
          <strong>{chapter.title}</strong>
        </div>
      </section>

      <ChapterRail
        unit={unit}
        activeChapterId={chapter.id}
        onSelectChapter={onSelectChapter}
      />

      <TopicBrowser
        chapter={chapter}
        activeTopicId={topic.id}
        onSelectTopic={onSelectTopic}
      />

      {isPhotosynthesisChapter ? (
        <PhotosynthesisLab chapter={chapter} topic={topic} />
      ) : (
        <TopicVisualizer unit={unit} chapter={chapter} topic={topic} />
      )}
    </main>
  );
}
