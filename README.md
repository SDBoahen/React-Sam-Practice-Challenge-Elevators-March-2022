# 🛗 Elevators 🛗

Sam needs your help! We need to get everyone to their correct Floor!

## Setup

After Forking and Cloning the project:

1. Run `npm install` in your terminal.
2. Run `json-server --watch db.json --port=3008`. This will run your backend on port `3008`.
3. In a new terminal, run `npm start`. This will run your React app on port `8003`.

In our React application, the data about the new generation of students is in
the `db.json` file. This file will mimic an API that follows RESTful
conventions.

Make sure to open
[http://localhost:8003/students](http://localhost:8003/students) in the
browser to verify that your backend is working before you proceed!

## What You Already Have

The `App` component holds four children: `Header`, `SearchBar`,
and `StudentsList`. Some components have starter code in them already. 

The `StudentsList` component will render all `Student` components. 

You will also notice a `FirstFloor` component, which renders the remainder of the floors.

All of the code to style the page has been written for you, meaning that you
should be adding to the code rather than editing it; however, if your finished
product has some styling issues, don't worry too much about it.

## Core Deliverables

As a user, I should be able to:

- See list of students on the page, using the `Student` component in `App`, beneth the `h1` Detailing: Lobby. 

The `Student` component should display the Student's image, name, bio, and conditionally render if that Student is Checked-in OR Not. If they are Checked-In Card should say "Checked-in! :)", otherwise it should say "Not Checked-in".

- Click on the image of the Student in the `Student` component and see the
  Student's current Phase in place of their bio. If I click on the image again,
  the Student's current Phase should again be replaced with the bio. If I click on another Student's image, it toggles that Student's bio independent of any othern Student's.

- Clicking on the "Head to Room :)" button should render that Student on the correct Floor. That Student should then no longer be in the Lobby.

- Type in the `SearchBar` component and see the list of students IN THE LOBBY whose name or bio match the text in the search bar. If there's no text in the search bar, all the students should be rendered.


### Endpoints for Core Deliverables

#### GET /students

Example Response:

`json

[
    {
      "id": 1,
      "name": "Alexis Martinez",

      "floor": 1,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02UVKW3J10-8be8627c12e4-512"
    },
    {
      "id": 2,
      "name": "Amy Ago",

      "floor": 2,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U0308PETHTR-45d61a8f71f4-512"
    },
    {
      "id": 3,
      "name": "Emily Raddatz",

      "floor": 3,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02U3DJUAJE-505346e88490-512"
    },
    {
      "id": 4,
      "name": "Erick Gonzalez",

      "floor": 1,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02U0G0CULV-da7782e821ac-512"
    },
    {
      "id": 5,
      "name": "Evan Watson",

      "floor": 2,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02UXN7LNNS-f59f18c09568-512"
    },
    {
      "id": 6,
      "name": "Felix Garcia",

      "floor": 3,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02TQKU62M9-caea4ead6ec7-512"
    },
    {
      "id": 7,
      "name": "Gabriel Navar",

      "floor": 1,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02Q4C983QA-78a6d475124b-512"
    },
    {
      "id":8,
      "name": "Hayden Smith",

      "floor": 1,
      "checkedIn": true,

      "bio": "Hey! I'm and awesome person learning Software Developement at Flatiron!",
      "currentPhase": "Phase 2 - React JS",
      
      "pictureUrl": "https://ca.slack-edge.com/T02MD9XTF-U02LLQWHX6H-5c3f4c228957-512"
    }
  ]

`

