# 101509539-lab-test2-comp3133

## SpaceX Mission Tracker – COMP3133 Lab Test 2

An Angular 21 application that fetches and displays SpaceX mission data using the public SpaceX REST API (v3).

---

## Features Implemented

- **Mission List** – Displays all SpaceX launches with patch image, mission name, flight number, launch year, rocket info, status badge, details snippet, and external links
- **Mission Filter** – Filter/search launches by year using a dropdown and reactive form
- **Mission Details** – Full detail view for a selected mission including rocket, launch site, mission IDs, and links
- **Angular Signals** – All component state managed with `signal()`
- **Control Flow** – Uses `@for`, `@if`, `@switch` throughout templates
- **TypeScript Models** – `Mission`, `Rocket`, `Links`, `LaunchSite` interfaces
- **HTTP Service** – `SpacexapiService` wraps all SpaceX API calls
- **Routing** – `/missions`, `/filter`, `/missions/:id`
- **Space-themed UI** – Custom CSS with Orbitron + Exo 2 fonts, dark space aesthetic

---

## Screenshots

> _(Add screenshots of Mission List, Filter, and Details pages here)_

---

## Tech Stack

- Angular 21 (standalone components)
- TypeScript
- RxJS
- ReactiveFormsModule
- Angular Router
- SpaceX REST API v3

---

## API Endpoints Used

| Feature        | Endpoint                                                      |
| -------------- | ------------------------------------------------------------- |
| All launches   | `GET https://api.spacexdata.com/v3/launches`                  |
| Filter by year | `GET https://api.spacexdata.com/v3/launches?launch_year=YYYY` |
| Single launch  | `GET https://api.spacexdata.com/v3/launches/{flight_number}`  |

---

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
ng serve

# 3. Open in browser
# http://localhost:4200
```

## How to Build

```bash
ng build
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Set the output directory to `dist/101509539-lab-test2-comp3133/browser` in Vercel settings.

---

## Project Structure

```
src/app/
├── models/
│   └── mission.ts           # TypeScript interfaces
├── network/
│   └── spacexapi.ts         # HTTP service
├── missionlist/             # All launches component
├── missiondetails/          # Single launch detail component
├── missionfilter/           # Filter by year component
├── app.ts                   # Root component + navbar
├── app.routes.ts            # Route definitions
└── app.config.ts            # App providers
```

---

_Developed by Kash – George Brown College, COMP3133_
