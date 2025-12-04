# TeluguKitchen

The Traditional Telugu Cuisine Data Collection Platform is a purpose-built digital system designed to systematically gather, organize, and preserve rich, authentic, and region-specific culinary data from across the states of Telangana and Andhra Pradesh. With a focus on both traditional and evolving food practices, this platform serves as a cultural archiving tool, a linguistic asset, and a community-driven research database.

This application empowers users and volunteers to contribute a wide array of multimedia content—ranging from handwritten or typed recipes, cooking process images, local dialect voice recordings, to full-length kitchen video demonstrations. It supports multiple file types and offers seamless data entry modes tailored for both individual users and field researchers.

By prioritizing community participation, the project aims to construct a culturally inclusive, language-aware dataset that reflects the food practices, rituals, and oral histories of Telugu-speaking communities. The collected data will fuel downstream applications in regional language modeling, AI-based culinary knowledge graphs, interactive educational tools, and future heritage conservation initiatives.

The platform is built as a full-stack application with robust role-based authentication, submission tracking, and contributor engagement features. Whether you are an elder sharing your generational knowledge or a student conducting culinary fieldwork, the platform ensures your contributions are organized, archived, and valued—becoming part of a living digital repository of Telugu food heritage.

## Features

- User registration and authentication with role-based access (admin/contributor)
- Recipe contribution with image uploads
- Recipe exploration with search and filters
- Moderation system for recipe submissions
- Personal profile to manage your recipes
- Beautiful, responsive UI with warm color theme

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom warm color theme
- **Database:** SQLite with Prisma ORM
- **Authentication:** JWT with HTTP-only cookies
- **Animations:** Framer Motion

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Database

```bash
npm run prisma:push
```

### 3. Seed Sample Data

```bash
npm run seed
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Default Login Credentials

After running the seed script, you can log in with these accounts:

### Admin Account
- **Email:** admin@telugukitchen.com
- **Password:** adminpass

### Contributor Accounts
- **Email:** lakshmi@example.com
- **Password:** password123

- **Email:** ravi@example.com
- **Password:** password123

> **Important:** Change these credentials in production!

## Environment Variables

Create a `.env` file or set the following environment variables:

```env
JWT_SECRET=your-secure-jwt-secret-here
SESSION_SECRET=your-secure-session-secret-here
```

The app will use `SESSION_SECRET` or `JWT_SECRET` for token signing. Make sure to set a secure value in production.

## Project Structure

```
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed script
├── public/
│   ├── uploads/         # User uploaded files
│   └── placeholders/    # Placeholder images
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── api/         # API routes
│   │   ├── explore/     # Recipe exploration
│   │   ├── contribute/  # Recipe submission
│   │   ├── profile/     # User profile
│   │   └── ...
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts
│   └── lib/             # Utility functions
└── ...
```

## API Routes

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `GET /api/submissions` - List submissions (with filters)
- `POST /api/submissions` - Create submission
- `GET /api/submissions/[id]` - Get submission details
- `PATCH /api/submissions/[id]` - Update submission
- `DELETE /api/submissions/[id]` - Delete submission
- `POST /api/uploads` - Upload files

## Moderation

- New submissions start with `pending` status
- Admin users can approve or reject submissions from their profile page
- Contributors can only see approved recipes and their own submissions
- Admins can see all submissions

## File Uploads

- Supported formats: JPEG, PNG, WebP, GIF, MP3, WAV, MP4, WebM
- Maximum file size: 8MB per file
- Maximum files per submission: 5
- Files are stored in `/public/uploads`

## License

MIT
