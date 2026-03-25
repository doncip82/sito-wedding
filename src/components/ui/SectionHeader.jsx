// components/ui/SectionHeader.jsx
export default function SectionHeader({ eyebrow, title, note }) {
  return (
    <div className="flex justify-between items-start gap-8 mb-[clamp(3.5rem,8vw,7rem)] flex-wrap">
      <div>
        <p className="eyebrow mb-[1.1rem]">{eyebrow}</p>
        <h2 className="section-title" style={{ maxWidth: '18ch' }}
          dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {note && (
        <p className="text-[.64rem] font-light tracking-[.1em] leading-[1.95] text-[#404040]
          max-w-[30ch] self-end text-right"
          dangerouslySetInnerHTML={{ __html: note }} />
      )}
    </div>
  )
}
