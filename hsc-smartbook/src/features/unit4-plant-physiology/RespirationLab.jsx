import { useState } from 'react';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function Metric({ label, value }) {
  return (
    <div className="metric-tile">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function RespirationModePanel() {
  const [mode, setMode] = useState('aerobic');
  const [glucose, setGlucose] = useState(1);

  const totalATP = mode === 'aerobic' ? glucose * 38 : glucose * 2;
  const endProduct = mode === 'aerobic' ? 'CO2 + H2O' : 'Lactate / Ethanol';

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        <button className={`chip-button ${mode === 'aerobic' ? 'is-active' : ''}`} onClick={() => setMode('aerobic')}>
          Aerobic
        </button>
        <button className={`chip-button ${mode === 'anaerobic' ? 'is-active' : ''}`} onClick={() => setMode('anaerobic')}>
          Anaerobic
        </button>
      </div>

      <label className="slider-field">
        <span>Glucose molecules: {glucose}</span>
        <input type="range" min="1" max="6" value={glucose} onChange={(event) => setGlucose(Number(event.target.value))} />
      </label>

      <div className="metrics-grid">
        <Metric label="ATP yield" value={`${totalATP}`} />
        <Metric label="Oxygen" value={mode === 'aerobic' ? 'Required' : 'Absent'} />
        <Metric label="End product" value={endProduct} />
      </div>
    </div>
  );
}

function GlycolysisPanel() {
  const [steps, setSteps] = useState(5);

  const invested = steps >= 2 ? 2 : 1;
  const produced = clamp(Math.round((steps / 10) * 4), 0, 4);
  const net = produced - invested;

  return (
    <div className="lab-stack">
      <label className="slider-field">
        <span>EMP pathway progress: step {steps} / 10</span>
        <input type="range" min="1" max="10" value={steps} onChange={(event) => setSteps(Number(event.target.value))} />
      </label>

      <div className="metrics-grid">
        <Metric label="ATP invested" value={`${invested}`} />
        <Metric label="ATP produced" value={`${produced}`} />
        <Metric label="Net ATP" value={`${net}`} />
      </div>

      <article className="mini-note">
        <strong>Glycolysis checkpoint</strong>
        <p>The pathway invests ATP early, then recovers ATP and produces pyruvate near the end.</p>
      </article>
    </div>
  );
}

function FermentationPanel() {
  const [path, setPath] = useState('lactic');

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        <button className={`chip-button ${path === 'lactic' ? 'is-active' : ''}`} onClick={() => setPath('lactic')}>
          Lactic acid
        </button>
        <button className={`chip-button ${path === 'alcoholic' ? 'is-active' : ''}`} onClick={() => setPath('alcoholic')}>
          Alcoholic
        </button>
      </div>

      <div className="comparison-row">
        <article className={`compare-card ${path === 'lactic' ? 'is-active' : ''}`}>
          <span>Animal cells</span>
          <strong>Lactate</strong>
          <small>Short bursts of oxygen shortage</small>
        </article>
        <article className={`compare-card ${path === 'alcoholic' ? 'is-active' : ''}`}>
          <span>Yeast cells</span>
          <strong>Ethanol + CO2</strong>
          <small>Common in microbial fermentation</small>
        </article>
      </div>

      <article className="mini-note">
        <strong>{path === 'lactic' ? 'Lactic acid fermentation' : 'Alcoholic fermentation'}</strong>
        <p>Fermentation regenerates NAD+ so glycolysis can continue without oxygen.</p>
      </article>
    </div>
  );
}

function LinkAndKrebsPanel() {
  const [acetylCoA, setAcetylCoA] = useState(2);

  return (
    <div className="lab-stack">
      <label className="slider-field">
        <span>Acetyl CoA entering cycle: {acetylCoA}</span>
        <input type="range" min="1" max="8" value={acetylCoA} onChange={(event) => setAcetylCoA(Number(event.target.value))} />
      </label>

      <div className="metrics-grid">
        <Metric label="NADH" value={`${acetylCoA * 3}`} />
        <Metric label="FADH2" value={`${acetylCoA * 1}`} />
        <Metric label="ATP / GTP" value={`${acetylCoA * 1}`} />
      </div>

      <article className="mini-note">
        <strong>Krebs cycle yield</strong>
        <p>Each acetyl CoA produces reduced coenzymes that later drive oxidative phosphorylation.</p>
      </article>
    </div>
  );
}

