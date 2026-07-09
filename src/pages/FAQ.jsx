import { Head } from 'vite-react-ssg'

// Q&A source of truth — used both for the visible list and the FAQPage JSON-LD.
const faqs = [
  {
    q: 'What live music can you arrange for a wedding on the Amalfi Coast?',
    a: 'A curated selection of musicians and ensembles: string ensembles (duo, trio or quartet), a violin–cello–piano trio, solo violin, saxophone, live vocalists, curated DJ sets, opera, solo piano and traditional Neapolitan posteggia. Each is matched to the moment and to the venue.',
  },
  {
    q: 'Which music works best for a ceremony at a cliffside venue like Villa Cimbrone?',
    a: 'For open terraces such as Villa Cimbrone’s Terrazza dell’Infinito, we favour acoustic formats — solo violin or a string ensemble — that carry naturally without amplification and suit the acoustics of a setting above the sea.',
  },
  {
    q: 'How much does live wedding music cost on the Amalfi Coast?',
    a: 'It depends on the ensemble and number of musicians, the length of the performance, the venue and its logistics, and the season. Send us your date and venue and we will prepare a tailored quote — we reply to every enquiry within 48 hours.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'As early as possible. The Amalfi Coast wedding season (roughly May to September) fills quickly, and the most requested musicians and dates are taken first. Several months ahead is ideal.',
  },
  {
    q: 'Which locations and venues do you cover?',
    a: 'Ravello, Positano, Sorrento and the wider Amalfi Coast, including Amalfi, Praiano and Conca dei Marini. We regularly perform at venues such as Villa Cimbrone, Palazzo Avino, Belmond Hotel Caruso, Villa Treville, Monastero Santa Rosa and Villa Eva.',
  },
  {
    q: 'Can musicians perform outdoors, without electricity?',
    a: 'Yes. Acoustic ensembles — strings and solo violin — are designed for open-air terraces and gardens and need no power. For amplified formats such as a DJ set or saxophone with backing, power and setup are arranged with the venue in advance.',
  },
  {
    q: 'Can we choose the repertoire or request specific songs?',
    a: 'Yes. Programmes are assembled in consultation with the couple — from classical ceremony pieces to contemporary and pop arrangements for the aperitivo and reception.',
  },
  {
    q: 'Do you cover the whole day — ceremony, cocktail hour and reception?',
    a: 'Yes. Music is matched to each phase of the day, from the processional to the final toast, with different formats and ensembles for different moments.',
  },
  {
    q: 'Do you also provide music for proposals, anniversaries and private events?',
    a: 'Yes — marriage proposals, birthdays and anniversaries, and exclusive corporate events, in addition to weddings.',
  },
  {
    q: 'How do we enquire?',
    a: 'Send us your date, venue and the kind of music you imagine through the enquiry form. We respond to every enquiry within 48 hours.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Wedding Music on the Amalfi Coast — FAQ',
  url: 'https://www.weddingmusicravello.com/faq',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQ() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Wedding Music FAQ | Ravello & the Amalfi Coast | Wedding Music Ravello</title>
        <meta name="description" content="Answers to common questions about live wedding music on the Amalfi Coast — ensembles, venues, booking, cost, repertoire and how to enquire." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/faq" />
        <meta property="og:title" content="Wedding Music FAQ | Ravello & the Amalfi Coast | Wedding Music Ravello" />
        <meta property="og:description" content="Answers to common questions about live wedding music on the Amalfi Coast — ensembles, venues, booking, cost and repertoire." />
        <meta property="og:image" content="https://www.weddingmusicravello.com/images/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      {/* Header */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(3rem,7vw,5rem)] pb-[clamp(2rem,4vw,3rem)]
        border-b border-black/[.09]">
        <p className="eyebrow mb-[1.1rem]">Good to Know</p>
        <h1 className="font-serif italic font-light leading-[1.05] text-[#1A1A1A] mb-4"
          style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)', maxWidth: '20ch' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-[.72rem] font-light tracking-[.05em] leading-[1.95] text-[#404040] max-w-[54ch]">
          Live wedding music on the Amalfi Coast — ensembles, venues, booking and repertoire.
          If your question isn&rsquo;t here, we&rsquo;re a message away.
        </p>
      </section>

      {/* Q&A */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,7vw,5rem)]">
        <div className="max-w-[74ch] flex flex-col">
          {faqs.map(({ q, a }, i) => (
            <div key={i}
              className={`py-8 ${i > 0 ? 'border-t border-black/[.09]' : ''}`}>
              <h2 className="font-serif italic font-light text-[#1A1A1A] mb-3"
                style={{ fontSize: 'clamp(1.15rem,2.2vw,1.55rem)', maxWidth: '40ch' }}>
                {q}
              </h2>
              <p className="text-[.72rem] font-light tracking-[.04em] leading-[1.95] text-[#404040] max-w-[68ch]">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)]
        flex items-center justify-between gap-8 flex-wrap">
        <p className="font-serif italic font-light leading-[1.18] text-white/82 max-w-[26ch]"
          style={{ fontSize: 'clamp(1.7rem,3.5vw,2.8rem)' }}>
          Still have a question?
        </p>
        <a href="/contact"
          className="text-[.6rem] font-light tracking-[.22em] uppercase no-underline
            text-[#B8A882] border-b border-[rgba(184,168,130,.35)] pb-1 whitespace-nowrap
            hover:border-[#B8A882] transition-colors">
          Begin Your Enquiry
        </a>
      </section>
    </div>
  )
}
