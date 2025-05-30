# Blog Website Setup Instructions

This guide will help you set up this full-stack blog website with Node.js/Express backend and Next.js frontend.

## Project Structure

```
blog-project/
├── backend/
│   ├── server.ts
│   └── package.json
└── frontend/
    ├── pages/
    │   ├── index.ts
    │   ├── create.ts
    │   └── posts/
    │       └── [slug].ts
    └── package.json
```

## Backend Setup (Express Server)

### 1. Create Backend Directory and Files

```bash
mkdir blog-project
cd blog-project
mkdir backend
cd backend
```

### 2. Initialize and Install (node & typescript & jest for testing) Dependencies

```bash
npm init -y
npm install express cors dotenv mongoose
npm install express dotenv
npm install -D typescript ts-node @types/node @types/express nodemon eslint prettier
npm install --save-dev jest ts-jest @types/jest
npx tsc --init
```

### 3. Create server.ts

Copy the Express server code from the artifacts above into `server.js`.

### 4. Update package.json

Copy the backend package.json content from the artifacts above.

### 5. Start the Backend Server

```bash
# For development with auto-restart
npm run dev

# Or for production
npm start
```

The server will run on `http://localhost:8080`

## Frontend Setup (Next.js)

### 1. Create Frontend Directory

```bash
# From the blog-project root directory
mkdir frontend
cd frontend
```

### 2. Initialize Next.js Project

```bash
npx create-next-app@latest . --use-npm --import-alias "@/*"
```

Or manually install dependencies:

```bash
npm init -y
npm install next react react-dom
npm install -D eslint eslint-config-next
```

### 3. Create Pages Directory Structure

```bash
mkdir -p pages/posts
```

### 4. Create Page Files

Copy the following files from the artifacts above:
- `pages/index.js` (Home page)
- `pages/create.js` (Create post page)
- `pages/posts/[slug].js` (Individual post page)

### 5. Update package.json

Copy the frontend package.json content from the artifacts above.

### 6. Start the Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get a single post by ID or slug
- `POST /api/posts/create` - Create a new post
- `PUT /api/posts/update/:id` - Update an existing post
- `DELETE /api/posts/delete/:id` - Delete a post
- `GET /api/health` - Health check endpoint

## Features

### Current Features
- ✅ View all blog posts on the home page
- ✅ Read individual blog posts
- ✅ Create new blog posts
- ✅ Responsive design
- ✅ SEO-friendly URLs with slugs
- ✅ Error handling
- ✅ Loading states

### Backend Features
- RESTful API design
- CORS enabled for frontend communication
- In-memory data storage (posts array)
- Automatic slug generation from titles
- Input validation
- Error handling middleware

### Frontend Features
- Server-side rendering with Next.js
- Dynamic routing for blog posts
- Responsive CSS-in-JS styling
- Form handling for post creation
- Loading and error states
- SEO meta tags

## Usage

1. **Start both servers:**
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev`

2. **Visit the application:**
   - Open `http://localhost:3000` in your browser

3. **Create your first post:**
   - Click "Create New Post" button
   - Fill in the title, author, and content
   - Submit the form

4. **View posts:**
   - All posts are displayed on the home page
   - Click on any post title to read the full content

## Customization

### Styling
- The frontend uses Tailwind css.
- Modify the inline tailwind styles in each component to customize appearance
- The design is fully responsive

### Backend Data Storage
- Currently uses in-memory storage (posts array)
- For production, replace with a database like MongoDB, PostgreSQL, or MySQL
- Add user authentication for post management
- Implement categories and tags

### Additional Features to Consider
- User authentication and authorization
- Comment system
- Image upload for posts - imagekit
- Rich text editor
- Search functionality
- Categories and tags
- Admin dashboard
- Database integration

## Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Ensure the backend server is running on port 5000
   - Check that CORS is properly configured in server.js

2. **API Connection Issues:**
   - Verify both servers are running
   - Check the API URLs in frontend code match your backend port

3. **Page Not Found:**
   - Ensure the file structure matches the routing conventions
   - Check that `[slug].ts` is in the `pages/posts/` directory

4. **Styling Issues:**
   - Verify tailwind configuration is working properly
   - Check for any CSS syntax errors in the inline tailwind blocks

## Production Deployment

### Backend Deployment
- Use environment variables for configuration
- Set up a production database
- Configure proper error logging
- Use process managers like PM2

### Frontend Deployment
- Build the Next.js application: `npm run build`
- Deploy to platforms like Vercel, Netlify, or your own server
- Configure environment variables for API endpoints

This setup provides a solid foundation for a blog website that you can extend and customize according to your needs!
