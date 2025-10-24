/*
  # Portfolio Database Schema

  ## Overview
  This migration creates the core tables for managing portfolio content including blogs, projects, and experiences.

  ## New Tables
  
  ### 1. `blogs`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Short preview/excerpt
  - `content` (text) - Full blog content (supports markdown)
  - `thumbnail_url` (text, optional) - URL to blog thumbnail image
  - `author` (text) - Author name
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `is_published` (boolean) - Publication status
  - `tags` (text[]) - Array of tags/categories
  - `read_time` (integer) - Estimated reading time in minutes

  ### 2. `projects`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `slug` (text, unique) - URL-friendly identifier
  - `short_description` (text) - Brief overview for cards
  - `full_description` (text) - Detailed project description
  - `thumbnail_url` (text) - Project thumbnail/preview image
  - `tech_stack` (text[]) - Technologies used
  - `role` (text) - Your role in the project
  - `timeline` (text) - Project duration
  - `project_url` (text, optional) - Live project URL
  - `github_url` (text, optional) - GitHub repository URL
  - `screenshots` (text[]) - Array of screenshot URLs
  - `challenges` (text, optional) - Challenges faced
  - `outcomes` (text, optional) - Results achieved
  - `is_featured` (boolean) - Show in highlights
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. `experiences`
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier
  - `company` (text) - Company name
  - `position` (text) - Job title/role
  - `short_description` (text) - Brief summary for cards
  - `full_description` (text) - Detailed description
  - `thumbnail_url` (text, optional) - Company logo or relevant image
  - `start_date` (date) - Employment start date
  - `end_date` (date, optional) - Employment end date (null for current)
  - `location` (text) - Work location
  - `responsibilities` (text[]) - Key responsibilities
  - `achievements` (text[]) - Notable achievements
  - `skills` (text[]) - Skills utilized/gained
  - `is_featured` (boolean) - Show in highlights
  - `display_order` (integer) - Sort order
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - All tables have RLS enabled
  - Public read access (SELECT) for published content
  - No write access without authentication (prepared for future admin panel)

  ## Notes
  1. All timestamps use `timestamptz` for timezone awareness
  2. Slugs are unique for clean URL routing
  3. Arrays are used for flexible multi-value fields
  4. Featured flags allow highlighting select items
  5. Display order enables manual sorting
*/

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  thumbnail_url text,
  author text NOT NULL DEFAULT 'Admin',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_published boolean DEFAULT true,
  tags text[] DEFAULT '{}',
  read_time integer DEFAULT 5
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  thumbnail_url text NOT NULL,
  tech_stack text[] DEFAULT '{}',
  role text NOT NULL,
  timeline text NOT NULL,
  project_url text,
  github_url text,
  screenshots text[] DEFAULT '{}',
  challenges text,
  outcomes text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  thumbnail_url text,
  start_date date NOT NULL,
  end_date date,
  location text NOT NULL,
  responsibilities text[] DEFAULT '{}',
  achievements text[] DEFAULT '{}',
  skills text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published content
CREATE POLICY "Public can view published blogs"
  ON blogs FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "Public can view all projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view all experiences"
  ON experiences FOR SELECT
  TO anon
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured, display_order);
CREATE INDEX IF NOT EXISTS idx_experiences_slug ON experiences(slug);
CREATE INDEX IF NOT EXISTS idx_experiences_featured ON experiences(is_featured, display_order);

-- Insert sample blog data
INSERT INTO blogs (title, slug, description, content, thumbnail_url, tags, read_time) VALUES
(
  'Building Modern Web Applications with React and TypeScript',
  'building-modern-web-apps-react-typescript',
  'Learn how to leverage React and TypeScript to build scalable, type-safe web applications with best practices.',
  '# Building Modern Web Applications

In this comprehensive guide, we''ll explore the powerful combination of React and TypeScript...

## Why TypeScript?

TypeScript brings static typing to JavaScript, helping catch errors early and improving developer experience...

## Setting Up Your Project

First, create a new project using Vite...

```bash
npm create vite@latest my-app -- --template react-ts
```

## Best Practices

1. Use proper typing for props and state
2. Leverage TypeScript''s inference
3. Create reusable type definitions

## Conclusion

React and TypeScript together create a powerful foundation for modern web development.',
  'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
  ARRAY['React', 'TypeScript', 'Web Development'],
  8
),
(
  'The Future of Web Design: Trends in 2025',
  'future-web-design-trends-2025',
  'Discover the latest web design trends shaping the digital landscape in 2025, from AI-powered designs to immersive experiences.',
  '# The Future of Web Design

The web design landscape is constantly evolving. Let''s explore what''s trending in 2025...

## AI-Powered Design

Artificial intelligence is revolutionizing how we approach web design...

## Immersive Experiences

3D elements and interactive animations are becoming standard...

## Minimalism 2.0

Clean, functional designs with purposeful use of space...

## Accessibility First

Inclusive design is no longer optional—it''s essential...

## Conclusion

Staying ahead of these trends will help create engaging, modern web experiences.',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
  ARRAY['Design', 'Trends', 'UI/UX'],
  6
),
(
  'Mastering State Management in React Applications',
  'mastering-state-management-react',
  'A deep dive into different state management solutions for React, helping you choose the right tool for your project.',
  '# Mastering State Management

State management is crucial for building complex React applications...

## Built-in Solutions

### useState and useContext

For simple state needs, React''s built-in hooks are perfect...

### useReducer

Complex state logic? useReducer provides a Redux-like pattern...

## External Libraries

### Redux Toolkit

The modern way to use Redux...

### Zustand

Lightweight and intuitive state management...

### Jotai

Atomic state management for React...

## Choosing the Right Tool

Consider your app''s complexity and team preferences...

## Conclusion

Each solution has its place—choose based on your specific needs.',
  'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
  ARRAY['React', 'State Management', 'JavaScript'],
  10
);

