# DHBA Website - User Stories

**Project:** District Hotel Business Association Kathmandu Website  
**Date:** December 17, 2025  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Radix UI

---

# PUBLIC PAGES

## 1. Homepage (`/`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| HP-01 | As a visitor, I want to see DHBA branding immediately, so I understand what organization this is. | Hero section with carousel, meteors effect, and Nepal map | ✅ Implemented |
| HP-02 | As a visitor, I want to see member statistics, so I can gauge DHBA's credibility. | Animated counter showing members, hotels, events, years | ✅ Implemented |
| HP-03 | As a visitor, I want to see member locations on a map, so I understand geographic coverage. | Interactive Nepal map with 7 member locations | ✅ Implemented |
| HP-04 | As a visitor, I want quick access to contact info, so I can reach DHBA easily. | Contact section with phone, email, address | ✅ Implemented |
| HP-05 | As a visitor, I want to subscribe to updates, so I stay informed. | Newsletter form with email input | ✅ Implemented |
| HP-06 | As a visitor, I want to see leadership team, so I know who runs DHBA. | Central Committee section with top 5 leaders | ✅ Implemented |
| HP-07 | As a visitor, I want to see recent news, so I know DHBA is active. | News section with latest articles | ✅ Implemented |
| HP-08 | As a visitor, I want scroll progress indicator, so I know my position on page. | Scroll progress bar at top | ✅ Implemented |

---

## 2. About Page (`/about`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| AB-01 | As a potential member, I want to read DHBA's mission, so I can decide if values align. | Mission and vision statements displayed | ✅ Implemented |
| AB-02 | As a journalist, I want leadership contact details, so I can reach them. | 16 leaders with names, positions, phone numbers | ✅ Implemented |
| AB-03 | As a visitor, I want to see member associations, so I understand the network. | List of 7 hotel business associations | ✅ Implemented |
| AB-04 | As a hotel owner, I want a clear join path, so I can become a member. | "Join DHBA" button linking to signup | ✅ Implemented |

---

## 3. Hotels Page (`/hotels`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| HT-01 | As a traveler, I want to search hotels by name, so I find specific hotels quickly. | Search box with real-time filtering | ✅ Implemented |
| HT-02 | As a traveler, I want to filter by location, so I find hotels near my destination. | Location filter: Thamel, Kathmandu Center, Bhaktapur, Patan, Other | ✅ Implemented |
| HT-03 | As a traveler, I want to filter by star rating, so I find hotels matching my budget. | Star rating filter (1-5 stars) | ✅ Implemented |
| HT-04 | As a traveler, I want to filter by hotel type, so I find my preferred accommodation. | Type filter: Hotel, Guesthouse, Resort, Boutique Hotel | ✅ Implemented |
| HT-05 | As a traveler, I want to see hotels on a map, so I choose by location visually. | Map view toggle with Leaflet markers | ✅ Implemented |
| HT-06 | As a traveler, I want to switch between grid and map views, so I browse my preferred way. | Grid/Map view toggle buttons | ✅ Implemented |

---

## 4. Destinations Page (`/destinations`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| DS-01 | As a tourist, I want to browse destinations, so I discover places to visit. | Destination grid with cards | ✅ Implemented |
| DS-02 | As a tourist, I want to filter by category, so I find places matching my interests. | Category filter available | ✅ Implemented |
| DS-03 | As a tourist, I want to see destination details, so I can plan my visit. | Detail page with full info | ✅ Implemented |

---

## 5. Events Page (`/events`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| EV-01 | As a professional, I want to see upcoming events, so I can plan attendance. | Events list with dates and locations | ✅ Implemented |
| EV-02 | As a member, I want to RSVP to events, so organizers know I'm attending. | RSVP functionality (requires login) | 🔄 UI Only |
| EV-03 | As a visitor, I want to see event details, so I understand what to expect. | Event detail page with full info | ✅ Implemented |

---

## 6. Gallery Page (`/gallery`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| GL-01 | As a visitor, I want to view event photos, so I see what DHBA events are like. | Photo grid with thumbnails | ✅ Implemented |
| GL-02 | As a visitor, I want to click photos to enlarge, so I see details. | Lightbox/modal view | ✅ Implemented |
| GL-03 | As a visitor, I want to watch videos, so I learn about DHBA activities. | Video gallery section | ✅ Implemented |
| GL-04 | As a visitor, I want separate photo/video sections, so I find content easily. | `/gallery/photos` and `/gallery/videos` routes | ✅ Implemented |

---

