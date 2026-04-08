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
<img width="1512" height="982" alt="Screenshot 2026-04-08 at 12 18 56 PM" src="https://github.com/user-attachments/assets/fba61e77-ade1-47e5-a36f-0bbdc73a37df" />
<img width="1512" height="982" alt="Screenshot 2026-04-08 at 12 19 07 PM" src="https://github.com/user-attachments/assets/4b94d6fd-38c9-40da-af86-5b64b030f8c5" />
<img width="1512" height="982" alt="Screenshot 2026-04-08 at 12 19 21 PM" src="https://github.com/user-attachments/assets/e15596d9-1b05-4e30-b34b-b75af3a5b266" />
<img width="1512" height="982" alt="Screenshot 2026-04-08 at 12 19 39 PM" src="https://github.com/user-attachments/assets/d38652ad-924a-4f2c-a608-30c7aa8baba0" />

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
http://localhost:4200
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

_Developed by Nirja Dabhi – George Brown College, COMP3133_
