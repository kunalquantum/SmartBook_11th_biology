function UnitSpotlight({ unit, onOpen }) {
  const chapterCount = unit.chapters.length;
  const topicCount = unit.chapters.reduce((count, chapter) => count + chapter.topics.length, 0);

  return (
    <article className="spotlight-card compact-card">
      <div>
        <p className="eyebrow">{unit.id}</p>
        <h3>{unit.title}</h3>
        <p>{unit.summary}</p>
      </div>
      <div className="spotlight-footer">
        <div className="spotlight-meta">
          <span>{chapterCount} chapters</span>
          <span>{topicCount} topics</span>
        </div>
        <button className="primary-button" onClick={onOpen}>
          Open
        </button>
      </div>
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
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Maharashtra Board Class 11 Biology</p>
          <h2>One clean place to open any biology unit.</h2>
          <p className="hero-text">
            Pick a unit, jump into a chapter, and focus on one topic at a time.
          </p>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={onResume}>
            Continue
          </button>
          <div className="resume-card">
            <span>Resume from</span>
            <strong>{activeUnit.title}</strong>
            <small>{activeTopic.title}</small>
          </div>
        </div>

        <div className="hero-inline-stats">
          <span>{syllabusStats.units} units</span>
          <span>{syllabusStats.chapters} chapters</span>
          <span>{syllabusStats.topics} topics</span>
        </div>
      </section>

      <section className="section-stack">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Units</p>
            <h2>Choose a unit</h2>
          </div>
        </div>

        <div className="spotlight-grid compact-grid">
          {units.map((unit) => (
            <UnitSpotlight key={unit.id} unit={unit} onOpen={() => onOpenUnit(unit.id)} />
          ))}
        </div>
      </section>
    </main>
  );
}
