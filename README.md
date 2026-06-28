# 🛒 E-Commerce Web Application

Fullstack e-commerce web application developed as a university project for the **Web Programming** course at the **University of Perugia**.

## 🛠️ Tech Stack

**Frontend**
- React 18
- Redux (state management)
- React Router DOM (client-side routing)
- Bootstrap 5

**Backend & Database**
- Node.js + Nodemon
- Supabase (Backend as a Service)
- PostgreSQL (via `pg`)

**Other**
- Nodemailer (email notifications)
- nanoid (unique ID generation)

## 📁 Project Structure
├──Database/       # SQL scripts and database configuration
├── Server/         # Node.js backend logic
├── public/         # Static assets
├── src/            # React frontend source code
├── package.json
└── .gitignore

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm
- A Supabase account and project

### Installation

```bash
# Clone the repository
git clone https://github.com/cappuu02/Web.git
cd Web

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory and add your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run the application

```bash
# Start the frontend
npm start

# Start the backend (from the Server directory)
cd Server
node server.js
```

The app will be available at `http://localhost:3000`.

## 👨‍💻 Author

**Luca Capuccini** — University of Perugia, B.Sc. in Computer Science
