// data/ensembles.js
// Single source of truth for all ensemble content.
// Used by: Services section, Occasions section, individual pages, Schema.org generator.

export const ensembles = [
  {
    id: 'evostrings',
    slug: '/evostrings',
    index: '01',
    name: 'EvoStrings',
    subLabel: 'String Duo · Trio · Quartet',
    officialUrl: 'https://www.evostrings.it/',
    youtubeUrl: null,
    // YouTube embed: replace null with 'https://www.youtube.com/embed/YOUR_ID'
    photo: '/images/EvoStrings/EvoStrings.jpg',
    photoFit: 'contain',
    photoAlt: 'EvoStrings string ensemble at Villa Cimbrone, Ravello',
    moment: null,
    viralBadge: null,
    description: `EvoStrings was conceived as a string trio — its most authentic and defining form.
A refined dialogue between instruments, where each voice moves with intention, creating a sound that is both rich and perfectly balanced.

A reference point in Italy’s luxury wedding scene, EvoStrings adapts seamlessly to each setting — evolving into a duo for more intimate atmospheres, or expanding into a full string quartet with the addition of viola — while preserving its distinctive identity.

On the Terrace of Infinity at Villa Cimbrone, three strings suspend time between wedding vows; within the intimate spaces of Palazzo Avino, a smaller ensemble reshapes the atmosphere with quiet elegance.

The repertoire moves effortlessly between classical rigor and contemporary sensitivity: Vivaldi, Morricone, Einaudi, Max Richter. EvoStrings is particularly recognised for its classical crossover arrangements — international pop repertoire reimagined through the architecture of string writing, in the tradition that the Bridgerton soundtrack brought to wider attention. Always curated with intention, never by chance.`,
    occasionDescription: `The ceremony calls for strings. EvoStrings performs processionals and recessionals with the precision of a chamber group and the warmth of a Southern Italian musical tradition. Available as a duo for the most intimate garden ceremonies in Ravello, a trio for celebrations at Villa Treville, or a full quartet for grand ceremonies in the salons of Palazzo Avino or the Belmond Hotel Caruso.`,
    occasionMoment: 'Ceremony & Cocktail Hour',
    tags: ['Ceremony', 'Cocktail Reception', 'Signing', 'Villa & Garden'],
    schemaType: 'MusicGroup',
    genre: ['Classical', 'Contemporary', 'Cinematic'],
  },
  {
    id: 'trilogy-trio',
    slug: '/trilogy-trio',
    index: '02',
    name: 'Trilogy Trio',
    subLabel: 'Violin · Cello · Piano — Pop, Rock & Cinematic',
    officialUrl: null,
    youtubeUrl: 'https://www.youtube.com/@trilogytrio',
    // YouTube embed: replace null with 'https://www.youtube.com/embed/YOUR_ID'
    photo: '/images/Trilogy%20Trio/Trilogy%20Trio.jpg',
    photoFit: 'contain',
    photoAlt: 'Trilogy Trio — Violin, Cello and Piano, Amalfi Coast wedding',
    moment: null,
    viralBadge: 'A Global Viral Sensation · 1M+ Views on YouTube',
    description: `Three instruments, one unexpected conversation. The Trilogy Trio — violin, cello and piano — occupies the rare territory where classical formation meets cinematic emotion. Coldplay rendered with the weight of a chamber piece, Nino Rota with the lightness of a summer evening on the Amalfi terraces, Hans Zimmer recomposed for three acoustic voices. For couples who want their reception to feel like the score of a film they have not yet seen. Over one million views on YouTube confirm what every audience already knows: this is not background music.`,
    occasionDescription: `Violin, cello and piano: the architecture of emotion. As dinner begins and the lights of the coast multiply on the sea below, the Trilogy Trio creates an atmosphere that is neither classical nor contemporary, but unmistakably cinematic. Hans Zimmer, Ennio Morricone, Nino Rota, Radiohead — repertoire chosen to feel like the score of this precise evening, in this precise place.`,
    occasionMoment: 'Dinner & Cinematic Atmosphere',
    tags: ['Wedding Dinner', 'Evening Reception', 'Aperitivo', 'Candlelit Interior'],
    schemaType: 'MusicGroup',
    interactionCount: 1000000,
    genre: ['Cinematic', 'Pop', 'Rock', 'Contemporary Classical'],
  },
  {
    id: 'violino-solo',
    slug: '/violin-solo',
    index: '03',
    name: 'Violin Solo',
    subLabel: 'Solo Performance · Intimate & Ceremonial',
    officialUrl: 'https://www.donatocipriano.com/en/wedding#services',
    youtubeUrl: null,
    // YouTube embed: replace null with 'https://www.youtube.com/embed/YOUR_ID'
    photo: '/images/Violin%20Solo/immagine_donato.JPG',
    photoAlt: 'Donato Cipriano performing violin solo at a luxury wedding on the Amalfi Coast',
    moment: null,
    viralBadge: null,
    description: `There are moments in a wedding that belong to a single voice.
The entrance. The signing. The suspended silence just after the ceremony.

For these moments — which require no accompaniment or arrangement — Donato Cipriano performs alone.

His violin does not accompany; it defines.
A presence reduced to its essence, capable of turning a gesture into memory.

With over twenty years of experience, his solo performance distills emotion into a single, pure line — carried through the air above the cliffs of Ravello and the terraces of Positano, leaving time itself suspended.`,
    occasionDescription: `A single violin, held at altitude above the Tyrrhenian Sea. Donato Cipriano performs solo for the moments that need no arrangement — the walk down the aisle, the pause before the first vow. A professional violinist whose playing has graced the most distinguished private events on the Amalfi Coast, from the cliffside terraces of Positano to the gardens of Villa Cimbrone in Ravello.`,
    occasionMoment: 'Intimate & Ceremonial Moments',
    tags: ['Processional', 'Signing', 'Intimate Ceremony', 'Private Moment'],
    schemaType: 'MusicGroup',
    genre: ['Classical', 'Contemporary'],
  },
]
