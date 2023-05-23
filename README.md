# LogiNext Case Study's Solution
Developed Using ReactJs, JavaScript, HTML, CSS and Material UI.

## Dependencies
- "@emotion/react": "^11.11.0",
- "@emotion/styled": "^11.11.0",
- "@mui/icons-material": "^5.11.16",
- "@mui/material": "^5.13.1",
- "@mui/styled-engine": "^5.12.3",
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4"

## Repository
Open [Github Link](https://github.com/Abhishek97Ojha/LogiNext-Case-Study) to view in Browser.

## Hosted Link
Open [Hosted Link](https://logi-next-case-study.vercel.app/) to view in Browser.

## Api
[Api](https://jsonplaceholder.typicode.com/users) is used to fetch data of 10 users

## Description
- Developed a single page that displays the profile of 10 users (the data is obtained from an open API ). 
- Each user's card contains an avatar picture, name, email, phone, address, website and company name.
- The Card has 3 action buttons to like, edit and delete.
- Upon clicking the edit button, a Dialog Box pops up and displays information about the edited card and the user can edit the information.
- Upon clicking the (heart shape) like button, the button toggles to red color border.
- Upon clicking delete button, a confirmation popup displays and upon confirmation, the card is deleted. 
- All card contains a avatar which is fetched by url *https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy*. The {{username}} in the URL is the placeholder for the user's username. It is dynamically replaced by the username received from the users API endpoint.
- Upon opening the app a loading indicator is displayed until the data is fetched from the API and is ready to be displayed. The source code for the loading indicator is obtained from *http://tobiasahlin.com/spinkit/*.

## ScreenShots

### User's Profile Cards

<br/><br/>

### Like Button Clicked

<br/><br/>

### Edit Dialog Box 

<br/><br/>

### Delete Dialog Box

<br/><br/>