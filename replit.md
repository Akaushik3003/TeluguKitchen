# TeluguKitchen - Project Documentation

## Overview

TeluguKitchen is a community-driven web application for preserving and sharing traditional Telugu recipes from Andhra Pradesh and Telangana. Built with Next.js 14, TypeScript, Tailwind CSS, and SQLite/Prisma.

## Current State

- **Status:** Fully functional MVP
- **Last Updated:** December 2024

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** SQLite with Prisma ORM
- **Styling:** Tailwind CSS with warm color theme
- **Authentication:** JWT with HTTP-only cookies
- **Animations:** Framer Motion

## Project Architecture

```
├── prisma/
│   ├── schema.prisma    # Database schema (User, Submission, Media)
│   ├── seed.ts          # Seed script for sample data
│   └── dev.db           # SQLite database file
├── public/
│   ├── uploads/         # User uploaded files
│   └── placeholders/    # Placeholder images
├── src/
│   ├── app/
│   │   ├── api/         # API routes (auth, submissions, uploads)
│   │   ├── explore/     # Recipe exploration page
│   │   ├── contribute/  # Recipe submission form
│   │   ├── profile/     # User profile & moderation
│   │   ├── recipe/[id]/ # Recipe detail page
│   │   ├── about/       # About page
│   │   ├── login/       # Login page
│   │   ├── register/    # Registration page
│   │   └── page.tsx     # Landing page
│   ├── components/      # Reusable UI components
│   │   ├── NavBar.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeGrid.tsx
│   │   ├── PlaceholderCard.tsx
│   │   ├── AuthForm.tsx
│   │   ├── FileUploader.tsx
│   │   └── ModerationPanel.tsx
│   ├── contexts/        # React contexts
│   │   └── AuthContext.tsx
│   └── lib/             # Utility functions
│       ├── auth.ts      # JWT auth utilities
│       └── prisma.ts    # Prisma client
```

## Database Models

- **User:** id, username, email, password, role (admin/contributor), timestamps
- **Submission:** id, title, region, foodType, ingredients, steps, status (pending/approved/rejected), contributorId, timestamps
- **Media:** id, filename, type, submissionId, timestamps

## Key Features

1. User authentication with roles
2. Recipe contribution with file uploads
3. Recipe exploration with search/filters
4. Admin moderation panel
5. User profile with recipe management

## Running the Project

```bash
npm install
npm run prisma:push
npm run seed
npm run dev
```

## Default Credentials

- **Admin:** admin@telugukitchen.com / adminpass
- **Contributor:** lakshmi@example.com / password123

## User Preferences

- Using Tailwind CSS with custom warm color theme
- Framer Motion for subtle animations
- Mobile-responsive design
- SQLite database for simplicity

## Recent Changes

- December 2024: Initial MVP implementation
  - Created all core pages and components
  - Implemented authentication system
  - Added recipe submission and moderation
  - Set up Prisma with SQLite
