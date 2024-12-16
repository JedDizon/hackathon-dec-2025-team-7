# 🎅✨ Hack the Holidays! 🎄🎁  

## Team 7: Codin' around the Christmas Three

---

## **🎄 Hack the Holidays: Submission Details**  

### **Deployment**  
This project was deployed on [Netlify](https://www.netlify.com/). The steps to deploy can be read below:
- Clone the repo into your own GitHub account using the command `git clone https://github.com/JedDizon/hackathon-dec-2025-team-7.git` on the terminal;
- Create an account on Netlify page;
- On the main page, click on "Add new site" and then on import existing project;

![Add new site and import existing project buttons](/docs/images/step1.png)
- Connect Netlify to your GitHub account;

![Buttons of different version control tools](/docs/images/step2.png)

- Search for the project name and click on it;

![Search your repos input filed](/docs/images/step3.png)

- Choose a name for the page and check if _Build command_ is set to **npm run build** and _Publish directory_ is **dist** ;

![Build command and Publish directory fields](/docs/images/step4.png)

- Press *Deploy -repo name-* and wait until it has finished.

The project is deployed and can be accessed at: 
**https://countdown-to-xmas-2024.netlify.app/**  

---

### **Criteria**  
In this section, we will briefly discuss how our team addressed the applicable criteria:  
- 🎁 **The project fits the theme of celebrating the holidays.**  
    - This project captures the festive spirit with an interactive advent calendar, sharing daily recipes, trivia, and quizzes leading up to Christmas.
- 🎁 **The project is well planned and executed (Using GitHub Projects/Kanban).**  
    - Leveraging GitHub Projects and a Kanban board, the development process was organized and tracked to ensure timely and structured progress.
- 🎁 **The project has a basic README that follows the provided template.** 
    - The README adheres to the recommended template, providing clear documentation for setup, features, and contributions.
- 🎁 **The project has an overall sense of completeness.** 
    - The project delivers a functional experience, achieving its goal of spreading holiday joy.
- 🎁 **The project showcases a strong sense of creativity and originality.**  
    - The fusion of festive themes with dynamic interactivity showcases the team's approach to engaging users during the holiday season.

---

## **🎅 About the Submission**  

### **Intro**  

Welcome to **Countdown to Christmas**! Celebrate the holiday season with a daily dose of joy and discovery. Each day, unlock a new surprise behind the virtual calendar doors — whether it's a delicious festive recipe, fascinating trivia from around the world, or a fun and engaging quiz to test your holiday knowledge. Join us in exploring the magic of traditions, flavors, and festive fun as we count down to the most wonderful time of the year!

---

### **Goal**  
The **Goal** section provides a concise summary of the main objective or purpose of the project described in this README. It addresses the following aspects:  

- 🎄 **Problem Statement:** The holidays are a time for joy and connection, but often, the season’s magic can get lost in the hustle. People may struggle to find meaningful ways to celebrate daily traditions or learn about diverse holiday customs.

- 🎄 **Objective(s):** This project aims to create a dynamic advent calendar that delivers a daily dose of holiday cheer through engaging recipes, trivia, and quizzes, fostering a sense of excitement and togetherness.

- 🎄 **Target Audience:** Holiday enthusiasts of all ages, families looking to build traditions, and anyone seeking a little extra joy and learning throughout December.

- 🎄 **Benefits:** By offering fun, interactive, and educational content each day, this project brings people closer, inspires creativity, and celebrates the spirit of inclusivity and joy during the festive season. 

---

## **💻 Tech Stack**  
- Frontend: HTML, CSS, React.js 
- Version Control: Git & GitHub  
- Deployment: Netlify

---

### Future Features

See below future features to be implemented:

1. Animations for doors opening
2. More / different surprises for the user i.e. mini game
3. Ambient sounds i.e. sleigh bells
4. Ambient animation on page ie snow falling down the screen

---

## Testing

### Manual Testing

Below are the details of manual tests conducted to ensure functionality:

| TEST                   | ACTION                                | EXPECTATION                              | RESULT    |
|------------------------|---------------------------------------|------------------------------------------|-----------|
| **Page link**   | User opens the page | **Home page** opens with all doors showing           | **SUCCESS** |
| **Doors unlock each day**   | User opens the page on a new day | New door opens         | **SUCCESS** |
| **Doors open to a surprise**   | User clicks on a door | Door open to show a surprise (Quiz, trivia, recipe)         | **SUCCESS** |
| **Recipes styled**   | User opens recipe relevant door | Recipes are styled so that user can read and view ok        | **SUCCESS** |
| **Trivia styled**   | User opens trivia relevant door | Trivia are styled so that user can read and view ok        | **SUCCESS** |
| **Quiz styled**   | User opens quiz relevant door | Quiz are styled so that user can read and view ok        | **SUCCESS** |
| **Answer buttons**   | User clicks on an **answer button** | Changes color to green or red depending if correct or incorrect answer        | **SUCCESS** |
| **Close button "X"**   | User clicks on close button | Popup closes and brings user back to doors page        | **SUCCESS** |
| **Site styled ok all devices**   | User opens the page on another device | Page is styled to work on all device sizes       | **SUCCESS** |
| **Locked doors**   | User clicks on locked door | Nothing happens       | **SUCCESS** |

---


### Browser testing

The site was tested on the below browsers:

  - Chrome
    - RESULT: 
      - Doors: OK
      - Quiz: OK
      - Trivia: OK
      - Recipe: OK
      - Images: OK
    
  - Opera
    - RESULT: 
      - Doors: OK
      - Quiz: OK
      - Trivia: OK
      - Recipe: OK
      - Images: OK

  - Firefox
    - RESULT: 
      - Doors: OK
      - Quiz: OK
      - Trivia: OK
      - Recipe: OK
      - Images: OK

---

## **🌟 Credits**  
In the **Credits** section, we acknowledge the resources, tools, or inspirations used in this project, such as:  
- Tutorials or articles:
    - Quiz on js - [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1s)
    - Using json - [Learn JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM&t=16s)
    - Using fetch - [Read JSON File into HTML with JavaScript Fetch API](https://www.youtube.com/watch?v=Oage6H4GX2o)
    - How to use React - [Built-in React Components](https://react.dev/reference/react)


### Media 

- Photos for recipes: 
  - [Pexels](https://www.pexels.com)
  - [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
- Colour palette combinations: 
  - [Colorkit](https://colorkit.co/palettes/christmas/)
  - [Colorhunt](https://colorhunt.co/palettes/christmas)
- Favicon is from [Svgrepo](https://www.svgrepo.com/).
---