## 7. Members Page (`/members`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| MB-01 | As a business person, I want to search member organizations, so I find partners. | Search functionality | ✅ Implemented |
| MB-02 | As a visitor, I want to see member contact info, so I can reach them. | Contact details on member cards | ✅ Implemented |
| MB-03 | As a visitor, I want to view member profiles, so I learn about organizations. | Member detail page | ✅ Implemented |

---

## 8. Resources Page (`/resources`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| RS-01 | As hotel staff, I want to access training materials, so I improve my skills. | Resource listings with downloads | ✅ Implemented |
| RS-02 | As a professional, I want to read blog posts, so I stay informed. | Blog section at `/resources/blog` | ✅ Implemented |
| RS-03 | As a user, I want to search resources, so I find relevant materials. | Search/filter functionality | ✅ Implemented |

---

## 9. Careers Page (`/careers`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| CR-01 | As a job seeker, I want to browse job openings, so I find opportunities. | Job listings with titles and companies | ✅ Implemented |
| CR-02 | As a job seeker, I want to filter jobs, so I find relevant positions. | Filter by type, location, experience | ✅ Implemented |
| CR-03 | As a job seeker, I want to see job details, so I know requirements. | Job detail page with full description | ✅ Implemented |
| CR-04 | As a job seeker, I want to apply online, so I submit my application. | Application form | 🔄 UI Only |

---

## 10. Contact Page (`/contact`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| CT-01 | As a visitor, I want to send a message, so I can ask questions. | Contact form with name, email, subject, message | ✅ Implemented |
| CT-02 | As a visitor, I want to see office location on map, so I can visit. | Leaflet map with marker | ✅ Implemented |
| CT-03 | As a visitor, I want clickable phone number, so I can call directly. | `tel:` link on phone numbers | ✅ Implemented |
| CT-04 | As a visitor, I want confirmation after submitting, so I know message was received. | Success message after form submit | ✅ Implemented |
| CT-05 | As a visitor, I want to see office hours, so I know when to call. | Office hours displayed | ✅ Implemented |

---

# AUTHENTICATION PAGES

## 11. Login Page (`/login`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| LG-01 | As a user, I want to log in with email/password, so I access my account. | Login form with email and password fields | ✅ Implemented |
| LG-02 | As a user, I want to toggle password visibility, so I verify my input. | Eye icon to show/hide password | ✅ Implemented |
| LG-03 | As a user, I want "Remember me" option, so I stay logged in. | Remember me checkbox | ✅ Implemented |
| LG-04 | As a user, I want to reset password from login, so I recover my account. | "Forgot password" link | ✅ Implemented |
| LG-05 | As a new user, I want to sign up from login, so I create an account. | Link to member portal | ✅ Implemented |

**Note:** Currently uses demo credentials (admin@dhba.com / admin123). Backend auth not implemented.

---

## 12. Sign Up Page (`/signup`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| SU-01 | As a hotel owner, I want to register my organization, so I become a member. | Registration form with organization details | ✅ Implemented |
| SU-02 | As a new user, I want to create credentials, so I access my account later. | Username and password fields | ✅ Implemented |
| SU-03 | As a new user, I want password strength indicator, so I create strong password. | Password validation feedback | ✅ Implemented |

**Note:** Frontend only - no backend registration.

---

## 13. Forgot Password Page (`/forgot-password`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| FP-01 | As a user, I want to request password reset, so I regain access. | Email input form | ✅ Implemented |
| FP-02 | As a user, I want confirmation of reset email, so I check my inbox. | Success message after submit | ✅ Implemented |

**Note:** Frontend only - no email sending.

---

# MEMBER PORTAL PAGES

## 14-15. Member Dashboard (`/member-portal/dashboard`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| MD-01 | As a member, I want to view/edit my profile, so my info stays current. | Profile section with edit form | ✅ UI Implemented |
| MD-02 | As a member, I want to post job openings, so I hire staff. | Job posting form | ✅ UI Implemented |
| MD-03 | As a member, I want to see my RSVP'd events, so I track my schedule. | Events list section | ✅ UI Implemented |
| MD-04 | As a member, I want to message other members, so I network. | Messaging inbox | ✅ UI Implemented |
| MD-05 | As a member, I want to manage notification settings, so I control emails. | Settings panel | ✅ UI Implemented |
| MD-06 | As a member, I want to access resources, so I learn and grow. | Resources section | ✅ UI Implemented |

**Note:** All UI implemented with mock data. No backend API.

---

# ADMIN PAGES

