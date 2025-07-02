# Sandipto Das - Data Analyst Portfolio

## Overview

This is a modern, responsive portfolio website for Sandipto Das, a Data Analyst. The application is built as a full-stack solution using React for the frontend and Express.js for the backend, with a focus on showcasing professional experience, skills, and projects in data analysis.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **Development**: Hot reload with Vite integration

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Migrations**: Managed through Drizzle Kit with PostgreSQL dialect

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Professional introduction with animated typing effect
- **About Section**: Personal background and statistics
- **Skills Section**: Categorized technical skills display
- **Experience Section**: Professional work history with timeline
- **Projects Section**: Featured projects with GitHub links
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact information and downloadable resume

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware
- **Request Logging**: Comprehensive API request logging

## Data Flow

1. **Client Requests**: Frontend components make API calls using TanStack Query
2. **Server Processing**: Express.js routes handle requests with proper error handling
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with proper HTTP status codes
5. **State Management**: Client-side state updated through React Query cache

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database provider
- **Connection**: Managed through DATABASE_URL environment variable

### UI Libraries
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide Icons**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool with HMR and optimized bundling
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: `vite build` creates optimized static assets
2. **Backend Build**: `esbuild` bundles server code for Node.js
3. **Database Setup**: `drizzle-kit push` applies schema changes
4. **Production Start**: `node dist/index.js` runs the bundled server

### Environment Configuration
- **Development**: `NODE_ENV=development` enables hot reload and debugging
- **Production**: `NODE_ENV=production` optimizes for performance
- **Database**: `DATABASE_URL` must be configured for PostgreSQL connection

### File Structure
- **Client**: Frontend code in `client/` directory
- **Server**: Backend code in `server/` directory
- **Shared**: Common schemas and types in `shared/` directory
- **Assets**: Static assets in `attached_assets/` directory

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 02, 2025. Initial setup