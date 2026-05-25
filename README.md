# Nexus Dashboard

A modern learning analytics dashboard built using Next.js 16, Tailwind CSS, Framer Motion, and Supabase.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Lucide React Icons

---

## Features

- Modern responsive dashboard UI
- Course progress tracking
- Weekly activity heatmap
- Animated course cards
- Glassmorphism design system
- Supabase integration
- Server-side data fetching

---

## Architecture Decisions

### Server / Client Component Split

Server Components:
- `page.tsx`
- Supabase data fetching

Client Components:
- Sidebar interactions
- Framer Motion animations
- Interactive UI cards

This split improves performance by reducing unnecessary client-side JavaScript.

---

## Supabase Integration

The dashboard fetches course data from a Supabase table named:

```sql
courses