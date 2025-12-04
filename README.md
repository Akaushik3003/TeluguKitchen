# TeluguKitchen

A community-driven platform to preserve and share traditional Telugu recipes from Andhra Pradesh and Telangana.

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
