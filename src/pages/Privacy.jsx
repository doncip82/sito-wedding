import { Head } from 'vite-react-ssg'

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — Wedding Music Ravello',
  url: 'https://www.weddingmusicravello.com/privacy',
  description: 'How Wedding Music Ravello collects and handles personal data submitted through the enquiry form.',
}

function Section({ title, children }) {
  return (
    <section className="mb-9">
      <h2 className="font-serif italic font-light text-[#1A1A1A] mb-3"
        style={{ fontSize: 'clamp(1.15rem,2.2vw,1.5rem)' }}>
        {title}
      </h2>
      <div className="space-y-3 text-[.72rem] font-light tracking-[.04em] leading-[1.95] text-[#404040]">
        {children}
      </div>
    </section>
  )
}

export default function Privacy() {
  return (
    <div className="bg-[#F9F8F7] pt-[68px]">
      <Head>
        <title>Privacy Policy | Wedding Music Ravello</title>
        <meta name="description" content="How Wedding Music Ravello collects, uses and protects the personal data you submit through the enquiry form on this website." />
        <link rel="canonical" href="https://www.weddingmusicravello.com/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.weddingmusicravello.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Wedding Music Ravello" />
        <meta property="og:description" content="How Wedding Music Ravello collects, uses and protects the personal data you submit through the enquiry form." />
        <script type="application/ld+json">{JSON.stringify(privacySchema)}</script>
      </Head>

      {/* Header */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] pt-[clamp(3rem,7vw,5rem)] pb-[clamp(2rem,4vw,3rem)]
        border-b border-black/[.09]">
        <p className="eyebrow mb-[1.1rem]">Legal</p>
        <h1 className="font-serif italic font-light leading-[1.05] text-[#1A1A1A] mb-4"
          style={{ fontSize: 'clamp(2rem,4.5vw,3.4rem)' }}>
          Privacy Policy
        </h1>
        <p className="text-[.56rem] font-light tracking-[.16em] uppercase text-[#8A7A5A]">
          Last updated: 21 July 2026
        </p>
      </section>

      {/* Body */}
      <section className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,7vw,5rem)]">
        <div className="max-w-[70ch]">
          <p className="text-[.72rem] font-light tracking-[.04em] leading-[1.95] text-[#404040] mb-9">
            This Privacy Policy explains how your personal data is collected, used and protected
            when you contact us through this website. We keep it deliberately short and clear.
          </p>

          <Section title="Who is responsible for your data">
            <p>
              Wedding Music Ravello is a curatorial platform operated by <strong>Donato Cipriano</strong>{' '}
              (the “Data Controller”). For any question or request regarding your personal data,
              you can write to{' '}
              <a href="mailto:info@weddingmusicravello.com" className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
                info@weddingmusicravello.com
              </a>.
            </p>
          </Section>

          <Section title="What data we collect">
            <p>
              When you submit the enquiry form, we collect the information you provide: your
              name, email address, wedding or event date, venue, preferred ensemble and your
              message. We collect only what you choose to send us.
            </p>
            <p>
              Our hosting provider also automatically processes limited technical data (such as
              IP address and browser information) for security and to keep the site running.
            </p>
          </Section>

          <Section title="Why we use it">
            <p>
              We use your data solely to read and respond to your enquiry and to discuss music
              for your event. We do not use the personal information submitted through the enquiry
              form for personalised advertising or audience targeting, and we never sell it.
            </p>
            <p>
              We do not carry out automated decision-making or profiling based on your data.
            </p>
          </Section>

          <Section title="Legal basis">
            <p>
              We process your enquiry on the basis of your <strong>consent</strong> (given when
              you tick the consent box on the form) and, where relevant, to take steps at your
              request before entering into a possible agreement.
            </p>
          </Section>

          <Section title="Who processes your data">
            <p>
              To run the website and deliver emails, your data is handled by trusted providers
              acting strictly on our behalf: <strong>Vercel</strong> (website hosting) and{' '}
              <strong>Resend</strong> (email delivery). We do not share your data with anyone else.
            </p>
            <p>
              Some of this processing may take place outside the European Economic Area (for
              example, in the United States). Where that happens, it is covered by appropriate
              safeguards, such as the European Commission’s Standard Contractual Clauses.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep your enquiry only for as long as necessary to handle your request and for
              a reasonable period afterwards, and then delete it. You can ask us to delete it
              sooner at any time.
            </p>
          </Section>

          <Section title="How we protect your data">
            <p>
              Your enquiry is transmitted over an encrypted (HTTPS) connection and handled only
              by the providers described above. We take reasonable technical and organisational
              measures to protect it against loss, misuse or unauthorised access.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under the GDPR you may request access to your data, and its correction, deletion
              or restriction; you may object to its processing, request portability, and withdraw
              your consent at any time. To exercise any of these rights, email{' '}
              <a href="mailto:info@weddingmusicravello.com" className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
                info@weddingmusicravello.com
              </a>.
            </p>
            <p>
              You also have the right to lodge a complaint with the Italian Data Protection
              Authority (<em>Garante per la protezione dei dati personali</em>).
            </p>
          </Section>

          <Section title="Cookies & similar technologies">
            <p>
              Beyond the cookies strictly needed to run the site, this website can use the{' '}
              <strong>Google tag</strong> and <strong>Google Ads</strong> to measure website
              visits and the performance of our advertising (for example, how many enquiries
              result from a Google Ads campaign). These involve two categories of non-essential
              cookies:
            </p>
            <p>
              <strong>Analytics</strong> — measuring visits so we can understand and improve the
              site. <strong>Advertising</strong> — measuring conversions and the effectiveness of
              our Google Ads campaigns. A conversion is measured when, after successfully sending
              an enquiry, you are shown a dedicated confirmation page. If you decline advertising
              cookies, this does not happen: your enquiry is still sent and confirmed on the same
              page, and no advertising conversion is measured.
            </p>
            <p>
              <strong>Essential</strong> cookies (needed for the site and the enquiry form to
              work) are always active. The <strong>analytics</strong> and <strong>advertising</strong>{' '}
              cookies are used <strong>only if you allow them</strong>. On your first visit a cookie
              banner lets you <em>Accept all</em> or <em>Reject non-essential</em> cookies, and until
              you choose, non-essential cookies stay off (we apply Google’s Consent Mode with all
              non-essential storage denied by default).
            </p>
            <p>
              You can change or withdraw your choice at any time using the{' '}
              <strong>“Cookie Settings”</strong> link in the footer of every page. Your preference
              is stored on your device and kept until you change it, clear your browser storage, or
              we make a material change to this policy (after which the banner is shown again).
            </p>
            <p>
              When analytics or advertising cookies are enabled, some data may be transmitted to and
              processed by <strong>Google</strong>, including in countries outside the European
              Economic Area (such as the United States), under appropriate safeguards. For details on
              how Google processes this data, see{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
                Google’s Privacy Policy
              </a>{' '}and{' '}
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer"
                className="text-[#8A7A5A] no-underline border-b border-[#8A7A5A]/40 hover:border-[#8A7A5A]">
                How Google uses cookies
              </a>.
            </p>
            <p>
              The site also loads typefaces from Google Fonts, which may receive your IP address in
              order to serve the fonts, and our hosting provider may process limited technical data
              for security and performance.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The current version will always be
              available on this page.
            </p>
          </Section>
        </div>
      </section>
    </div>
  )
}
