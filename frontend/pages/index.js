
import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message) return

    const updated = [...messages, { role: 'user', content: message }]
    setMessages(updated)
    setLoading(true)

    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })

    const data = await res.json()

    setMessages([
      ...updated,
      { role: 'assistant', content: data.response }
    ])

    setMessage('')
    setLoading(false)
  }

  return (
    <div style={{
      background: '#0f172a',
      color: 'white',
      minHeight: '100vh',
      padding: 20,
      fontFamily: 'Arial'
    }}>
      <h1>AI Chat Clone</h1>

      <div style={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              background: msg.role === 'user' ? '#1e293b' : '#334155',
              padding: 12,
              borderRadius: 10
            }}
          >
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 20,
        display: 'flex',
        gap: 10
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ãcris un message..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 8,
            border: 'none'
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: '12px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? '...' : 'Envoyer'}
        </button>
      </div>
    </div>
  )
}
