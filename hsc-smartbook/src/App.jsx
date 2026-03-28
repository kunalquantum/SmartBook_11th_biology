import { useState } from 'react';
import { Sidebar, Topbar } from './components/layout';
import { HomeScreen, UnitPage } from './features';
import { biologyUnits, syllabusStats } from './data/units';

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
  const [activeScreen, setActiveScreen] = useState('home');
  const [selection, setSelection] = useState(getDefaultSelection);

  const activeUnit = findUnit(selection.unitId);
  const activeChapter = findChapter(activeUnit, selection.chapterId);
  const activeTopic = findTopic(activeChapter, selection.topicId);

  function openUnit(unitId) {
    const nextUnit = findUnit(unitId);
    const nextChapter = nextUnit.chapters[0];
    const nextTopic = nextChapter.topics[0];

    setSelection({
      unitId: nextUnit.id,
      chapterId: nextChapter.id,
      topicId: nextTopic.id,
    });
    setActiveScreen('unit');
  }

  function selectChapter(chapterId) {
    const nextChapter = findChapter(activeUnit, chapterId);
    const nextTopic = nextChapter.topics[0];

    setSelection((current) => ({
      ...current,
      chapterId: nextChapter.id,
      topicId: nextTopic.id,
    }));
  }

  function selectTopic(chapterId, topicId) {
    setSelection((current) => ({
      ...current,
      chapterId,
      topicId,
    }));
    setActiveScreen('unit');
  }

  return (
    <div className="smartbook-shell">
      <Sidebar
        units={biologyUnits}
        activeScreen={activeScreen}
        activeUnitId={activeUnit.id}
        onHome={() => setActiveScreen('home')}
        onOpenUnit={openUnit}
      />

      <div className="content-shell">
        <Topbar
          activeScreen={activeScreen}
          activeUnit={activeUnit}
          activeChapter={activeChapter}
          activeTopic={activeTopic}
          onOpenHome={() => setActiveScreen('home')}
        />

        {activeScreen === 'home' ? (
          <HomeScreen
            units={biologyUnits}
            syllabusStats={syllabusStats}
            onOpenUnit={openUnit}
            onResume={() => setActiveScreen('unit')}
            activeUnit={activeUnit}
            activeTopic={activeTopic}
          />
        ) : (
          <UnitPage
            unit={activeUnit}
            chapter={activeChapter}
            topic={activeTopic}
            onSelectChapter={selectChapter}
            onSelectTopic={selectTopic}
          />
        )}
      </div>
    </div>
  );
}
