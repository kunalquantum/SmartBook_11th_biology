export default function Topbar({ activeUnit, activeChapter, activeTopic }) {
  return (
    <header className="topbar simple-topbar">
      <div>
        <p className="eyebrow">{activeUnit.title}</p>
        <h1>{activeTopic.title}</h1>
        <p className="topbar-copy">Chapter {activeChapter.number}: {activeChapter.title}</p>
      </div>

      <div className="topbar-pill">
        <span>Visualizer</span>
        <strong>{activeTopic.visualizer}</strong>
      </div>
    </header>
  );
}
