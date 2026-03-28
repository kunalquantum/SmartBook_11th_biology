export default function Sidebar({
  units,
  activeScreen,
  activeUnitId,
  activeChapterId,
  onHome,
  onOpenUnit,
  onSelectChapter,
}) {
  return (
    <aside className="sidebar">
      <button className={`nav-home ${activeScreen === 'home' ? 'is-active' : ''}`} onClick={onHome}>
        <span className="nav-kicker">SmartBook</span>
        <strong>Biology 11th</strong>
        <small>Interactive textbook structure</small>
      </button>

      <div className="sidebar-group">
        <p className="sidebar-label">Units</p>
        {units.map((unit) => {
          const isUnitActive = unit.id === activeUnitId;

          return (
            <div key={unit.id} className="sidebar-unit">
              <button
                className={`sidebar-unit-button ${isUnitActive ? 'is-active' : ''}`}
                onClick={() => onOpenUnit(unit.id)}
              >
                <span>{unit.id}</span>
                <strong>{unit.title}</strong>
              </button>

              {isUnitActive ? (
                <div className="sidebar-chapters">
                  {unit.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      className={`sidebar-chapter-button ${chapter.id === activeChapterId ? 'is-active' : ''}`}
                      onClick={() => onSelectChapter(chapter.id)}
                    >
                      <span>{chapter.number}</span>
                      <strong>{chapter.title}</strong>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
