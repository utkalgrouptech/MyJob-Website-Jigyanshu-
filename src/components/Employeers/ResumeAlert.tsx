"use client";
import { useState } from "react";

// Define the Notification interface with specific string literals for status
interface Notification {
  id: number;
  content: string;
  date: string;
  status: "Read" | "Unread"; // status must be "Read" or "Unread"
}

// Initial data with "Read" or "Unread" statuses, not general strings
const initialNotifications: Notification[] = [
  { id: 1, content: "Notification 1", date: "Oct 22, 2024", status: "Unread" },
  { id: 2, content: "Notification 2", date: "Oct 22, 2024", status: "Read" },
  { id: 3, content: "Notification 3", date: "Oct 22, 2024", status: "Unread" },
  { id: 4, content: "Notification 4", date: "Oct 22, 2024", status: "Read" },
  { id: 5, content: "Notification 5", date: "Oct 22, 2024", status: "Read" },
];

export default function ResumeAlertsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const toggleStatus = (id: number) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        // Ensure status is toggled correctly between "Read" and "Unread"
        const newStatus: "Read" | "Unread" = notification.status === "Read" ? "Unread" : "Read";
        return { ...notification, status: newStatus };
      }
      return notification;
    });
    setNotifications(updatedNotifications); // Set state with correctly typed notifications
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Resume Alerts (05)</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Notification</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification, index) => (
            <tr key={notification.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{notification.content}</td>
              <td className="border px-4 py-2">{notification.date}</td>
              <td className="border px-4 py-2">{notification.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => toggleStatus(notification.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {notification.status === "Read" ? "Mark as Unread" : "Mark as Read"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
