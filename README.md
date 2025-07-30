# Portfolio Builder Web App

A modern web application for building and customizing personal portfolios with a user-friendly interface, authentication, and live preview features.

## Features

- **User Authentication:** Secure login and signup functionality using Firebase Authentication.
- **Drag-and-Drop Editor:** Easily add, remove, and rearrange portfolio components with an intuitive drag-and-drop interface.
- **Live Preview:** Instantly preview your portfolio as you make changes.
- **Customizable Sections:** Personalize sections like Hero, About, Contact, and more to showcase your skills and experience.
- **Dashboard:** Manage and organize all your portfolio components from a central dashboard.
- **Responsive Design:** Fully responsive layout for seamless experience on desktop and mobile devices.
- **Modern Tech Stack:** Built with React, TypeScript, Tailwind CSS, and Vite for fast and maintainable development.
- **Firebase Integration:** Real-time data storage and authentication using Firebase services.

## Live Demo
[https://portfolio-builderapp.netlify.app/](https://portfolio-builderapp.netlify.app/)
## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Running the App
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

## Project Structure
- `src/components/` - UI components (auth, dashboard, editor, portfolio sections)
- `src/contexts/` - React context providers for authentication and portfolio state
- `src/services/` - Service logic (e.g., Firebase)
- `src/config/` - Configuration files (e.g., Firebase config)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
