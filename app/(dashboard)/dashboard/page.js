import React from 'react';
import { getBlogs } from '@/app/lib/data';
import DashboardClientPage from './DashboardClientPage';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#37306b',
};

const DashboardServerPage = async () => {
    let initialBlogs = [];
    let metrics = {
        totalBlogs: 0,
        totalUsers: 0, // Placeholder
        totalViews: 0, // Placeholder
        totalComments: 0, // Placeholder
    };

    try {
        // Fetch recent blogs
        const fetchedBlogs = await getBlogs({ fields: 'title,createdAt,id', limit: 5 }); // Fetch top 5 recent blogs
        initialBlogs = fetchedBlogs;
        metrics.totalBlogs = fetchedBlogs.length; // Simple count for now
    } catch (err) {
        console.error('Error fetching blogs for dashboard:', err);
        // Handle error gracefully, perhaps set an error state or empty data
    }

    // In a real application, you would fetch actual metrics here
    // For now, using placeholder values or derived from fetched data
    // metrics.totalUsers = await getTotalUsers();
    // metrics.totalViews = await getTotalViews();
    // metrics.totalComments = await getTotalComments();

    return (
        <DashboardClientPage initialBlogs={initialBlogs} metrics={metrics} />
    );
};

export default DashboardServerPage;
