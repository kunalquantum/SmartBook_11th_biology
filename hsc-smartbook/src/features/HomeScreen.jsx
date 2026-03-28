function UnitSpotlight({ unit, onOpen }) {
  const chapterCount = unit.chapters.length;
  const topicCount = unit.chapters.reduce((count, chapter) => count + chapter.topics.length, 0);

  return (
    <article className="spotlight-card">
      <p className="eyebrow">{unit.id}</p>
      <h3>{unit.title}</h3>
      <p>{unit.summary}</p>
      <div className="spotlight-meta">
        <span>{chapterCount} chapters</span>
        <span>{topicCount} topics</span>
      </div>
      <button className="primary-button" onClick={onOpen}>
        Open Unit
      </button>
    </article>
  );
}

export default function HomeScreen({
  units,
  syllabusStats,
  onOpenUnit,
  onResume,
  activeUnit,
  activeTopic,
}) {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Maharashtra Board • Class 11 Biology</p>
          <h2>From textbook chapters to explorable biology experiences.</h2>
          <p className="hero-text">
            This smartbook is structured as a book first, but every topic is designed
            to become a practical visualizer, simulator, or guided explainer.
          </p>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={onResume}>
            Continue Learning Path
          </button>
          <div className="resume-card">
            <span>Resume from</span>
            <strong>{activeUnit.title}</strong>
            <small>{activeTopic.title}</small>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <article>
          <span>Units</span>
          <strong>{syllabusStats.units}</strong>
        </article>
        <article>
          <span>Chapters</span>
          <strong>{syllabusStats.chapters}</strong>
        </article>
        <article>
          <span>Topics</span>
          <strong>{syllabusStats.topics}</strong>
        </article>
        <article>
          <span>Subtopics</span>
          <strong>{syllabusStats.subtopics}</strong>
        </article>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Units</p>
            <h2>Choose a biology arc</h2>
          </div>
          <p>
            Each unit contains its chapter structure plus topic-level visualizer ideas,
            so we can build one simulator at a time without losing the syllabus map.
          </p>
        </div>

        <div className="spotlight-grid">
          {units.map((unit) => (
            <UnitSpotlight key={unit.id} unit={unit} onOpen={() => onOpenUnit(unit.id)} />
          ))}
        </div>
      </section>
    </main>
  );
}
