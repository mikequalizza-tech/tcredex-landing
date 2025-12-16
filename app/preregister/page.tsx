'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Preregister() {
  const router = useRouter()
  const [form, setForm] = useState<any>({})

  async function submit(e: any) {
    e.preventDefault()

    await fetch('/api/preregister', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    router.push('/thank-you')
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Organization" onChange={e => setForm({...form, organization: e.target.value})} />

      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option>Sponsor / Developer</option>
        <option>CDE</option>
        <option>Investor</option>
        <option>Consultant</option>
      </select>

      <textarea placeholder="Optional note" />

      <label>
        <input type="checkbox" required /> I agree to the Platform Terms
      </label>

      <button type="submit">Request Invitation</button>
    </form>
  )
}
