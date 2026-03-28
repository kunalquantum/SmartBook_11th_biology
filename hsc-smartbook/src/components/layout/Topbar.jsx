export default function Topbar({
  activeScreen,
  activeUnit,
  activeChapter,
  activeTopic,
  onOpenHome,
}) {
  const crumb =
    activeScreen === 'home'
      ? 'Browse the syllabus, jump into a unit, or continue where we left off.'
      : `${activeUnit.title} / Chapter ${activeChapter.number} / ${activeTopic.title}`;

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Book Navigation</p>
        <h1>{activeScreen === 'home' ? 'SmartBook Dashboard' : activeTopic.title}</h1>
        <p className="topbar-copy">{crumb}</p>
      </div>

      <div className="topbar-actions">
        {activeScreen === 'unit' ? (
          <button className="ghost-button" onClick={onOpenHome}>
            Back to Dashboard
          </button>
        ) : null}
        <div className="topbar-pill">
          <span>Current Unit</span>
          <strong>{activeUnit.id}</strong>
        </div>
      </div>
    </header>
  );
}
