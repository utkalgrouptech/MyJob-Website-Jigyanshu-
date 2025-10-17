'use client';

import React, { useState, useEffect } from 'react';
import {
  Message,
  PersonAdd,
  Settings,
} from '@mui/icons-material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { apiBaseURL } from "../../../config/route.config"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    postedJobs: 0,
    postedCampus: 0,
    totalApplications: 0,
    totalCompanies: 0,
    totalCandidates: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          postedJobsRes,
          postedCampusRes,
          totalApplicationsRes,
          totalCompaniesRes,
          totalCandidatesRes
        ] = await Promise.all([
          fetch(`${apiBaseURL}/postedjob/getAll`),
          fetch(`${apiBaseURL}/event/getall`),
          fetch(`${apiBaseURL}/requestApplication/getAll`),
          fetch(`${apiBaseURL}/organizationDetails/getAll`),
          fetch(`${apiBaseURL}/personalDetails/get`),
        ]);

        const postedJobs = await postedJobsRes.json();
        const postedCampus = await postedCampusRes.json();
        const totalApplications = await totalApplicationsRes.json();
        const totalCompanies = await totalCompaniesRes.json();
        const totalCandidates = await totalCandidatesRes.json();

        console.log(totalCandidates.data)
        console.log(totalCompanies.data)
        console.log(postedJobs.data)
        console.log(postedCampus.data)
        console.log(totalApplications.data)

        setStats({
          postedJobs: postedJobs.data?.length,
          postedCampus: postedCampus.data?.length,
          totalApplications: totalApplications.data?.length,
          totalCompanies: totalCompanies.data?.length,
          totalCandidates: totalCandidates.data?.length,
        });
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const profileViewsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Profile Views',
        data: [200, 250, 180, 300, 400, 320, 450],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const profileViewsOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="h-full bg-gray-100 flex ">
      {/* Main Content */}
      <div className="flex-1 p-8 space-y-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { title: 'Posted Jobs', value: stats.postedJobs, href: '/Employers/managejob' },
    { title: 'Posted Campus', value: stats.postedCampus, href: '/Employers/managecampus' },
    { title: 'Total Applications', value: stats.totalApplications, href: '/Employers/applications' },
    { title: 'Total Companies', value: stats.totalCompanies, href: '/Employers/allcompanies' },
    { title: 'Total Candidates', value: stats.totalCandidates, href: '/Employers/allcandidates' },
  ].map((stat, index) => (
    <a 
      key={index} 
      href={stat.href} 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow block"
    >
      <div className="text-2xl font-semibold">{stat.value}</div>
      <div className="text-gray-500">{stat.title}</div>
    </a>
  ))}
</div>
        {/* Graph and Notifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Views Graph */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-xl font-semibold mb-4">Profile Views</div>
            <Line data={profileViewsData} options={profileViewsOptions} />
          </div>

          {/* Notifications Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-xl font-semibold mb-4">Notifications</div>
            <ul className="space-y-4">
              {[
                {
                  icon: <NotificationsActiveIcon />,
                  text: "You Have New Application For Web Designer!",
                  time: "just now",
                  color: "text-green-500",
                },
                {
                  icon: <Message />,
                  text: "Tesla Jonsin Has Sent You Private Message!",
                  time: "15 min ago",
                  color: "text-blue-500",
                },
                {
                  icon: <PersonAdd />,
                  text: "Henry Wilson Applied For A Job Senior Product Designer",
                  time: "2 months ago",
                  color: "text-orange-500",
                },
                {
                  icon: <Settings />,
                  text: "You Have New Review For #53454 This List",
                  time: "15 days ago",
                  color: "text-yellow-500",
                },
              ].map((notif, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className={notif.color}>{notif.icon}</div>
                  <div>{notif.text}</div>
                  <div className="text-gray-400 text-sm">{notif.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Applicants Section */}
      

      </div>
    </div>
  )
}

export default Dashboard