-- Insert sample project data
INSERT INTO projects (title, slug, short_description, full_description, thumbnail_url, tech_stack, role, timeline, project_url, github_url, screenshots, challenges, outcomes, is_featured, display_order) VALUES
(
  'E-Commerce Platform',
  'ecommerce-platform',
  'A full-stack e-commerce platform with payment integration and real-time inventory management.',
  'This comprehensive e-commerce platform was built to provide a seamless shopping experience for users while offering powerful management tools for administrators.

The platform features a modern, responsive design that works flawlessly across all devices. Users can browse products, filter by categories, add items to cart, and complete purchases securely through integrated payment gateways.

The admin dashboard provides real-time analytics, inventory management, order tracking, and customer management tools.',
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
  ARRAY['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  'Full-Stack Developer',
  'January 2024 - April 2024',
  'https://example-ecommerce.com',
  'https://github.com/yourusername/ecommerce',
  ARRAY[
    'https://images.pexels.com/photos/34577/pexels-photo.jpg',
    'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg',
    'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
  ],
  'Key challenges included implementing real-time inventory synchronization across multiple users, optimizing database queries for fast product searches, ensuring secure payment processing, and creating an intuitive admin interface that handles complex operations.',
  'Successfully launched platform serving 1000+ daily active users, achieved 99.9% uptime, reduced page load times by 60%, and increased conversion rate by 35% through UX optimizations.',
  true,
  1
),
(
  'Task Management Dashboard',
  'task-management-dashboard',
  'A collaborative project management tool with real-time updates and team collaboration features.',
  'A sophisticated task management dashboard designed for modern teams. The application enables seamless project tracking, task assignment, and progress monitoring.

Features include drag-and-drop task boards, real-time collaboration, file attachments, comment threads, time tracking, and comprehensive reporting. The dashboard provides multiple views including Kanban boards, calendar view, and list view to accommodate different workflow preferences.

Built with performance and scalability in mind, the application handles teams of all sizes with smooth real-time updates using WebSocket connections.',
  'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg',
  ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
  'Frontend Lead',
  'May 2024 - August 2024',
  'https://example-taskmanager.com',
  'https://github.com/yourusername/taskmanager',
  ARRAY[
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  ],
  'Main challenges involved implementing efficient real-time synchronization without overwhelming the server, creating an intuitive drag-and-drop interface that works on mobile devices, and designing a flexible permission system for different team roles.',
  'Platform adopted by 50+ teams, achieved average task completion rate increase of 40%, reduced project planning time by 50%, and received 4.8/5 user satisfaction rating.',
  true,
  2
),
(
  'Portfolio Website Generator',
  'portfolio-generator',
  'An automated tool that generates beautiful portfolio websites from structured data.',
  'This innovative tool allows developers and creatives to quickly generate professional portfolio websites without writing code. Users input their information through a user-friendly form, select from professionally designed templates, and receive a fully functional, customizable portfolio website.

The generator supports multiple themes, automatic responsive design, SEO optimization, and easy deployment options. Advanced users can customize templates using a visual editor or by directly editing the generated code.',
  'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg',
  ARRAY['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  'Solo Developer',
  'September 2024 - October 2024',
  null,
  'https://github.com/yourusername/portfolio-gen',
  ARRAY[
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg'
  ],
  'Creating a flexible template system that allows customization while maintaining design consistency, implementing an intuitive visual editor, and optimizing the build process for fast generation times.',
  'Generated 500+ portfolio websites, reduced portfolio creation time from days to minutes, and received positive feedback from beta testers for ease of use.',
  false,
  3
);

-- Insert sample experience data
INSERT INTO experiences (slug, company, position, short_description, full_description, thumbnail_url, start_date, end_date, location, responsibilities, achievements, skills, is_featured, display_order) VALUES
(
  'senior-frontend-developer-techcorp',
  'TechCorp Solutions',
  'Senior Frontend Developer',
  'Leading frontend development for enterprise SaaS applications, mentoring junior developers, and establishing best practices.',
  'As a Senior Frontend Developer at TechCorp Solutions, I lead the development of cutting-edge web applications for enterprise clients. My role encompasses technical leadership, code architecture, and team mentorship.

I work closely with product managers, designers, and backend engineers to deliver high-quality features that meet business objectives while maintaining excellent user experiences. I''ve been instrumental in modernizing our tech stack and establishing development standards that improved team productivity.

The role involves not just writing code, but also conducting code reviews, mentoring junior developers, participating in architectural decisions, and contributing to the company''s technical direction.',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  '2022-06-01',
  null,
  'San Francisco, CA (Remote)',
  ARRAY[
    'Led development of core application features serving 100K+ users',
    'Architected and implemented scalable frontend infrastructure',
    'Mentored team of 5 junior developers',
    'Conducted code reviews and maintained code quality standards',
    'Collaborated with cross-functional teams on product strategy',
    'Optimized application performance, reducing load times by 50%'
  ],
  ARRAY[
    'Reduced bug reports by 45% through improved testing practices',
    'Increased team velocity by 30% through process improvements',
    'Successfully migrated legacy codebase to modern tech stack',
    'Implemented CI/CD pipeline reducing deployment time by 70%',
    'Received "Excellence in Engineering" award 2023'
  ],
  ARRAY['React', 'TypeScript', 'Next.js', 'GraphQL', 'Testing', 'Leadership', 'Mentoring'],
  true,
  1
),
(
  'frontend-developer-startupxyz',
  'StartupXYZ',
  'Frontend Developer',
  'Built and maintained web applications for a fast-growing startup, contributing to product development from concept to launch.',
  'At StartupXYZ, I was part of a small, agile team building a new SaaS product from the ground up. This role required versatility, quick learning, and the ability to wear multiple hats.

I was responsible for implementing the entire frontend of our main product, working directly with the CTO and design team. The fast-paced startup environment taught me to prioritize effectively, ship quickly, and iterate based on user feedback.

Beyond coding, I participated in product discussions, user research sessions, and helped shape the technical direction of the company. This experience gave me a holistic understanding of product development.',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
  '2020-08-01',
  '2022-05-31',
  'Austin, TX',
  ARRAY[
    'Built responsive web applications from scratch',
    'Collaborated with design team to implement pixel-perfect UIs',
    'Integrated third-party APIs and services',
    'Participated in product planning and feature prioritization',
    'Contributed to technical documentation',
    'Provided frontend architecture recommendations'
  ],
  ARRAY[
    'Delivered MVP that secured $2M in seed funding',
    'Grew user base from 0 to 10,000 in first year',
    'Implemented features that increased user engagement by 60%',
    'Maintained 95%+ test coverage across frontend codebase'
  ],
  ARRAY['React', 'JavaScript', 'Redux', 'REST APIs', 'Agile', 'Product Development'],
  true,
  2
),
(
  'junior-developer-webagency',
  'Creative Web Agency',
  'Junior Web Developer',
  'Started career building client websites and learning modern web development practices in a creative agency environment.',
  'My first professional role in web development was at Creative Web Agency, where I learned the foundations of professional web development while working on diverse client projects.

I worked on everything from small business websites to larger e-commerce projects, gaining exposure to various technologies and client requirements. This role taught me the importance of writing maintainable code, meeting deadlines, and effective client communication.

The agency environment provided excellent learning opportunities through exposure to different projects, mentorship from senior developers, and the chance to work with modern tools and frameworks.',
  null,
  '2019-01-15',
  '2020-07-31',
  'Portland, OR',
  ARRAY[
    'Developed and maintained client websites',
    'Implemented responsive designs across browsers',
    'Fixed bugs and added new features to existing projects',
    'Participated in client meetings and requirement gathering',
    'Learned and applied web development best practices'
  ],
  ARRAY[
    'Successfully delivered 15+ client projects',
    'Received positive client feedback on 90%+ of projects',
    'Promoted from intern to junior developer after 6 months',
    'Contributed to agency''s internal component library'
  ],
  ARRAY['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Responsive Design'],
  false,
  3
);