function ETSPanel() {
  const [nadh, setNadh] = useState(8);
  const [fadh2, setFadh2] = useState(2);

  const protonFlow = nadh * 10 + fadh2 * 6;
  const atp = Math.round(nadh * 3 + fadh2 * 2);

  return (
    <div className="lab-stack">
      <div className="triple-sliders">
        <label className="slider-field">
          <span>NADH: {nadh}</span>
          <input type="range" min="1" max="12" value={nadh} onChange={(event) => setNadh(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>FADH2: {fadh2}</span>
          <input type="range" min="1" max="8" value={fadh2} onChange={(event) => setFadh2(Number(event.target.value))} />
        </label>
      </div>

      <div className="metrics-grid">
        <Metric label="Proton flow" value={`${protonFlow}`} />
        <Metric label="ATP formed" value={`${atp}`} />
        <Metric label="Terminal acceptor" value="Oxygen" />
      </div>
    </div>
  );
}

function RQPanel() {
  const [substrate, setSubstrate] = useState('carbohydrate');

  const rqMap = {
    carbohydrate: 1,
    fat: 0.7,
    protein: 0.8,
    organicAcid: 1.3,
  };

  const rq = rqMap[substrate];
  const interpretation =
    rq === 1 ? 'Balanced CO2 release and O2 use' : rq < 1 ? 'More oxygen used than CO2 released' : 'CO2 release exceeds oxygen use';

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        <button className={`chip-button ${substrate === 'carbohydrate' ? 'is-active' : ''}`} onClick={() => setSubstrate('carbohydrate')}>
          Carbohydrate
        </button>
        <button className={`chip-button ${substrate === 'fat' ? 'is-active' : ''}`} onClick={() => setSubstrate('fat')}>
          Fat
        </button>
        <button className={`chip-button ${substrate === 'protein' ? 'is-active' : ''}`} onClick={() => setSubstrate('protein')}>
          Protein
        </button>
        <button className={`chip-button ${substrate === 'organicAcid' ? 'is-active' : ''}`} onClick={() => setSubstrate('organicAcid')}>
          Organic acid
        </button>
      </div>

      <div className="metrics-grid">
        <Metric label="RQ value" value={`${rq}`} />
        <Metric label="CO2/O2" value={rq > 1 ? 'High' : rq < 1 ? 'Low' : 'Equal'} />
        <Metric label="Meaning" value={interpretation} />
      </div>
    </div>
  );
}

function TopicSpecificPanel({ topicId }) {
  if (topicId === 'types-of-respiration') {
    return <RespirationModePanel />;
  }

  if (topicId === 'glycolysis') {
    return <GlycolysisPanel />;
  }

  if (topicId === 'fermentation') {
    return <FermentationPanel />;
  }

  if (topicId === 'acetyl-coa-formation' || topicId === 'krebs-cycle') {
    return <LinkAndKrebsPanel />;
  }

  if (topicId === 'ets-and-oxidative-phosphorylation') {
    return <ETSPanel />;
  }

  return <RQPanel />;
}

export default function RespirationLab({ chapter, topic }) {
  return (
    <section className="visualizer-shell">
      <article className="visualizer-hero">
        <div>
          <p className="eyebrow">Chapter 13 Interactive Lab</p>
          <h2>{topic.title}</h2>
          <p>Trace energy release through respiration with compact controls and pathway-specific feedback.</p>
        </div>
        <div className="visualizer-badge">
          <span>Focused simulator</span>
          <strong>{topic.visualizer}</strong>
        </div>
      </article>

      <div className="visualizer-grid photosynthesis-layout">
        <article className="panel-card">
          <p className="eyebrow">Topic Scope</p>
          <h3>{topic.title}</h3>
          <ul className="plain-list">
            {topic.subtopics.map((subtopic) => (
              <li key={subtopic}>{subtopic}</li>
            ))}
          </ul>
        </article>

        <article className="panel-card photosynthesis-panel">
          <p className="eyebrow">Interactive Module</p>
          <h3>{topic.visualizer}</h3>
          <TopicSpecificPanel topicId={topic.id} />
        </article>

        <article className="panel-card accent-card">
          <p className="eyebrow">Chapter Flow</p>
          <h3>Respiration map</h3>
          <ol className="chapter-path">
            {chapter.topics.map((chapterTopic) => (
              <li key={chapterTopic.id} className={chapterTopic.id === topic.id ? 'is-active' : ''}>
                <strong>{chapterTopic.title}</strong>
                <span>{chapterTopic.visualizer}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}
