# React Basketball Roster Application - Mavericks

This app consists of a frontend application built with React.js and a backend API built with Express.js.This application presents a basketball roster using React and Material UI and is applied with responsive design. 

<img width="1439" alt="image" src="https://github.com/Ronlikesleep/mavericks-roster-demo/assets/29923635/f7c9d36a-7560-4639-8d6c-51f715398d06">

It consists of several components which render various sections of the application. I have deployed this app at https://dancing-basbousa-a2000d.netlify.app/

## Components - front - end

### 1. Roster

The `Roster` component renders the main page of the application. It includes the Navigation bar, `Nav`, at the top, the `ShowCard` component for showcasing players, and the `Footer` at the bottom.

### 2. Oladipo

The `Oladipo` component is a specific player page. (Only this page is done :)It consists of a summary of the player's stats, a table presenting more detailed statistics, a form to add scouting reports, and a footer at the bottom.

### 3. CollapseDetails

The `CollapseDetails` component shows a collapsible details section under the statistics table. It displays a glossary of terms used in the table. 

### 4. Footer

The `Footer` component is a generic footer that displays Miami Heat logos. This component is used across multiple pages.

### 5. ScoutingReports

`ScoutingReports` is a form for adding scouting reports. It captures information such as scout name, player name, event name, team, and the scouting report.

### 6. Nav

`Nav` is the Navigation bar of the application. It features a Miami Heat logo and link to the `Roster` page.

### 7. PlayerCard

`PlayerCard` showcases one specific player's basic information. It contains the player's photo, full name, jersey number, position, and other key details. It also provides a link to the player's bio.

## Server - back - end

This app consists of a frontend application built with React.js and a backend API built with Express.js. The reports are currently stored in a JSON file.

## Requirements

- Node.js
- npm or yarn (we recommend yarn)
- A modern web browser

## Installation

Clone the repository to your local machine, then install the necessary packages using npm or yarn.

```
git clone https://github.com/Ronlikesleep/mavericks-roster-demo.git
cd mavericks-roster-demo
npm install
```
or
```
yarn install
```

## Running the Application

Start the application using npm or yarn:

```
npm start
```
or
```
yarn start
```

The application should now be running on `http://localhost:3000`.

To run the backend Express.js application:

```bash
node server.js
```

This runs the server on `localhost:3005`.

