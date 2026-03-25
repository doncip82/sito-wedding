// components/ui/TextLink.jsx
export default function TextLink({ href, children, external = false, className = '' }) {
  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <a href={href} className={`link-underline ${className}`} {...props}>
      {children}
    </a>
  )
}
