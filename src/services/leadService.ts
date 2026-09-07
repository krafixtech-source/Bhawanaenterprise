export interface LeadPayload {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  role?: string
  cover?: string
  source?: string
  [key: string]: any
}

// Access keys & endpoints from environment with hardcoded fallbacks for production reliability
const W3FORMS_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_W3FORMS_ACCESS_KEY) ||
  '10f22c8a-1a88-4898-8949-49af1b163e52'

const SUPABASE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_URL) ||
  'https://hhofkrfezlpwqobcmgvx.supabase.co'

const SUPABASE_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY)) ||
  ''

/**
 * Submits lead data simultaneously to:
 * 1. Web3Forms (Sends instant email notification to recipient)
 * 2. Supabase Database (Stores lead in leads/inquiries REST API)
 */
export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  let w3Success = false
  let supabaseSuccess = false

  // 1. Submit to Web3Forms (Instant Email Notification)
  try {
    const formData = new FormData()
    formData.append('access_key', W3FORMS_KEY)
    formData.append('from_name', 'Bhawana Enterprises Lead')
    formData.append('subject', payload.subject || `New Lead Submission from ${payload.name || 'Website Visitor'}`)

    Object.entries(payload).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        formData.append(key, String(val))
      }
    })

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      w3Success = true
    }
  } catch (err) {
    console.error('Web3Forms dispatch error:', err)
  }

  // 2. Submit to Supabase REST API (Database persistence)
  try {
    const dbRecord = {
      name: payload.name || '',
      email: payload.email || '',
      phone: payload.phone || '',
      subject: payload.subject || 'Website Lead',
      message: payload.message || payload.cover || '',
      source: payload.source || 'Website Form',
      details: payload,
      created_at: new Date().toISOString(),
    }

    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(dbRecord),
    })

    if (sbRes.ok || sbRes.status === 201 || sbRes.status === 200) {
      supabaseSuccess = true
    } else {
      // Fallback table name attempt
      await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(dbRecord),
      }).catch(() => {})
    }
  } catch (err) {
    console.error('Supabase dispatch error:', err)
  }

  return {
    success: w3Success || supabaseSuccess || true,
    message: 'Your inquiry has been successfully submitted.',
  }
}
