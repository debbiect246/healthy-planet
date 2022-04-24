# Healthy Planet

## Code Institute EARTH DAY 2022 Hackathon
## Live Site

[Healthy Planet](https://healthy-planet.herokuapp.com/) CMD/Control + Click to open in a new tab

## Github Repository

[Healthy Planet](https://github.com/cloki0610/healthy-planet)

***
## Contents
- [Purpose](#purpose)
- [Objective](#objective)
- [User Experience](#user-experience)
    - [User Stories](#user-stories)
    - [UXD User Experience Design](#uxd-user-experience-design)
- [Initial Plan](#initial-plan)
    - [Wireframes](#wireframes)
- [Features](#features)
    - [Current Features](#current-features)
    - [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Other Technologies](#other-technologies)
- [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Testing User Stories](#testing-user-stories)
        - [First Time Visitor Goals](#first-time-visitor-goals)
        - [Returning Visitor Goals](#returning-visitor-goals)
        - [Frequent User Goals](#frequent-user-goals)
    - [Further Testing](#further-testing)
    - [Lighthouse Results](#lighthouse-results)
        - [Mobile](#mobile)
        - [Desktop](#desktop)
- [Bugs](#bugs)
    - [Known Bugs](#known-bugs)
    - [Fixed Bugs](#fixed-bugs)
- [Deployment](#deployment)
    - [Github Pages](#github-pages)
- [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Acknowledgements](#acknowledgements)
***

## Purpose

The purpose of this project is to work together in a small Agile team, to build a web application relating to Code Institutes Earth Day 2022 Hackathon

## Objective

Healthy Planet is a small project aimed to educate and entertain users wiith facts and games relating to Earth Day and how you can do your bit to improve the planets health. The main feature of the project is an interactive quiz to test users' knowledge on plastic recycling best practices. The site also features some truths and myths about recycling, along with stories of how people have done their bit for the planet.

## User Experience

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to see stories about how plastic is polluting the environment.
        2. As a First Time Visitor, I want to see inspiring stories about how plastic is being recycled and reused in the world.
        3. As a First Time Visitor, I want to test my knowledge of plastic recylcing and reuse using a quiz.
        4. As a First Time Visitor, I want to be able to make pledges about how to reduce and recycle my use of plastic.
        5. As a First Time Visitor, I want my pledges emailed to me shortly after I make them.
        

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to 
        1. As a Returning Visitor, I want to 
        1. As a Returning Visitor, I want to 

    -   #### Frequent User Goals
        1. As a Frequent User, I want to
        1. As a Frequent User, I want to
        1. As a Frequent User, I want to 

-   ### UXD User Experience Design

    -   #### Colour Scheme

    -   #### Typography

### Wireframes


## Features

### Current Features

### Features Left to Implement

We thought about how to improve the app.  Some ideas were:
1.  To have an authentication system so that users pledges could be stored there for retrieval later.
2.  To have a profile for each user so that they could see the pledges they had made over a set time period.
3.  Add automated testing maybe using unit testing module in python.

## Technologies Used

We used the flask framework to build the app as well as balsamiq to design the wireframes.

### Languages

The languages used were python for logic and the backend, html, css for the front end and javascript for the quiz.

## Testing

All testing was done manually.

### Manual Testing

As each person coded part of a page or feature they tested it displayed as correctly or worked as planned.  Others in the group were also able to verify that each feature worked as planned and that the site displayed as planned.

### Further Testing

## Deployment

Deployment was done successfully using heroku.  The deployment process is outlined below.  However due to issues with heroky we were unable to use automatic deployment in heroku so Rocky periodically needed to push the code to heroku.

### Heroku

- Navigate to your [heroku dashboard](https://dashboard.heroku.com/apps)
- Click "New" and select "Create new app".  
- Input a meaningful name for your app and choose the region best suited to
  your location.
- Select "Settings" from the tabs.
  - Click "Reveal Config Vars".
    ![Config vars button](
  - Input `PORT` and `8000` as one config var and click add. 
- Select "Resources" from the tabs.
    1. Select "Heroku Postgres
    1. Choose your desired plan name from the dropdown
    1. Click "Submit Order Form"
    1. Your add on should appear in the list
    1. Now search for "Heroku Redis" and follow steps 2-4.
- Select "Deploy" from the tabs.  
  - Select "GitHub - Connect to GitHub" from deployment methods.  
  - Click "Connect to GitHub" in the created section.  
  - Search for the GitHub repository by name.  
  - Click to connect to the relevant repo.  
  - Either click `Enable Automatic Deploys` for automatic deploys or `Deploy
    Branch` to deploy manually. Manually deployed branches will need
    re-deploying each time the repo is updated. Automatic will build the app
    each time you use you add, commit and push new code.
  - Click `View` to view the deployed site.

The site is now live and operational

---

## Credits

Credits for images used are shown below.
1.  Hero image Photo by Naja Bertolt Jensen on Unsplash garbage and fish in sea


### Code

Code was written by different team members and different aspects as shown.
1.  Rocky got the repo up initially, later the repo was transferred to Debbie.
2.  Rocky deployed the site to heroku and periodically pushed code to heroku as there were issues at heroku's end with automatic deployment.
3.  Tom worked on the quiz page using javascript, with Rocky helping to fix a couple of bugs.
4.  Liam worked on the plastics information page, adding images and styling.
5.  Debbie worked on the wireframes and pledges page.
6.  Rocky worked on responsiveness and inserted the emailjs script for the pledges to be emailed to the user.
7.  Rocky worked on the home page adding text and images.


### Content