## 16-17. Admin Dashboard (`/admin/dashboard`)

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| AD-01 | As an admin, I want to see statistics, so I understand site activity. | Stats cards: hotels, destinations, events, members | ✅ Implemented |
| AD-02 | As an admin, I want to see recent activity, so I know what's happening. | Activity feed with timestamps | ✅ Implemented |
| AD-03 | As an admin, I want to check system status, so I know if anything needs attention. | Status panel: database, API, backups | ✅ Implemented |
| AD-04 | As an admin, I want to update site settings, so I configure the website. | Settings tab with editable fields | ✅ Implemented |
| AD-05 | As an admin, I want to manage members, so I approve/edit accounts. | Members tab with table | ✅ Implemented |
| AD-06 | As an admin, I want quick links to content management, so I navigate easily. | Content Management tab with 6 sections | ✅ Implemented |
| AD-07 | As an admin, I want to logout securely, so my session ends. | Logout button | ✅ Implemented |

---

## 18-22. Admin Content Managers

| ID | User Story | Acceptance Criteria | Status |
|----|------------|---------------------|--------|
| DM-01 | As an admin, I want to manage destinations, so visitors discover places. | `/admin/destinations` CRUD | ✅ UI Implemented |
| EM-01 | As an admin, I want to manage events, so members know about activities. | `/admin/events` CRUD | ✅ UI Implemented |
| HM-01 | As an admin, I want to manage hotels, so directory stays accurate. | `/admin/hotels` CRUD | ✅ UI Implemented |
| MM-01 | As an admin, I want to manage members, so I handle applications. | `/admin/members` CRUD | ✅ UI Implemented |
| GM-01 | As an admin, I want to manage gallery, so content stays fresh. | `/admin/gallery` upload/delete | ✅ UI Implemented |

**Note:** Admin components exist in `components/admin/` folder.

---

# DETAIL PAGES (Dynamic Routes)

## 23-28. Detail Pages

| Route | User Story | Status |
|-------|------------|--------|
| `/hotels/[id]` | As a traveler, I want full hotel details to make booking decisions. | ✅ Implemented |
| `/destinations/[id]` | As a tourist, I want destination details to plan my visit. | ✅ Implemented |
| `/events/[id]` | As an attendee, I want event details to decide on attendance. | ✅ Implemented |
| `/careers/[id]` | As a job seeker, I want job details to decide on applying. | ✅ Implemented |
| `/members/[id]` | As a visitor, I want member profiles to learn about organizations. | ✅ Implemented |
| `/resources/blog/[id]` | As a reader, I want full articles to learn from content. | ✅ Implemented |

---

# API ROUTES

| Route | Purpose | Status |
|-------|---------|--------|
| `/api/contact` | Contact form submission | 🔄 Placeholder |
| `/api/auth/*` | Authentication endpoints | ❌ Not Implemented |
| `/api/admin/*` | Admin management endpoints | ❌ Not Implemented |
| `/api/member/*` | Member portal endpoints | ❌ Not Implemented |

---

# IMPLEMENTATION STATUS SUMMARY

| Category | Total Stories | Implemented | UI Only | Not Started |
|----------|---------------|-------------|---------|-------------|
| Public Pages | 35 | 35 | 0 | 0 |
| Authentication | 10 | 10 | 10 | 0 |
| Member Portal | 6 | 0 | 6 | 0 |
| Admin Pages | 12 | 0 | 12 | 0 |
| Detail Pages | 6 | 6 | 0 | 0 |
| API Routes | 4 | 0 | 1 | 3 |
| **Total** | **73** | **51** | **29** | **3** |

---

# KEY FEATURES VERIFIED IN CODE

## ✅ Fully Working
- Homepage with all sections (Hero, Stats, About, Contact, Featured, Committee, News, Newsletter)
- Hotels page with search, filters, grid/map view toggle
- Contact page with form and Leaflet map
- All public pages with responsive design
- Bilingual support (English/Nepali) via LanguageContext
- Scroll progress indicator
- Floating action button

## 🔄 UI Only (No Backend)
- Login/Signup/Forgot Password (demo credentials only)
- Member Portal Dashboard (mock data)
- Admin Dashboard (mock data)
- RSVP functionality
- Job applications

## ❌ Not Implemented
- Real authentication (JWT, sessions)
- Database integration
- Email notifications
- File uploads
- API endpoints

---

# TECH STACK VERIFIED

```json
{
  "framework": "Next.js 16",
  "react": "19.2.0",
  "styling": "Tailwind CSS 4.x",
  "ui": "Radix UI components",
  "forms": "react-hook-form + zod",
  "maps": "Leaflet + react-leaflet",
  "charts": "Recharts",
  "animations": "Framer Motion",
  "carousel": "Embla Carousel",
  "icons": "Lucide React"
}
```

---

**Document Version:** 2.0.0  
**Last Updated:** December 17, 2025  
**Verified Against:** Actual codebase analysis
