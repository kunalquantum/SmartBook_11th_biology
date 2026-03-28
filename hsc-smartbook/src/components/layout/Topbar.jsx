export default function Topbar({
  activeScreen,
  activeUnit,
  activeChapter,
  activeTopic,
  onOpenHome,
}) {
  const crumb =
    activeScreen === 'home'
      ? 'Pick a unit and continue from the last selected topic.'
      : `Chapter ${activeChapter.number} / ${activeTopic.title}`;

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">{activeScreen === 'home' ? 'Dashboard' : activeUnit.title}</p>
        <h1>{activeScreen === 'home' ? 'SmartBook Biology' : activeTopic.title}</h1>
        <p className="topbar-copy">{crumb}</p>
      </div>

      <div className="topbar-actions">
        {activeScreen === 'unit' ? (
          <button className="ghost-button" onClick={onOpenHome}>
            Back to Dashboard
          </button>
        ) : null}
        <div className="topbar-pill">
          <span>Current</span>
          <strong>{activeScreen === 'home' ? activeUnit.id : `Ch ${activeChapter.number}`}</strong>
        </div>
      </div>
    </header>
  );
}
