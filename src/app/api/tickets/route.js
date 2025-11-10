export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Outlook app fails to sync new messages on iOS.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Alexandra Menendez',
      updatedAt: '2025-11-01T09:12:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop running slow',
      description: 'Performance degraded after latest Windows update.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-02T13:30:00Z'
    },
    {
      id: 't-1004',
      title: 'Password reset required',
      description: 'User locked out after multiple failed attempts.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Dominic Marshall',
      updatedAt: '2025-11-03T08:45:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer offline - 3rd floor',
      description: 'Network printer intermittently disappears from list.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Oscar Mayer',
      updatedAt: '2025-11-04T10:05:00Z'
    },
    {
      id: 't-1006',
      title: 'Okta MFA prompt looping',
      description: 'User stuck in repeated MFA challenge when logging in.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Ally Barstal',
      updatedAt: '2025-11-05T16:22:00Z'
    },
    {
      id: 't-1007',
      title: 'SharePoint permissions change',
      description: 'Marketing needs edit rights to Q4 folder.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-06T11:10:00Z'
    },
    {
      id: 't-1008',
      title: 'Zoom crashes on join',
      description: 'Clients Zoom desktop app closes when joining meetings.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-06T14:58:00Z'
    },
    {
      id: 't-1009',
      title: 'New hire account setup',
      description: 'Provision accounts and laptop for new analyst.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Sasha Cruller',
      updatedAt: '2025-11-07T09:00:00Z'
    },
    {
      id: 't-1010',
      title: 'Teams notifications delayed',
      description: 'Push notifications arrive several minutes late.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Lily Droller',
      updatedAt: '2025-11-07T12:25:00Z'
    },
    {
      id: 't-1011',
      title: 'Database access request',
      description: 'Grant read-only access to reporting schema.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Andrew Andaluz',
      updatedAt: '2025-11-08T08:00:00Z'
    },
    {
      id: 't-1012',
      title: 'Mac cannot mount network drive',
      description: 'SMB share fails with permissions error.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Laura Lear',
      updatedAt: '2025-11-08T15:40:00Z'
    },
    {
      id: 't-1013',
      title: 'Security alert: Suspicious login',
      description: 'Impossible travel detected for user account.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Xavier Bernal',
      updatedAt: '2025-11-09T02:17:00Z'
    },
    {
      id: 't-1014',
      title: 'Broken HDMI in conference room A',
      description: 'Cable damaged; video cuts out intermittently.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Alessandro Meneses',
      updatedAt: '2025-11-09T10:12:00Z'
    }
  ];

  return Response.json(tickets);
}

