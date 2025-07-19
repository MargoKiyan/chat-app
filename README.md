# CozyChat - Real-Time Chat Application

A modern, real-time chat application built with Node.js, Express, and Socket.io. Features include real-time messaging, user connection notifications, and a responsive design.

## Features

- Real-time messaging
- User connection/disconnection notifications
- Responsive design
- Modern UI with Font Awesome icons
- Cross-platform compatibility

## Tech Stack

- **Backend**: Node.js, Express.js, Socket.io
- **Frontend**: HTML5, CSS3, JavaScript
- **Development**: Nodemon for development server

## Prerequisites

- Node.js (version 18.0.0 or higher)
- npm (comes with Node.js)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run devStart
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Production Setup

To start the production server:
```bash
npm start
```

## Deployment on Render.com

### Prerequisites
- GitHub account with your code pushed to a repository
- Render.com account

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Render.com**
   - Sign up/login to [Render.com](https://render.com)
   - Click "New +" and select "Web Service"
   - Connect your GitHub account
   - Select your repository

3. **Configure the Web Service**
   - **Name**: `cozychat` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose your preferred plan (Free tier available)

4. **Environment Variables** (if needed)
   - `PORT`: Render will automatically set this
   - Add any other environment variables in the Render dashboard

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application
   - Your app will be available at the provided URL

### Render.com Configuration

Your application is already configured for Render.com deployment:

- **Port**: Uses `process.env.PORT` (automatically set by Render)
- **Start Command**: `npm start` (defined in package.json)
- **Node Version**: Specified in package.json engines field

## Project Structure

```
chat-app/
├── server.js          # Express server with Socket.io
├── index.html         # Main HTML file
├── style.css          # Stylesheet
├── script.js          # Client-side JavaScript
├── package.json       # Dependencies and scripts
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Environment Variables

The application uses the following environment variables:
- `PORT`: Server port (defaults to 3000 for local development)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License - see package.json for details

## Author

MargoKiyan

---

**Note**: This application is designed to work seamlessly with Render.com's deployment platform. The server automatically adapts to the provided PORT environment variable, making it ready for cloud deployment. 