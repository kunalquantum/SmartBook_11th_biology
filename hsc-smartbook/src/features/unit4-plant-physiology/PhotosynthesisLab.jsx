import { useMemo, useState } from 'react';

const pigmentBands = {
  'Chlorophyll a': [92, 40, 58, 84, 28],
  'Chlorophyll b': [72, 58, 34, 52, 18],
  Carotenoids: [34, 86, 62, 18, 10],
};

const phaseNotes = {
  cyclic: {
    title: 'Cyclic photophosphorylation',
    atp: 4,
    nadph: 0,
    oxygen: 0,
    note: 'Electrons return to PSI, boosting ATP but not reducing NADP.',
  },
  noncyclic: {
    title: 'Non-cyclic photophosphorylation',
    atp: 3,
    nadph: 2,
    oxygen: 1,
    note: 'PSII and PSI work together, splitting water and releasing oxygen.',
  },
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function LightMeter({ label, value }) {
  return (
    <div className="metric-tile">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SiteExplorer() {
  const [pigment, setPigment] = useState('Chlorophyll a');
  const [zoom, setZoom] = useState(65);
  const bars = pigmentBands[pigment];

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        {Object.keys(pigmentBands).map((name) => (
          <button
            key={name}
            className={`chip-button ${name === pigment ? 'is-active' : ''}`}
            onClick={() => setPigment(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="chloroplast-card">
        <div className="chloroplast-visual" style={{ transform: `scale(${0.8 + zoom / 200})` }}>
          <div className="chloroplast-shell">
            <div className="granum granum-a" />
            <div className="granum granum-b" />
            <div className="granum granum-c" />
            <div className="stroma">Stroma</div>
          </div>
        </div>

        <div className="chloroplast-panel">
          <p className="eyebrow">Pigment Capture</p>
          <h3>{pigment}</h3>
          <p>
            The active pigment changes how strongly different light bands are absorbed in
            the chloroplast.
          </p>

          <label className="slider-field">
            <span>Microscope zoom</span>
            <input
              type="range"
              min="40"
              max="100"
              value={zoom}
              onChange={(event) => setZoom(Number(event.target.value))}
            />
          </label>

          <div className="spectrum-bars">
            {['Blue', 'Violet', 'Red', 'Orange', 'Green'].map((band, index) => (
              <div key={band}>
                <div className="spectrum-label">
                  <span>{band}</span>
                  <strong>{formatPercent(bars[index])}</strong>
                </div>
                <div className="spectrum-track">
                  <div className="spectrum-fill" style={{ width: `${bars[index]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LightReactionSimulator() {
  const [pathway, setPathway] = useState('noncyclic');
  const [intensity, setIntensity] = useState(70);
  const phase = phaseNotes[pathway];
  const scale = intensity / 100;

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        {Object.entries(phaseNotes).map(([key, value]) => (
          <button
            key={key}
            className={`chip-button ${key === pathway ? 'is-active' : ''}`}
            onClick={() => setPathway(key)}
          >
            {value.title}
          </button>
        ))}
      </div>

      <label className="slider-field">
        <span>Photon intensity</span>
        <input
          type="range"
          min="20"
          max="100"
          value={intensity}
          onChange={(event) => setIntensity(Number(event.target.value))}
        />
      </label>

      <div className="metrics-grid">
        <LightMeter label="ATP" value={phase.atp * scale >= 1 ? (phase.atp * scale).toFixed(1) : 'Low'} />
        <LightMeter label="NADPH" value={phase.nadph * scale >= 1 ? (phase.nadph * scale).toFixed(1) : 'Low'} />
        <LightMeter label="Oxygen" value={phase.oxygen * scale >= 1 ? `${(phase.oxygen * scale).toFixed(1)} O2` : 'None'} />
      </div>

      <article className="mini-note">
        <strong>{phase.title}</strong>
        <p>{phase.note}</p>
      </article>
    </div>
  );
}

function CalvinCycleStudio() {
  const [co2, setCo2] = useState(6);
  const [nadph, setNadph] = useState(12);
  const [atp, setAtp] = useState(18);

  const g3p = Math.floor(Math.min(co2 / 3, nadph / 6, atp / 9));

  return (
    <div className="lab-stack">
      <div className="triple-sliders">
        <label className="slider-field">
          <span>CO2 molecules: {co2}</span>
          <input type="range" min="3" max="18" step="3" value={co2} onChange={(event) => setCo2(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>NADPH pool: {nadph}</span>
          <input type="range" min="6" max="36" step="6" value={nadph} onChange={(event) => setNadph(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>ATP pool: {atp}</span>
          <input type="range" min="9" max="45" step="9" value={atp} onChange={(event) => setAtp(Number(event.target.value))} />
        </label>
      </div>

      <div className="metrics-grid">
        <LightMeter label="G3P formed" value={`${g3p}`} />
        <LightMeter label="CO2 fixed" value={`${Math.min(co2, g3p * 3)}`} />
        <LightMeter label="Cycle state" value={g3p > 0 ? 'Running' : 'Insufficient energy'} />
      </div>

      <article className="mini-note">
        <strong>Calvin cycle checkpoint</strong>
        <p>
          For every 3 CO2, the cycle needs 6 NADPH and 9 ATP to net one G3P molecule.
        </p>
      </article>
    </div>
  );
}

function PathwayComparator() {
  const [temperature, setTemperature] = useState(28);
  const [mode, setMode] = useState('c4');
  const c3Efficiency = clamp(100 - Math.abs(24 - temperature) * 5.5, 15, 100);
  const c4Efficiency = clamp(100 - Math.abs(34 - temperature) * 3.2, 30, 100);
  const chosen = mode === 'c4' ? c4Efficiency : c3Efficiency;

  return (
    <div className="lab-stack">
      <div className="lab-toolbar">
        <button className={`chip-button ${mode === 'c3' ? 'is-active' : ''}`} onClick={() => setMode('c3')}>
          C3 pathway
        </button>
        <button className={`chip-button ${mode === 'c4' ? 'is-active' : ''}`} onClick={() => setMode('c4')}>
          C4 pathway
        </button>
      </div>

      <label className="slider-field">
        <span>Temperature: {temperature} deg C</span>
        <input
          type="range"
          min="10"
          max="45"
          value={temperature}
          onChange={(event) => setTemperature(Number(event.target.value))}
        />
      </label>

      <div className="comparison-row">
        <article className={`compare-card ${mode === 'c3' ? 'is-active' : ''}`}>
          <span>C3</span>
          <strong>{formatPercent(c3Efficiency)}</strong>
          <small>Cooler conditions, more photorespiration risk</small>
        </article>
        <article className={`compare-card ${mode === 'c4' ? 'is-active' : ''}`}>
          <span>C4</span>
          <strong>{formatPercent(c4Efficiency)}</strong>
          <small>Warmer conditions, Kranz anatomy advantage</small>
        </article>
      </div>

      <article className="mini-note">
        <strong>{mode.toUpperCase()} selected</strong>
        <p>
          Estimated efficiency at {temperature} deg C is {formatPercent(chosen)} based on the
          pathway&apos;s temperature preference.
        </p>
      </article>
    </div>
  );
}

function LimitingFactorLab() {
  const [light, setLight] = useState(78);
  const [co2, setCo2] = useState(62);
  const [temperature, setTemperature] = useState(30);
  const [water, setWater] = useState(80);

  const tempScore = clamp(100 - Math.abs(30 - temperature) * 5, 20, 100);
  const scores = [
    { name: 'Light', value: light },
    { name: 'CO2', value: co2 },
    { name: 'Temperature', value: tempScore },
    { name: 'Water', value: water },
  ];
  const limitingFactor = scores.reduce((lowest, factor) =>
    factor.value < lowest.value ? factor : lowest,
  );
  const output = useMemo(
    () => Math.round((light * 0.3 + co2 * 0.3 + tempScore * 0.2 + water * 0.2) * 0.9),
    [co2, light, tempScore, water],
  );

  return (
    <div className="lab-stack">
      <div className="triple-sliders">
        <label className="slider-field">
          <span>Light intensity: {light}</span>
          <input type="range" min="10" max="100" value={light} onChange={(event) => setLight(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>CO2 availability: {co2}</span>
          <input type="range" min="10" max="100" value={co2} onChange={(event) => setCo2(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>Temperature: {temperature} deg C</span>
          <input type="range" min="10" max="45" value={temperature} onChange={(event) => setTemperature(Number(event.target.value))} />
        </label>
        <label className="slider-field">
          <span>Water supply: {water}</span>
          <input type="range" min="10" max="100" value={water} onChange={(event) => setWater(Number(event.target.value))} />
        </label>
      </div>

      <div className="metrics-grid">
        <LightMeter label="Photosynthetic output" value={`${output}/100`} />
        <LightMeter label="Limiting factor" value={limitingFactor.name} />
        <LightMeter label="Blackman view" value={limitingFactor.value < 40 ? 'Strongly limited' : 'Partially limited'} />
      </div>
    </div>
  );
}

function TopicSpecificPanel({ topicId }) {
  if (topicId === 'site-of-photosynthesis') {
    return <SiteExplorer />;
  }

  if (topicId === 'light-reaction') {
    return <LightReactionSimulator />;
  }

  if (topicId === 'dark-reaction') {
    return <CalvinCycleStudio />;
  }

  if (topicId === 'c4-pathway' || topicId === 'photorespiration') {
    return <PathwayComparator />;
  }

  return <LimitingFactorLab />;
}

export default function PhotosynthesisLab({ chapter, topic }) {
  return (
    <section className="visualizer-shell">
      <article className="visualizer-hero photosynthesis-hero">
        <div>
          <p className="eyebrow">Chapter 12 Interactive Lab</p>
          <h2>{topic.title}</h2>
          <p>
            Explore the process, tune the variables, and see how the selected photosynthesis
            concept behaves as a model instead of a static note.
          </p>
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
          <h3>Photosynthesis map</h3>
          <ol className="chapter-path">
            {chapter.topics.map((chapterTopic) => (
              <li
                key={chapterTopic.id}
                className={chapterTopic.id === topic.id ? 'is-active' : ''}
              >
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
