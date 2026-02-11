# Freelance Flow

A comprehensive project management dashboard for freelancers to manage projects, clients, payments, and tasks efficiently.

## 🔗 Live Demo

Check out the live application: **[Freelance Flow](https://freelance-flow-smoky.vercel.app/)**

## Features

- **Dashboard** - Overview of all projects, upcoming tasks, and recent activities
- **Projects Management** - Create, track, and manage projects with:
  - Task-based progress calculation
  - Multiple status filters (Ongoing, Delayed, Pending, Completed)
  - Real-time progress tracking
  - Project details (title, company, deadline, payment, description)
  - Delete functionality
  
- **Clients Management** - View and manage all your clients
- **Payments Tracking** - Monitor and track all project payments
- **Task Management** - Break down projects into tasks and track completion
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Local Storage** - All data is saved locally in your browser

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons (FontAwesome, Ant Design Icons)
- **State Management**: React Hooks (useState)
- **Storage**: Browser LocalStorage

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohibkhan2001/Freelance-Flow
   cd "Freelance flow"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── clients/           # Client management components
│   │   ├── ClientCardsGrid.jsx
│   │   └── ClientsCard.jsx
│   ├── common/            # Shared components
│   │   ├── Header.jsx
│   │   └── Overlay.jsx
│   ├── dashboard/         # Dashboard components
│   │   ├── AlertBanner.jsx
│   │   ├── DashboardContent.jsx
│   │   ├── RecentProjectsCard.jsx
│   │   ├── StatCard.jsx
│   │   ├── StatsGrid.jsx
│   │   ├── TaskList.jsx
│   │   ├── UpcomingTasksCard.jsx
│   ├── payments/          # Payment tracking components
│   │   ├── PaymentsCard.jsx
│   │   ├── PaymentsFilter.jsx
│   │   ├── PaymentsGrid.jsx
│   │   └── PaymentsTable.jsx
│   ├── projects/          # Project management components
│   │   ├── ProjectDelete.jsx
│   │   ├── ProjectsAdd.jsx
│   │   ├── ProjectsCard.jsx
│   │   ├── ProjectsFilter.jsx
│   │   ├── ProjectsFilterGrid.jsx
│   │   └── ProjectsGrid.jsx
│   └── sidebar/           # Navigation sidebar
│       ├── InfoBox.jsx
│       ├── Navigation.jsx
│       └── Sidebar.jsx
├── pages/                 # Page components
│   ├── Clients.jsx
│   ├── Dashboard.jsx
│   ├── Error404.jsx
│   ├── Payments.jsx
│   └── Projects.jsx
├── data/                  # Mock data
│   ├── clientsData.js
│   └── projectsData.js
├── utils/                 # Utility functions
│   └── dateUtils.js
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Usage

### Creating a Project

1. Navigate to the **Projects** page
2. Click the blue **+** button in the bottom right
3. Fill in the project details:
   - Project Title
   - Company/Client name
   - Deadline (date)
   - Payment amount
   - Description
   - Add tasks to calculate project progress
4. Mark tasks as complete to update the progress percentage
5. Click **Add Project** to save

### Managing Tasks

- Add tasks while creating a project
- Check the checkbox to mark tasks as complete
- Tasks progress is automatically calculated when you create the project
- Progress percentage reflects completed tasks / total tasks

### Filtering Projects

Use the filter buttons to view projects by status:
- All Projects
- Ongoing
- Delayed
- Pending
- Completed

### Deleting Projects

1. Click the delete icon (trash can) in the top right of the Projects page
2. Click the delete button on the desired project card
3. Confirm the deletion

## Data Storage

All projects, clients, and payment data are stored in your browser's **LocalStorage**. This means:
- Data persists across sessions
- No external server required
- Data is local to your browser
- Clear browser cache to delete data

## Features Details

### Progress Calculation
Progress is calculated based on task completion:
```
Progress = (Completed Tasks / Total Tasks) × 100%
```

### Project Status
- **Ongoing** - Active projects in progress
- **Delayed** - Projects past their deadline
- **Pending** - Projects not yet started
- **Completed** - Finished projects

### Date Utilities
Automatically calculates project status based on deadline and remaining time.

## Future Enhancements

- Cloud synchronization
- Export reports
- Invoice generation
- Team collaboration features
- Advanced analytics and charts
- Email notifications
- Mobile app

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the project maintainers.

---

**Happy freelancing! 🚀**
