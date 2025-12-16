useEffect(() => {
  if (window.gtag) {
    window.gtag('event', 'preregistration_submitted', {
      page: 'thank-you'
    })
  }
}, [])
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="container">
      <h1>Thank you for your interest in tCredex.</h1>

      <p>
        We are onboarding users in phases to ensure data quality,
        system performance, and compliance readiness.
      </p>

      <p>
        If selected for early access, you will receive an invitation
        by email.
      </p>

      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
    </main>
  )
}
