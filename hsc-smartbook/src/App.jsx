import { biologyUnits, syllabusStats } from './data/units';

function TopicCard({ topic }) {
  return (
    <article className="topic-card">
      <div className="topic-header">
        <h4>{topic.title}</h4>
        <span>{topic.visualizer}</span>
      </div>
      <ul>
        {topic.subtopics.map((subtopic) => (
          <li key={subtopic}>{subtopic}</li>
        ))}
      </ul>
    </article>
  );
}

function ChapterCard({ chapter }) {
  return (
    <section className="chapter-card">
      <div className="chapter-topline">
        <p className="eyebrow">Chapter {chapter.number}</p>
        <h3>{chapter.title}</h3>
      </div>
      <p className="chapter-description">{chapter.description}</p>
      <div className="topic-grid">
        {chapter.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
}

function UnitSection({ unit }) {
  return (
    <section className="unit-section">
      <div className="unit-heading">
        <div>
          <p className="eyebrow">{unit.id}</p>
          <h2>{unit.title}</h2>
        </div>
        <p>{unit.summary}</p>
      </div>
      <div className="chapter-grid">
        {unit.chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Maharashtra Board • Class 11 Biology</p>
          <h1>SmartBook Biology</h1>
          <p className="hero-text">
            A structured interactive textbook blueprint with units, chapters,
            topics, subtopics, and suggested visualizer experiences.
          </p>
        </div>
        <div className="stats-panel">
          <div>
            <span>Units</span>
            <strong>{syllabusStats.units}</strong>
          </div>
          <div>
            <span>Chapters</span>
            <strong>{syllabusStats.chapters}</strong>
          </div>
          <div>
            <span>Topics</span>
            <strong>{syllabusStats.topics}</strong>
          </div>
          <div>
            <span>Subtopics</span>
            <strong>{syllabusStats.subtopics}</strong>
          </div>
        </div>
      </section>

      {biologyUnits.map((unit) => (
        <UnitSection key={unit.id} unit={unit} />
      ))}
    </main>
  );
}
