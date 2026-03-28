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
    note: 'Electrons cycle around PSI and mainly increase ATP synthesis.',
  },
  noncyclic: {
    title: 'Non-cyclic photophosphorylation',
    atp: 3,
    nadph: 2,
    oxygen: 1,
    note: 'Water splitting supplies electrons and oxygen is released.',
  },
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function Metric({ label, value }) {
  return (
    <div className="metric-tile">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ProcessStream({ count, className, baseMs, size = 12 }) {
  return (
    <div className={`process-stream ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={`${className}-${index}`}
          style={{
            animationDuration: `${baseMs}ms`,
            animationDelay: `${index * 180}ms`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
}

function ChloroplastTrack({ activity, mode }) {
  const sparks = Math.max(3, Math.round(activity / 18));

  return (
    <div className={`chloroplast-track mode-${mode}`}>
      <div className="thylakoid-stack left">
        <span />
        <span />
        <span />
      </div>
      <div className="thylakoid-stack right">
        <span />
        <span />
        <span />
      </div>
      <div className="electron-lane upper" />
      <div className={`electron-lane lower ${mode === 'cyclic' ? 'cyclic' : ''}`} />
      <div className="chloroplast-sparks">
        {Array.from({ length: sparks }).map((_, index) => (
          <span
            key={`spark-${index}`}
            style={{
              animationDuration: `${1200 + (100 - activity) * 10}ms`,
              animationDelay: `${index * 140}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProcessScene({
  mode = 'capture',
  sunlight = 60,
  water = 50,
  co2 = 40,
  oxygen = 30,
  sugar = 20,
  leafTone = 65,
  caption,
  modeLabel,
}) {
  const lightMs = clamp(2400 - sunlight * 12, 800, 2200);
  const waterMs = clamp(2600 - water * 12, 900, 2600);
  const co2Ms = clamp(2500 - co2 * 10, 900, 2400);
  const oxygenMs = clamp(2500 - oxygen * 12, 900, 2400);
  const sugarMs = clamp(2600 - sugar * 12, 900, 2600);
  const activity = clamp((sunlight + water + co2 + sugar) / 4, 15, 100);

  return (
    <div
      className={`process-scene mode-${mode}`}
      style={{
        '--leaf-sat': `${0.8 + leafTone / 120}`,
        '--leaf-bright': `${0.8 + leafTone / 220}`,
        '--scene-activity': `${activity / 100}`,
      }}
    >
      <div className="scene-atmosphere" />
      <div className="scene-sun-core" style={{ opacity: 0.35 + sunlight / 150 }} />

      <ProcessStream
        count={Math.max(3, Math.round(sunlight / 18))}
        className="sunlight-stream"
        baseMs={lightMs}
        size={10}
      />
      <ProcessStream
        count={Math.max(2, Math.round(co2 / 20))}
        className="co2-stream"
        baseMs={co2Ms}
      />
      <ProcessStream
        count={Math.max(2, Math.round(water / 22))}
        className="water-stream"
        baseMs={waterMs}
      />
      <ProcessStream
        count={Math.max(oxygen > 5 ? 2 : 1, Math.round(oxygen / 22))}
        className="oxygen-stream"
        baseMs={oxygenMs}
      />
      <ProcessStream
        count={Math.max(sugar > 5 ? 2 : 1, Math.round(sugar / 22))}
        className="sugar-stream"
        baseMs={sugarMs}
      />

      <div className="plant-scaffold">
        <div className="plant-stem" />
        <div className="plant-leaf left" />
        <div className="plant-leaf right" />
        <div className="leaf-vein left" />
        <div className="leaf-vein right" />
        <div className="leaf-window left">
          <ChloroplastTrack activity={activity} mode={mode === 'light' ? 'noncyclic' : mode === 'cyclic' ? 'cyclic' : 'calvin'} />
        </div>
        <div className="leaf-window right">
          <ChloroplastTrack activity={activity} mode={mode === 'light' ? 'noncyclic' : mode === 'cyclic' ? 'cyclic' : 'calvin'} />
        </div>
        <div className="root-web">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="scene-tag top">Sunlight</div>
      <div className="scene-tag left">CO2</div>
      <div className="scene-tag bottom">Water</div>
      <div className="scene-tag right">Oxygen</div>
      <div className="scene-tag sugar">Sugar</div>

      <div className="scene-readout">
        <strong>{modeLabel}</strong>
        <p>{caption}</p>
      </div>
    </div>
  );
}

function SceneScaffold({ title, subtitle, scene, controls, metrics }) {
  return (
    <div className="lab-scaffold">
      <div className="lab-main">
        <div className="lab-copy">
          <p className="eyebrow">Visible Process</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {scene}
      </div>

      <div className="lab-side">
        <div className="lab-side-block">
          <p className="eyebrow">Controls</p>
          {controls}
        </div>
        <div className="lab-side-block">
          <p className="eyebrow">Readout</p>
          <div className="metrics-grid">{metrics}</div>
        </div>
      </div>
    </div>
  );
}

function SiteExplorer() {
  const [pigment, setPigment] = useState('Chlorophyll a');
  const [zoom, setZoom] = useState(65);
  const bars = pigmentBands[pigment];
  const leafTone = 50 + zoom / 2.8;

  return (
    <SceneScaffold
      title={pigment}
      subtitle="Pigment choice changes absorption bands, and the chloroplast lanes inside the leaf respond in sync."
      scene={
        <ProcessScene
          mode="capture"
          sunlight={bars[0]}
          water={42}
          co2={32}
          oxygen={24}
          sugar={30}
          leafTone={leafTone}
          modeLabel="Pigment capture"
          caption={`${pigment} is emphasized, so the absorption profile and chloroplast activity shift together.`}
        />
      }
      controls={
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
      }
      metrics={[
        <Metric key="absorb" label="Peak absorbance" value={formatPercent(Math.max(...bars))} />,
        <Metric key="zoom" label="Zoom" value={`${zoom}%`} />,
        <Metric key="focus" label="Leaf activity" value={leafTone > 78 ? 'High' : 'Moderate'} />,
      ]}
    />
  );
}

function LightReactionSimulator() {
  const [pathway, setPathway] = useState('noncyclic');
  const [intensity, setIntensity] = useState(70);
  const phase = phaseNotes[pathway];
  const scale = intensity / 100;

  return (
    <SceneScaffold
      title={phase.title}
      subtitle="Photon intensity now synchronizes sunlight arrival, thylakoid electron flow, water splitting, and oxygen release."
      scene={
        <ProcessScene
          mode={pathway === 'cyclic' ? 'cyclic' : 'light'}
          sunlight={intensity}
          water={pathway === 'noncyclic' ? 82 : 48}
          co2={16}
          oxygen={phase.oxygen * 58 * scale}
          sugar={12}
          leafTone={60 + intensity / 4}
          modeLabel={phase.title}
          caption={phase.note}
        />
      }
      controls={
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
        </div>
      }
      metrics={[
        <Metric key="atp" label="ATP" value={phase.atp * scale >= 1 ? (phase.atp * scale).toFixed(1) : 'Low'} />,
        <Metric key="nadph" label="NADPH" value={phase.nadph * scale >= 1 ? (phase.nadph * scale).toFixed(1) : 'Low'} />,
        <Metric key="oxygen" label="Oxygen" value={phase.oxygen * scale >= 1 ? `${(phase.oxygen * scale).toFixed(1)} O2` : 'None'} />,
      ]}
    />
  );
}

function CalvinCycleStudio() {
  const [co2, setCo2] = useState(6);
  const [nadph, setNadph] = useState(12);
  const [atp, setAtp] = useState(18);
  const g3p = Math.floor(Math.min(co2 / 3, nadph / 6, atp / 9));

  return (
    <SceneScaffold
      title="Calvin cycle"
      subtitle="Carbon intake and sugar export now strengthen or slow together, based on ATP and NADPH availability."
      scene={
        <ProcessScene
          mode="calvin"
          sunlight={18}
          water={36}
          co2={co2 * 8}
          oxygen={10}
          sugar={g3p * 24}
          leafTone={58 + g3p * 10}
          modeLabel="Carbon fixation"
          caption={`With ${co2} CO2, ${nadph} NADPH, and ${atp} ATP, the cycle nets ${g3p} G3P.`}
        />
      }
      controls={
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
      }
      metrics={[
        <Metric key="g3p" label="G3P formed" value={`${g3p}`} />,
        <Metric key="fixed" label="CO2 fixed" value={`${Math.min(co2, g3p * 3)}`} />,
        <Metric key="state" label="Cycle state" value={g3p > 0 ? 'Running' : 'Energy limited'} />,
      ]}
    />
  );
}

function PathwayComparator() {
  const [temperature, setTemperature] = useState(28);
  const [mode, setMode] = useState('c4');
  const c3Efficiency = clamp(100 - Math.abs(24 - temperature) * 5.5, 15, 100);
  const c4Efficiency = clamp(100 - Math.abs(34 - temperature) * 3.2, 30, 100);
  const chosen = mode === 'c4' ? c4Efficiency : c3Efficiency;

  return (
    <SceneScaffold
      title={mode === 'c4' ? 'C4 pathway' : 'C3 pathway'}
      subtitle="Temperature changes now affect the carbon stream and sugar export together, rather than a generic loop."
      scene={
        <ProcessScene
          mode={mode}
          sunlight={56}
          water={mode === 'c4' ? 60 : 42}
          co2={mode === 'c4' ? 72 : 44}
          oxygen={mode === 'c4' ? 20 : 38}
          sugar={chosen * 0.72}
          leafTone={46 + chosen / 2}
          modeLabel={mode.toUpperCase()}
          caption={`At ${temperature} deg C, the selected pathway is operating at about ${formatPercent(chosen)} efficiency.`}
        />
      }
      controls={
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
        </div>
      }
      metrics={[
        <Metric key="c3" label="C3 efficiency" value={formatPercent(c3Efficiency)} />,
        <Metric key="c4" label="C4 efficiency" value={formatPercent(c4Efficiency)} />,
        <Metric key="selected" label="Selected" value={mode.toUpperCase()} />,
      ]}
    />
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
    <SceneScaffold
      title="Limiting factors"
      subtitle="The slowest input now literally slows the scene, so visual motion and process strength stay aligned."
      scene={
        <ProcessScene
          mode="whole"
          sunlight={light}
          water={water}
          co2={co2}
          oxygen={output * 0.45}
          sugar={output * 0.55}
          leafTone={output}
          modeLabel="Whole plant response"
          caption={`${limitingFactor.name} is the limiting factor, so all visible process motion is held back by it.`}
        />
      }
      controls={
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
      }
      metrics={[
        <Metric key="output" label="Photosynthetic output" value={`${output}/100`} />,
        <Metric key="limit" label="Limiting factor" value={limitingFactor.name} />,
        <Metric key="status" label="Plant state" value={output > 65 ? 'Healthy' : output > 40 ? 'Moderate' : 'Stressed'} />,
      ]}
    />
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
            This version removes generic motion and uses synchronized process flow, so the
            visible animation changes when the biology changes.
          </p>
        </div>
        <div className="visualizer-badge">
          <span>Focused simulator</span>
          <strong>{topic.visualizer}</strong>
        </div>
      </article>

      <div className="visualizer-grid single-scene-layout">
        <article className="panel-card photosynthesis-panel">
          <p className="eyebrow">Interactive Module</p>
          <h3>{topic.visualizer}</h3>
          <TopicSpecificPanel topicId={topic.id} />
        </article>

        <div className="support-grid">
          <article className="panel-card">
            <p className="eyebrow">Topic Scope</p>
            <h3>{topic.title}</h3>
            <ul className="plain-list">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic}>{subtopic}</li>
              ))}
            </ul>
          </article>

          <article className="panel-card accent-card">
            <p className="eyebrow">Chapter Flow</p>
            <h3>Photosynthesis map</h3>
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
      </div>
    </section>
  );
}
