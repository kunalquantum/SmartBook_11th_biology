import { useMemo, useState } from 'react';
import { Sidebar, Topbar } from './components/layout';
import { UnitPage } from './features';
import { biologyUnits } from './data/units';

function getDefaultSelection() {
  const firstUnit = biologyUnits[0];
  const firstChapter = firstUnit.chapters[0];
  const firstTopic = firstChapter.topics[0];

  return {
    unitId: firstUnit.id,
    chapterId: firstChapter.id,
    topicId: firstTopic.id,
  };
}

function findUnit(unitId) {
  return biologyUnits.find((unit) => unit.id === unitId) ?? biologyUnits[0];
}

function findChapter(unit, chapterId) {
  return unit.chapters.find((chapter) => chapter.id === chapterId) ?? unit.chapters[0];
}

function findTopic(chapter, topicId) {
  return chapter.topics.find((topic) => topic.id === topicId) ?? chapter.topics[0];
}

export default function App() {
  const [selection, setSelection] = useState(getDefaultSelection);
  const [expandedChapterId, setExpandedChapterId] = useState(selection.chapterId);

  const activeUnit = useMemo(() => findUnit(selection.unitId), [selection.unitId]);
  const activeChapter = useMemo(
    () => findChapter(activeUnit, selection.chapterId),
    [activeUnit, selection.chapterId],
  );
  const activeTopic = useMemo(
    () => findTopic(activeChapter, selection.topicId),
    [activeChapter, selection.topicId],
  );

  function selectUnit(unitId) {
    const nextUnit = findUnit(unitId);
    const nextChapter = nextUnit.chapters[0];
    const nextTopic = nextChapter.topics[0];

    setSelection({
      unitId: nextUnit.id,
      chapterId: nextChapter.id,
      topicId: nextTopic.id,
    });
    setExpandedChapterId(nextChapter.id);
  }

  function toggleChapter(chapterId) {
    setExpandedChapterId((current) => (current === chapterId ? '' : chapterId));

    const nextChapter = findChapter(activeUnit, chapterId);
    const nextTopic = nextChapter.topics[0];

    setSelection((current) => ({
      ...current,
      chapterId: nextChapter.id,
      topicId: nextTopic.id,
    }));
  }

  function selectTopic(chapterId, topicId) {
    setExpandedChapterId(chapterId);
    setSelection((current) => ({
      ...current,
      chapterId,
      topicId,
    }));
  }

  return (
    <div className="smartbook-shell simple-shell">
      <Sidebar
        units={biologyUnits}
        activeUnitId={activeUnit.id}
        activeChapterId={activeChapter.id}
        activeTopicId={activeTopic.id}
        expandedChapterId={expandedChapterId}
        onSelectUnit={selectUnit}
        onToggleChapter={toggleChapter}
        onSelectTopic={selectTopic}
      />

      <div className="content-shell simple-content-shell">
        <Topbar activeUnit={activeUnit} activeChapter={activeChapter} activeTopic={activeTopic} />
        <UnitPage unit={activeUnit} chapter={activeChapter} topic={activeTopic} />
      </div>
    </div>
  );
}
