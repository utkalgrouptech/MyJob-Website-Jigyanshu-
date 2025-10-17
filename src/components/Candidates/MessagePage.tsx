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
    sender: 'Candidate',
    content:
      'Hello, I’d like to learn more about the next steps in the hiring process.',
    timestamp: '10:00 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  },
  {
    id: 2,
    sender: 'Recruiter',
    content:
      'Thank you for reaching out! We’re reviewing your application and will get back soon.',
    timestamp: '10:02 AM',
    avatar: '/placeholder.svg?height=40&width=40'
  }
]

export default function CandidateChatPortal() {
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar: Messages List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-blue-600">Message Center</h1>
          <p className="text-sm text-gray-500">Connect with recruiters</p>
        </div>
        <div className="h-[calc(100vh-73px)] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer border-b"
            >
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">
                    {message.sender}
                  </p>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-white">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Current chat"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-700">Recruiter</h2>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === 'Candidate' ? 'flex-row-reverse' : ''
                }`}
              >
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.sender === 'Candidate'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
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
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
