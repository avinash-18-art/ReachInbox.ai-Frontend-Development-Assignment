# ReachInbox.ai Frontend Development Assignment

## Project Overview

This project is a frontend application designed to demonstrate proficiency in ReactJS, NextJS, Tailwind CSS, Axios, JavaScript, and API integration. The application includes user authentication with Google, data fetching and management, a custom text editor, and theme switching.

## Features

- **Login Page:** Allows users to log in using their Google accounts.
- **OneBox Screen:** Displays a list of data items with keyboard shortcuts for deletion and replying.
- **Custom Text Editor:** Includes custom functionality like save and variables.
- **Reply Functionality:** Enables users to reply to items within the OneBox screen.
- **Theme Toggle:** Provides light and dark mode options.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/avinash-18-art/ReachInbox.ai-Frontend-Development-Assignment.git
   cd reachinbox-frontend

2.** Install Dependencies: 

npm install 

3. Set Up Environment Variables: 

REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id

4. npm start 

5. folder Structure :

src/
│   ├── components/
│   │   ├── CustomTextEditor.js
│   │   ├── GoogleLoginButton.js
│   │   ├── Header.js               // Optional
│   │   ├── Footer.js               // Optional
│   │   ├── LoginPage.js
│   │   ├── OneBox.js
│   │   ├── OneBoxItem.js
│   │   ├── ReplyBox.js             // Optional
│   │   ├── Sidebar.js              // Optional
│   │   ├── ThemeToggle.js
│   │   └── ...
│   ├── pages/
│   │   ├── index.js
│   │   └── login.js
│   ├── services/
│   │   └── auth.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── index.module.css
│   ├── App.js
│   └── index.js
public/
└── index.html


Usage
Login Page: Users can log in using the Google login button.
OneBox Screen: Once logged in, users can view and manage items. Use keyboard shortcuts:
D: Delete item
R: Reply to item
Custom Text Editor: Use the text editor to create or edit content with save and variable features.
Theme Toggle: Switch between light and dark mode using the theme toggle button.
API Endpoints
GET /onebox/list: Fetches a list of data items.
GET /onebox/
: Fetches details for a specific item.
DELETE /onebox/
: Deletes a specific item.
POST /reply/
: Posts a reply to a specific item.
Contributing
Feel free to fork the repository and submit pull requests. For bug reports and feature requests, please open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please contact your-chauhanavinash36869@gmail.com.

markdown


### Explanation
- **Project Overview:** Provides a brief description of the project's purpose and main features.
- **Installation:** Steps to set up the project locally.
- **Folder Structure:** Shows the organization of files and directories.
- **Usage:** Describes how to use the various features of the application.
- **API Endpoints:** Lists the API endpoints used in the project.
- **Contributing:** Guidelines for contributing to the project.
- **License:** Specifies the project's license.
- **Contact:** Provides contact information for questions or feedback.

Feel free to modify this template to better fit your specific project and requirements!