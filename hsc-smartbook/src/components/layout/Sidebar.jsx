export default function Sidebar({
  units,
  activeUnitId,
  activeChapterId,
  activeTopicId,
  expandedChapterId,
  onSelectUnit,
  onToggleChapter,
  onSelectTopic,
}) {
  const activeUnit = units.find((unit) => unit.id === activeUnitId) ?? units[0];

  return (
    <aside className="sidebar simple-sidebar">
      <div className="sidebar-brand">
        <span className="nav-kicker">SmartBook</span>
        <strong>Biology 11th</strong>
        <small>Chapter -> Topic -> Simulator</small>
      </div>

      <div className="unit-switcher">
        <label htmlFor="unit-select" className="sidebar-label">
          Unit
        </label>
        <select
          id="unit-select"
          className="unit-select"
          value={activeUnitId}
          onChange={(event) => onSelectUnit(event.target.value)}
        >
          {units.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.id}: {unit.title}
            </option>
          ))}
        </select>
      </div>

      <div className="chapter-list">
        {activeUnit.chapters.map((chapter) => {
          const isExpanded = expandedChapterId === chapter.id;
          const isActive = activeChapterId === chapter.id;

          return (
            <div key={chapter.id} className={`chapter-group ${isActive ? 'is-active' : ''}`}>
              <button
                className={`chapter-toggle ${isExpanded ? 'is-open' : ''}`}
                onClick={() => onToggleChapter(chapter.id)}
              >
                <span>Chapter {chapter.number}</span>
                <strong>{chapter.title}</strong>
              </button>

              {isExpanded ? (
                <div className="topic-list">
                  {chapter.topics.map((topic) => (
                    <button
                      key={topic.id}
                      className={`topic-link ${activeTopicId === topic.id ? 'is-active' : ''}`}
                      onClick={() => onSelectTopic(chapter.id, topic.id)}
                    >
                      {topic.title}
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
