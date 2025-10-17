"use client";

import React, { useState } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const JobAlertPage = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, notification: 'There are many variations of passages orem psum available', date: 'Oct 22, 2024', status: 'Unread' },
    { id: 2, notification: 'There are many variations of passages orem psum available', date: 'Oct 22, 2024', status: 'Read' },
    { id: 3, notification: 'There are many variations of passages orem psum available', date: 'Oct 22, 2024', status: 'Unread' },
    { id: 4, notification: 'There are many variations of passages orem psum available', date: 'Oct 22, 2024', status: 'Read' },
    { id: 5, notification: 'There are many variations of passages orem psum available', date: 'Oct 22, 2024', status: 'Read' },
  ]);

  const handleMarkAsRead = (id: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, status: 'Read' } : alert
      )
    );
  };

  const handleMarkAsUnread = (id: number) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, status: 'Unread' } : alert
      )
    );
  };

  return (
    <section className="p-6">
      <h1 className="text-xl font-bold mb-4">Job Alerts (05)</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Notification</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alerts.map((alert, index) => (
              <TableRow key={alert.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{alert.notification}</TableCell>
                <TableCell>{alert.date}</TableCell>
                <TableCell>{alert.status}</TableCell>
                <TableCell>
                  {alert.status === 'Unread' ? (
                    <IconButton onClick={() => handleMarkAsRead(alert.id)}>
                      <VisibilityOff />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleMarkAsUnread(alert.id)}>
                      <Visibility />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default JobAlertPage;
