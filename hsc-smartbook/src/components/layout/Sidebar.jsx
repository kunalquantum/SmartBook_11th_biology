export default function Sidebar({
  units,
  activeScreen,
  activeUnitId,
  onHome,
  onOpenUnit,
}) {
  return (
    <aside className="sidebar">
      <button className={`nav-home ${activeScreen === 'home' ? 'is-active' : ''}`} onClick={onHome}>
        <span className="nav-kicker">SmartBook</span>
        <strong>Biology 11th</strong>
        <small>Clean chapter navigation</small>
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
                <small>{unit.chapters.length} chapters</small>
              </button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
