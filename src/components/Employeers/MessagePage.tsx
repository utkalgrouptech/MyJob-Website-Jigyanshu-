'use client'

import { useState } from 'react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  avatar: string
}

const messages: Message[] = [
  {
    id: 1,
    sender: 'Roger Knight',
    content: 'Hi, it is a long establish fact...',
    timestamp: '15 min ago',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 2,
    sender: 'Rikki Hamby',
    content: 'Hello, it is a long establish fact...',
    timestamp: '5 hours ago',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 3,
    sender: 'Arlene Lawrence',
    content: 'Hi, it is a long establish fact...',
    timestamp: 'Yesterday',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 4,
    sender: 'Donald Ledoux',
    content: 'Hello, it is a long establish fact...',
    timestamp: '2 weeks ago',
    avatar: '/placeholder.svg?height=40&width=40'
  }
]

const chatMessages: Message[] = [
  {
    id: 1,
    sender: 'User',
    content:
      'Hello, it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    timestamp: '10:00 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 2,
    sender: 'Other',
    content:
      'There are many variations of passages available but the majority have suffered alteration in some form by injected humour.',
    timestamp: '10:02 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 3,
    sender: 'User',
    content:
      'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.',
    timestamp: '10:05 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 4,
    sender: 'Other',
    content:
      'So blinded by desire that they cannot foresee the pain and trouble that are bound to ensue.',
    timestamp: '10:08 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  }
]

export default function ChatInterface() {
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Messages List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        <div className="h-[calc(100vh-73px)] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <img src={message.avatar} alt={message.sender} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{message.sender}</p>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b bg-white">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=40&width=40" alt="Current chat" />
          </div>
          <div>
            <h2 className="text-sm font-medium">Current Chat</h2>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === 'User' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <img src={message.avatar} alt={message.sender} />
                </div>
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.sender === 'User'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setNewMessage('')
            }}
            className="flex gap-2"
          >
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded"
            />
            <button type="submit" className="p-2 text-white bg-blue-500 rounded">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
