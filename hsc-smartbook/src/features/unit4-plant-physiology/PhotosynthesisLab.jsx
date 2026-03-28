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
    note: 'Electrons loop back to PSI and mainly boost ATP formation.',
  },
  noncyclic: {
    title: 'Non-cyclic photophosphorylation',
    atp: 3,
    nadph: 2,
    oxygen: 1,
    note: 'Water splitting feeds PSII and PSI, producing NADPH and oxygen.',
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

function FlowDots({ count, className, labelPrefix }) {
  return (
    <div className={`flow-dots ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <span key={`${labelPrefix}-${index}`} />
      ))}
    </div>
  );
}

function PlantScene({
  sunlight = 60,
  water = 50,
  co2 = 40,
  oxygen = 30,
  sugar = 20,
  leafTone = 65,
  caption,
  modeLabel,
}) {
  return (
    <div
      className="scene-card"
      style={{
        '--scene-energy': `${0.35 + sunlight / 120}`,
        '--leaf-scale': `${0.96 + leafTone / 400}`,
        '--leaf-hue': `${leafTone / 7}deg`,
      }}
    >
      <div className="scene-sky" />
      <div className="scene-rays">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="scene-sun" style={{ opacity: 0.45 + sunlight / 180 }} />
      <div className="scene-glow" />
      <div className="chloroplast-energy">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="leaf-breath leaf-breath-left" />
      <div className="leaf-breath leaf-breath-right" />

      <FlowDots count={Math.max(3, Math.round(sunlight / 20))} className="sun-flow" labelPrefix="sun" />
      <FlowDots count={Math.max(2, Math.round(co2 / 25))} className="co2-flow" labelPrefix="co2" />
      <FlowDots count={Math.max(2, Math.round(water / 25))} className="water-flow" labelPrefix="water" />
      <FlowDots count={Math.max(2, Math.round(oxygen / 25))} className="oxygen-flow" labelPrefix="oxygen" />
      <FlowDots count={Math.max(2, Math.round(sugar / 20))} className="sugar-flow" labelPrefix="sugar" />

      <div className="scene-plant">
        <div className="plant-stem" />
        <div className="plant-leaf leaf-left" style={{ filter: `saturate(${0.7 + leafTone / 100})` }} />
        <div className="plant-leaf leaf-right" style={{ filter: `saturate(${0.7 + leafTone / 100})` }} />
        <div className="leaf-vein left" />
        <div className="leaf-vein right" />
        <div className="leaf-core left" />
        <div className="leaf-core right" />
        <div className="scene-roots">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="soil-band" />

      <div className="scene-label scene-label-top">Sunlight</div>
      <div className="scene-label scene-label-left">CO2 In</div>
      <div className="scene-label scene-label-bottom">H2O Up</div>
      <div className="scene-label scene-label-right">O2 Out</div>
      <div className="scene-label scene-label-sugar">Sugar Out</div>

      <div className="scene-caption">
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
  const leafTone = 55 + zoom / 3;

  return (
    <SceneScaffold
      title={pigment}
      subtitle="The leaf scene shows how the chloroplast-rich part of the plant becomes more active as pigment capture improves."
      scene={
        <PlantScene
          sunlight={bars[0]}
          water={55}
          co2={40}
          oxygen={30}
          sugar={45}
          leafTone={leafTone}
          modeLabel="Leaf capture"
          caption={`${pigment} is currently emphasized, so absorption changes across visible light bands.`}
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
        <Metric key="focus" label="Leaf activity" value={leafTone > 80 ? 'High' : 'Moderate'} />,
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
      subtitle="Watch light energy strike the leaf, water move upward from the roots, and oxygen leave the plant."
      scene={
        <PlantScene
          sunlight={intensity}
          water={pathway === 'noncyclic' ? 80 : 55}
          co2={22}
          oxygen={phase.oxygen * 55 * scale}
          sugar={18}
          leafTone={65 + intensity / 4}
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
      subtitle="The dark reaction scene highlights carbon entering the leaf and sugar leaving after energy-rich molecules feed the cycle."
      scene={
        <PlantScene
          sunlight={25}
          water={45}
          co2={co2 * 7}
          oxygen={20}
          sugar={g3p * 22}
          leafTone={60 + g3p * 10}
          modeLabel="Carbon fixation"
          caption={`With ${co2} CO2, ${nadph} NADPH, and ${atp} ATP, the cycle currently nets ${g3p} G3P.`}
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
      subtitle="The plant scene changes how efficiently the leaf seems to process carbon under different temperature conditions."
      scene={
        <PlantScene
          sunlight={58}
          water={mode === 'c4' ? 62 : 46}
          co2={mode === 'c4' ? 68 : 42}
          oxygen={mode === 'c4' ? 24 : 42}
          sugar={chosen * 0.7}
          leafTone={50 + chosen / 2}
          modeLabel={mode.toUpperCase()}
          caption={`At ${temperature} deg C, the selected pathway is working at about ${formatPercent(chosen)} efficiency.`}
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
      subtitle="The scene visualizes plant health and gas exchange while the weakest input becomes the bottleneck."
      scene={
        <PlantScene
          sunlight={light}
          water={water}
          co2={co2}
          oxygen={output * 0.45}
          sugar={output * 0.55}
          leafTone={output}
          modeLabel="Whole plant response"
          caption={`${limitingFactor.name} is currently the main limiting factor, so visible plant output stays constrained.`}
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
            The plant is now part of the simulator itself, so light capture, water flow,
            gas exchange, and sugar output are visible while you adjust the topic controls.
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
      </div>
    </section>
  );
}
