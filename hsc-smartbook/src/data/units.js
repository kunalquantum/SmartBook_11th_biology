export const biologyUnits = [
  {
    id: 'Unit 1',
    title: 'Diversity in Living World',
    summary:
      'Classification, naming systems, and organism diversity from acellular forms to major plant and animal groups.',
    chapters: [
      {
        id: 'living-world',
        number: 1,
        title: 'Living World',
        description:
          'Core life characteristics and the taxonomic framework used to identify and organize biodiversity.',
        topics: [
          {
            id: 'basic-principles-of-life',
            title: 'Basic Principles of Life',
            visualizer: 'Concept Atlas',
            subtopics: ['Metabolism', 'Growth', 'Reproduction', 'Consciousness'],
          },
          {
            id: 'taxonomy-and-systematics',
            title: 'Taxonomy and Systematics',
            visualizer: 'Classification Builder',
            subtopics: [
              'Definition of taxonomy',
              'Definition of systematics',
              'Need for classification',
              'Relationship between taxonomy and systematics',
            ],
          },
          {
            id: 'taxonomic-aids',
            title: 'Taxonomic Aids',
            visualizer: 'Field Lab Tour',
            subtopics: [
              'Herbarium',
              'Botanical gardens',
              'Museums',
              'Zoological parks',
              'Biodiversity parks',
            ],
          },
          {
            id: 'key-taxonomic-concepts',
            title: 'Key Concepts',
            visualizer: 'Hierarchy Ladder',
            subtopics: [
              'Taxonomic hierarchy',
              'Species',
              'Genus',
              'Family',
              'Order',
              'Class',
              'Phylum or division',
              'Kingdom',
              'Binomial nomenclature',
            ],
          },
        ],
      },
      {
        id: 'systematics-of-living-organisms',
        number: 2,
        title: 'Systematics of Living Organisms',
        description:
          'Evolution of classification systems and the major characteristics of kingdoms and acellular entities.',
        topics: [
          {
            id: 'classification-systems',
            title: 'Classification Systems',
            visualizer: 'Timeline Explorer',
            subtopics: [
              'Two kingdom system',
              'Three kingdom system',
              'Four kingdom system',
              'Five kingdom system',
              'Carl Linnaeus',
              'R. H. Whittaker',
            ],
          },
          {
            id: 'five-kingdom-classification',
            title: 'Five Kingdom Classification',
            visualizer: 'Kingdom Comparator',
            subtopics: [
              'Monera',
              'Protista',
              'Fungi',
              'Plantae',
              'Animalia',
            ],
          },
          {
            id: 'kingdom-monera',
            title: 'Monera',
            visualizer: 'Cell Compare',
            subtopics: ['Bacteria', 'Cyanobacteria', 'General characteristics'],
          },
          {
            id: 'kingdom-protista',
            title: 'Protista',
            visualizer: 'Microworld Deck',
            subtopics: ['Plant-like protists', 'Animal-like protists', 'Fungi-like protists'],
          },
          {
            id: 'kingdom-fungi',
            title: 'Fungi',
            visualizer: 'Lifecycle Gallery',
            subtopics: [
              'Phycomycetes',
              'Ascomycetes',
              'Basidiomycetes',
              'Deuteromycetes',
            ],
          },
          {
            id: 'plantae-and-animalia-intro',
            title: 'Plantae and Animalia',
            visualizer: 'Kingdom Snapshot',
            subtopics: ['General introduction to Plantae', 'General introduction to Animalia'],
          },
          {
            id: 'acellular-organisms',
            title: 'Acellular Organisms',
            visualizer: 'Structure Cards',
            subtopics: ['Viruses', 'Viroids', 'Lichens'],
          },
        ],
      },
      {
        id: 'kingdom-plantae',
        number: 3,
        title: 'Kingdom Plantae',
        description:
          'Organization of plant groups from simple thalloid forms to seed-bearing plants and their life cycles.',
        topics: [
          {
            id: 'cryptogams',
            title: 'Cryptogams',
            visualizer: 'Plant Evolution Track',
            subtopics: ['General features', 'Reproduction in cryptogams', 'Ecological importance'],
          },
          {
            id: 'thallophyta',
            title: 'Thallophyta',
            visualizer: 'Algae Lab',
            subtopics: ['Green algae', 'Brown algae', 'Red algae'],
          },
          {
            id: 'bryophyta',
            title: 'Bryophyta',
            visualizer: 'Moist Habitat Scene',
            subtopics: ['Liverworts', 'Hornworts', 'Mosses'],
          },
          {
            id: 'pteridophyta',
            title: 'Pteridophyta',
            visualizer: 'Vascular Plant Explorer',
            subtopics: ['Psilopsida', 'Lycopsida', 'Sphenopsida', 'Pteropsida'],
          },
          {
            id: 'phanerogams',
            title: 'Phanerogams',
            visualizer: 'Seed Plant Split View',
            subtopics: ['General features', 'Seed habit', 'Dominant sporophyte'],
          },
          {
            id: 'gymnosperms',
            title: 'Gymnosperms',
            visualizer: 'Cone Anatomy Viewer',
            subtopics: ['Characteristics', 'Examples', 'Economic importance'],
          },
          {
            id: 'angiosperms',
            title: 'Angiosperms',
            visualizer: 'Monocot Dicot Comparator',
            subtopics: ['Characteristics', 'Monocots', 'Dicots'],
          },
          {
            id: 'alternation-of-generations',
            title: 'Life Cycles',
            visualizer: 'Cycle Animator',
            subtopics: ['Alternation of generations', 'Haplontic', 'Diplontic', 'Haplodiplontic'],
          },
        ],
      },
      {
        id: 'kingdom-animalia',
        number: 4,
        title: 'Kingdom Animalia',
        description:
          'Systematic classification of animals using body organization, symmetry, coelom, segmentation, and chordate traits.',
        topics: [
          {
            id: 'classification-criteria',
            title: 'Criteria for Classification',
            visualizer: 'Trait Matrix',
            subtopics: [
              'Levels of organization',
              'Symmetry',
              'Germ layers',
              'Coelom',
              'Segmentation',
              'Notochord',
            ],
          },
          {
            id: 'non-chordates',
            title: 'Non-Chordates',
            visualizer: 'Phyla Browser',
            subtopics: [
              'Porifera',
              'Cnidaria',
              'Ctenophora',
              'Platyhelminthes',
              'Aschelminthes',
              'Annelida',
              'Arthropoda',
              'Mollusca',
              'Echinodermata',
              'Hemichordata',
            ],
          },
          {
            id: 'protochordates',
            title: 'Chordate Prelude',
            visualizer: 'Body Plan Viewer',
            subtopics: ['Urochordata', 'Cephalochordata'],
          },
          {
            id: 'vertebrata',
            title: 'Vertebrata',
            visualizer: 'Vertebrate Gallery',
            subtopics: [
              'Cyclostomata',
              'Chondrichthyes',
              'Osteichthyes',
              'Amphibia',
              'Reptilia',
              'Aves',
              'Mammalia',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'Unit 2',
    title: 'Cell Structure and Function',
    summary:
      'Cell architecture, chemical foundations of life, and the mechanisms of cell division.',
    chapters: [
      {
        id: 'cell-structure-and-organization',
        number: 5,
        title: 'Cell Structure and Organization',
        description:
          'The cell as the structural and functional unit of life, including membranes, organelles, and nucleus.',
        topics: [
          {
            id: 'cell-theory',
            title: 'Cell Theory',
            visualizer: 'Discovery Timeline',
            subtopics: ['History of cell theory', 'Modern cell theory'],
          },
          {
            id: 'cell-types',
            title: 'Cell Types',
            visualizer: 'Prokaryote Eukaryote Compare',
            subtopics: ['Prokaryotic cells', 'Eukaryotic cells', 'Differences between them'],
          },
          {
            id: 'cell-envelopes',
            title: 'Cell Envelopes',
            visualizer: 'Membrane Model',
            subtopics: ['Cell wall', 'Plasma membrane', 'Fluid mosaic model'],
          },
          {
            id: 'cytoplasm-and-organelles',
            title: 'Cytoplasm and Organelles',
            visualizer: 'Cell Map',
            subtopics: ['Cytoplasm', 'Cell inclusions', 'Organelle distribution'],
          },
          {
            id: 'endomembrane-system',
            title: 'Endomembrane System',
            visualizer: 'Organelle Factory',
            subtopics: ['Endoplasmic reticulum', 'Golgi complex', 'Lysosomes', 'Vacuoles'],
          },
          {
            id: 'energy-organelles',
            title: 'Energy Organelles',
            visualizer: 'Powerhouse Explorer',
            subtopics: ['Mitochondria', 'Plastids', 'Chloroplast structure'],
          },
          {
            id: 'non-membranous-organelles',
            title: 'Non-Membranous Organelles',
            visualizer: 'Cell Scaffold Viewer',
            subtopics: ['Ribosomes', 'Centrosome', 'Centrioles', 'Cytoskeleton'],
          },
          {
            id: 'nucleus',
            title: 'Nucleus',
            visualizer: 'Chromatin Zoom',
            subtopics: ['Nuclear membrane', 'Nucleolus', 'Chromatin', 'Chromosomes'],
          },
        ],
      },
      {
        id: 'biomolecules',
        number: 6,
        title: 'Biomolecules',
        description:
          'Major organic molecules, their structure, and biochemical roles inside the cell.',
        topics: [
          {
            id: 'carbohydrates',
            title: 'Carbohydrates',
            visualizer: 'Molecule Builder',
            subtopics: ['Monosaccharides', 'Disaccharides', 'Polysaccharides', 'Starch', 'Cellulose', 'Glycogen'],
          },
          {
            id: 'lipids',
            title: 'Lipids',
            visualizer: 'Fatty Acid Mixer',
            subtopics: ['Saturated fatty acids', 'Unsaturated fatty acids', 'Phospholipids'],
          },
          {
            id: 'proteins',
            title: 'Proteins',
            visualizer: 'Protein Fold Studio',
            subtopics: [
              'Amino acids',
              'Peptide bonds',
              'Primary structure',
              'Secondary structure',
              'Tertiary structure',
              'Quaternary structure',
            ],
          },
          {
            id: 'nucleic-acids',
            title: 'Nucleic Acids',
            visualizer: 'DNA RNA Comparator',
            subtopics: ['DNA structure', 'RNA structure', 'Nucleotides', 'DNA vs RNA'],
          },
          {
            id: 'enzymes',
            title: 'Enzymes',
            visualizer: 'Reaction Simulator',
            subtopics: [
              'Nature of enzymes',
              'Classification',
              'Mechanism of action',
              'Lock and key model',
              'Induced fit model',
              'Factors affecting enzyme activity',
            ],
          },
        ],
      },
      {
        id: 'cell-division',
        number: 7,
        title: 'Cell Division',
        description:
          'Sequence of events during cell cycle, mitosis, meiosis, and programmed cell death.',
        topics: [
          {
            id: 'cell-cycle',
            title: 'Cell Cycle',
            visualizer: 'Phase Dial',
            subtopics: ['Interphase', 'G1 phase', 'S phase', 'G2 phase'],
          },
          {
            id: 'mitosis',
            title: 'Mitosis',
            visualizer: 'Stage Animator',
            subtopics: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'Cytokinesis', 'Significance of mitosis'],
          },
          {
            id: 'meiosis',
            title: 'Meiosis',
            visualizer: 'Variation Engine',
            subtopics: ['Meiosis I', 'Meiosis II', 'Crossing over', 'Significance in variation and gametogenesis'],
          },
          {
            id: 'cell-death',
            title: 'Apoptosis and Necrosis',
            visualizer: 'Outcome Split View',
            subtopics: ['Apoptosis', 'Necrosis', 'Basic concepts of cell death'],
          },
        ],
      },
    ],
  },
  {
    id: 'Unit 3',
    title: 'Structural Organization in Plants and Animals',
    summary:
      'Tissue systems, morphology, and representative organism study linking structure to function.',
    chapters: [
      {
        id: 'plant-tissues-and-anatomy',
        number: 8,
        title: 'Plant Tissues and Anatomy',
        description:
          'Plant tissue categories, tissue systems, and internal organization of major plant organs.',
        topics: [
          {
            id: 'meristematic-tissue',
            title: 'Meristematic Tissue',
            visualizer: 'Growth Zone Viewer',
            subtopics: ['Apical meristem', 'Intercalary meristem', 'Lateral meristem'],
          },
          {
            id: 'simple-permanent-tissue',
            title: 'Simple Permanent Tissue',
            visualizer: 'Tissue Cards',
            subtopics: ['Parenchyma', 'Collenchyma', 'Sclerenchyma'],
          },
          {
            id: 'complex-permanent-tissue',
            title: 'Complex Permanent Tissue',
            visualizer: 'Transport Pathway',
            subtopics: ['Xylem', 'Tracheids', 'Vessels', 'Phloem', 'Sieve tubes', 'Companion cells'],
          },
          {
            id: 'tissue-systems',
            title: 'Tissue Systems',
            visualizer: 'Layer Explorer',
            subtopics: ['Epidermal', 'Ground', 'Vascular'],
          },
          {
            id: 'internal-anatomy',
            title: 'Internal Anatomy',
            visualizer: 'Cross Section Lab',
            subtopics: ['Root cross-section', 'Stem cross-section', 'Leaf cross-section', 'Monocot vs dicot'],
          },
          {
            id: 'secondary-growth',
            title: 'Secondary Growth',
            visualizer: 'Cambium Animator',
            subtopics: ['Vascular cambium', 'Secondary growth in stem', 'Wood formation'],
          },
        ],
      },
      {
        id: 'morphology-of-flowering-plants',
        number: 9,
        title: 'Morphology of Flowering Plants',
        description:
          'External features and modifications of root, stem, leaf, flower, fruit, and seed.',
        topics: [
          {
            id: 'root',
            title: 'Root',
            visualizer: 'Root Morph Lab',
            subtopics: ['Tap root', 'Fibrous root', 'Storage roots', 'Support roots', 'Respiratory roots'],
          },
          {
            id: 'stem',
            title: 'Stem',
            visualizer: 'Stem Modification Deck',
            subtopics: ['Underground modifications', 'Sub-aerial modifications', 'Aerial modifications'],
          },
          {
            id: 'leaf',
            title: 'Leaf',
            visualizer: 'Leaf Inspector',
            subtopics: ['Structure', 'Venation', 'Phyllotaxy', 'Leaf modifications'],
          },
          {
            id: 'inflorescence',
            title: 'Inflorescence',
            visualizer: 'Pattern Matcher',
            subtopics: ['Racemose', 'Cymose'],
          },
          {
            id: 'flower',
            title: 'Flower',
            visualizer: 'Floral Anatomy Builder',
            subtopics: ['Calyx', 'Corolla', 'Androecium', 'Gynoecium', 'Placentation'],
          },
          {
            id: 'fruit-and-seed',
            title: 'Fruit and Seed',
            visualizer: 'Seed Structure Viewer',
            subtopics: ['Types of fruits', 'Monocot seed', 'Dicot seed'],
          },
        ],
      },
      {
        id: 'animal-tissues',
        number: 10,
        title: 'Animal Tissues',
        description:
          'Major tissue classes of animals with structure-function relationships and examples.',
        topics: [
          {
            id: 'epithelial-tissue',
            title: 'Epithelial Tissue',
            visualizer: 'Tissue Slide Viewer',
            subtopics: ['Simple squamous', 'Simple cuboidal', 'Simple columnar', 'Compound epithelium'],
          },
          {
            id: 'connective-tissue',
            title: 'Connective Tissue',
            visualizer: 'Matrix Explorer',
            subtopics: ['Areolar', 'Adipose', 'Dense', 'Bone', 'Cartilage', 'Blood', 'Lymph'],
          },
          {
            id: 'muscular-tissue',
            title: 'Muscular Tissue',
            visualizer: 'Muscle Fiber Compare',
            subtopics: ['Skeletal', 'Smooth', 'Cardiac'],
          },
          {
            id: 'nervous-tissue',
            title: 'Nervous Tissue',
            visualizer: 'Neuron Signal Map',
            subtopics: ['Neuron', 'Neuroglia'],
          },
        ],
      },
      {
        id: 'study-of-animal-type-cockroach',
        number: 11,
        title: 'Study of Animal Type: Cockroach',
        description:
          'Representative zoological study covering external form and major physiological systems of cockroach.',
        topics: [
          {
            id: 'habit-and-habitat',
            title: 'Habit and Habitat',
            visualizer: 'Habitat Scene',
            subtopics: ['Habit', 'Habitat'],
          },
          {
            id: 'external-morphology',
            title: 'External Morphology',
            visualizer: '3D Body Map',
            subtopics: ['Head', 'Thorax', 'Abdomen'],
          },
          {
            id: 'body-wall-and-cavity',
            title: 'Body Wall and Body Cavity',
            visualizer: 'Internal Layout',
            subtopics: ['Body wall', 'Body cavity'],
          },
          {
            id: 'digestive-system',
            title: 'Digestive System',
            visualizer: 'Digestive Pathway',
            subtopics: ['Alimentary canal', 'Digestive glands'],
          },
          {
            id: 'circulatory-system',
            title: 'Circulatory System',
            visualizer: 'Open Circulation Flow',
            subtopics: ['Open type', 'Heart', 'Haemolymph'],
          },
          {
            id: 'respiratory-system',
            title: 'Respiratory System',
            visualizer: 'Tracheal Simulator',
            subtopics: ['Tracheal system', 'Spiracles'],
          },
          {
            id: 'excretory-system',
            title: 'Excretory System',
            visualizer: 'Waste Removal Map',
            subtopics: ['Malpighian tubules'],
          },
          {
            id: 'nervous-system',
            title: 'Nervous System',
            visualizer: 'Signal Circuit',
            subtopics: ['CNS', 'PNS', 'ANS', 'Sense organs', 'Compound eye'],
          },
          {
            id: 'reproductive-system',
            title: 'Reproductive System',
            visualizer: 'Organ Compare',
            subtopics: ['Male organs', 'Female organs'],
          },
        ],
      },
    ],
  },
  {
    id: 'Unit 4',
    title: 'Plant Physiology',
    summary:
      'Mechanistic understanding of photosynthesis and respiration with pathway-level detail.',
    chapters: [
      {
        id: 'photosynthesis',
        number: 12,
        title: 'Photosynthesis',
        description:
          'Photosynthetic pigments, light and dark reactions, alternate pathways, and limiting factors.',
        topics: [
          {
            id: 'site-of-photosynthesis',
            title: 'Site of Photosynthesis',
            visualizer: 'Chloroplast Explorer',
            subtopics: ['Chloroplast structure', 'Chlorophyll a', 'Chlorophyll b', 'Carotenoids'],
          },
          {
            id: 'light-reaction',
            title: 'Light Reaction',
            visualizer: 'Photon Flow Simulator',
            subtopics: ['Photolysis of water', 'Photophosphorylation', 'Cyclic', 'Non-cyclic'],
          },
          {
            id: 'dark-reaction',
            title: 'Dark Reaction',
            visualizer: 'Calvin Cycle Animator',
            subtopics: ['Biosynthetic phase', 'Calvin cycle', 'C3 pathway'],
          },
          {
            id: 'c4-pathway',
            title: 'C4 Pathway',
            visualizer: 'Kranz Anatomy Viewer',
            subtopics: ['Hatch and Slack pathway', 'Kranz anatomy'],
          },
          {
            id: 'photorespiration',
            title: 'Photorespiration',
            visualizer: 'C2 Cycle Flow',
            subtopics: ['Photorespiration', 'C2 cycle'],
          },
          {
            id: 'factors-affecting-photosynthesis',
            title: 'Factors Affecting Photosynthesis',
            visualizer: 'Limiting Factor Lab',
            subtopics: ['Light', 'CO2', 'Temperature', 'Water', 'Blackman law'],
          },
        ],
      },
      {
        id: 'respiration-and-energy-transfer',
        number: 13,
        title: 'Respiration and Energy Transfer',
        description:
          'Cellular respiration pathways, ATP generation, and comparison of aerobic and anaerobic outcomes.',
        topics: [
          {
            id: 'types-of-respiration',
            title: 'Types of Respiration',
            visualizer: 'Mode Comparator',
            subtopics: ['Aerobic', 'Anaerobic'],
          },
          {
            id: 'glycolysis',
            title: 'Glycolysis',
            visualizer: 'EMP Pathway Map',
            subtopics: ['EMP pathway', 'Steps', 'ATP yield'],
          },
          {
            id: 'fermentation',
            title: 'Anaerobic Respiration',
            visualizer: 'Fermentation Split View',
            subtopics: ['Lactic acid fermentation', 'Alcoholic fermentation'],
          },
          {
            id: 'acetyl-coa-formation',
            title: 'Acetyl CoA Formation',
            visualizer: 'Link Reaction Panel',
            subtopics: ['Pyruvate oxidation', 'Acetyl CoA'],
          },
          {
            id: 'krebs-cycle',
            title: 'Krebs Cycle',
            visualizer: 'TCA Cycle Wheel',
            subtopics: ['TCA cycle steps', 'Location', 'Energy yield'],
          },
          {
            id: 'ets-and-oxidative-phosphorylation',
            title: 'ETS and Oxidative Phosphorylation',
            visualizer: 'Electron Chain Simulator',
            subtopics: ['Electron transport system', 'ATP synthase', 'Oxidative phosphorylation'],
          },
          {
            id: 'respiratory-quotient',
            title: 'Respiratory Quotient',
            visualizer: 'RQ Calculator',
            subtopics: ['Definition', 'Formula', 'RQ values'],
          },
        ],
      },
    ],
  },
  {
    id: 'Unit 5',
    title: 'Human Physiology',
    summary:
      'Digestive, excretory, skeletal, and muscular systems with regulatory mechanisms and disorders.',
    chapters: [
      {
        id: 'human-nutrition',
        number: 14,
        title: 'Human Nutrition',
        description:
          'Digestive anatomy, physiology, absorption, and major nutrition-related disorders.',
        topics: [
          {
            id: 'digestive-system',
            title: 'Digestive System',
            visualizer: 'Gut Anatomy Tour',
            subtopics: ['Alimentary canal', 'Histology of gut', 'Liver', 'Pancreas'],
          },
          {
            id: 'physiology-of-digestion',
            title: 'Physiology of Digestion',
            visualizer: 'Digestive Reaction Lab',
            subtopics: ['Mechanical digestion', 'Carbohydrates', 'Proteins', 'Fats'],
          },
          {
            id: 'absorption-and-assimilation',
            title: 'Absorption and Assimilation',
            visualizer: 'Villus Transport Viewer',
            subtopics: ['Villi', 'Lacteals', 'Assimilation'],
          },
          {
            id: 'nutritional-disorders',
            title: 'Nutritional Disorders',
            visualizer: 'Case Study Deck',
            subtopics: ['Kwashiorkor', 'Marasmus', 'Indigestion', 'Constipation', 'Jaundice'],
          },
        ],
      },
      {
        id: 'excretion-and-osmoregulation',
        number: 15,
        title: 'Excretion and Osmoregulation',
        description:
          'Excretory mechanisms, nephron function, hormonal regulation, and associated disorders.',
        topics: [
          {
            id: 'modes-of-excretion',
            title: 'Modes of Excretion',
            visualizer: 'Nitrogen Waste Sorter',
            subtopics: ['Ammonotelism', 'Ureotelism', 'Uricotelism'],
          },
          {
            id: 'human-excretory-system',
            title: 'Human Excretory System',
            visualizer: 'Kidney Explorer',
            subtopics: ['Kidney structure', 'Nephron', 'Cortical nephron', 'Juxtamedullary nephron'],
          },
          {
            id: 'urine-formation',
            title: 'Urine Formation',
            visualizer: 'Nephron Flow Simulator',
            subtopics: ['Ultrafiltration', 'Selective reabsorption', 'Tubular secretion'],
          },
          {
            id: 'regulation-of-kidney-function',
            title: 'Regulation',
            visualizer: 'Hormonal Control Map',
            subtopics: ['RAAS', 'ADH', 'ANF'],
          },
          {
            id: 'role-of-other-organs',
            title: 'Role of Other Organs',
            visualizer: 'Excretion Network',
            subtopics: ['Lungs', 'Skin', 'Liver'],
          },
          {
            id: 'excretory-disorders',
            title: 'Disorders',
            visualizer: 'Clinical Cases',
            subtopics: ['Kidney stones', 'Uremia', 'Dialysis'],
          },
        ],
      },
      {
        id: 'skeleton-and-movement',
        number: 16,
        title: 'Skeleton and Movement',
        description:
          'Skeletal framework, joint types, muscle properties, contraction mechanism, and disorders.',
        topics: [
          {
            id: 'skeleton',
            title: 'Skeleton',
            visualizer: 'Body Frame Explorer',
            subtopics: ['Axial skeleton', 'Appendicular skeleton', 'Skull', 'Vertebral column', 'Ribs', 'Limbs', 'Girdles'],
          },
          {
            id: 'joints',
            title: 'Joints',
            visualizer: 'Joint Motion Lab',
            subtopics: ['Fibrous', 'Cartilaginous', 'Synovial', 'Types of synovial joints'],
          },
          {
            id: 'muscle-properties',
            title: 'Muscles',
            visualizer: 'Muscle Response Meter',
            subtopics: ['Excitability', 'Contractility'],
          },
          {
            id: 'mechanism-of-contraction',
            title: 'Mechanism of Contraction',
            visualizer: 'Sliding Filament Animator',
            subtopics: ['Sliding filament theory', 'Actin', 'Myosin interaction'],
          },
          {
            id: 'movement-disorders',
            title: 'Disorders',
            visualizer: 'Condition Profiles',
            subtopics: ['Arthritis', 'Osteoporosis', 'Myasthenia gravis', 'Tetany'],
          },
        ],
      },
    ],
  },
];

export const syllabusStats = biologyUnits.reduce(
  (stats, unit) => {
    stats.units += 1;
    stats.chapters += unit.chapters.length;

    unit.chapters.forEach((chapter) => {
      stats.topics += chapter.topics.length;
      chapter.topics.forEach((topic) => {
        stats.subtopics += topic.subtopics.length;
      });
    });

    return stats;
  },
  { units: 0, chapters: 0, topics: 0, subtopics: 0 },
);
