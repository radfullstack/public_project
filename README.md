# Public Project

## What is it, why was it created?

This initiative represents the cornerstone of a formidable project—an Open Source endeavor that invites your esteemed collaboration. At its core, it is a React-based application leveraging a MongoDB database managed by a Node.js server, orchestrating seamless interactions with the frontend client. Not only does this project provide an invaluable opportunity to hone your skills in React development, but it also aims to craft a practical solution with universal utility. Your involvement will not only contribute to the success of the venture but also foster your growth in building impactful and purposeful applications with React.

## Pre-Installation!
+ Install locally or create atlas mongo databse
+ Change DB address accordingly in server/.env
+ Set your own secret in server/.env

## Installation & start
    cd server
    npm install
    ren sample.env .env
    npm start

    cd client
    npm install
    npm start


## Functionality
This application employs JSON token authentication to manage user sessions, with Axios serving as the library for handling requests. Mongoose is utilized to configure the client, facilitating seamless communication with the MongoDB database. Cookie parsing is seamlessly managed through the implementation of the cookie parser library.

Venturing into React is driven not only by the framework's state-of-the-art frontend capabilities, component architecture, and modern development methodologies but also by a nod to my background in 'old-school' programming, particularly in server-sided MVC applications. While there may be a subtle inclination towards such structural paradigms, the project is an open canvas for adopting best practices. Constructive critique is not only welcomed but deemed instrumental in propelling the project forward. The overarching goal is to amalgamate daily-use tools into a unified, modernized platform, emphasizing an effortless design that resonates with a broad user base.

As the project evolves, the prospect of advanced and customizable views looms large, albeit anchored in the overarching principle of simplicity and user engagement. The cornerstone of this endeavor is a robust feedback mechanism—a conduit for users to provide insights on specific components, fostering an environment of continual improvement. Anticipating diverse user needs, the project aims to strike a balance between simplicity and catering to more advanced users. In stark contrast to time-consuming social media platforms like Facebook and Snapchat, this project aspires to be a catalyst for positive change, revealing authentic facets of users rather than curated social media personas.

Embracing the ethos of open source, the project envisions a communal space for users to congregate in friendly yet productive forums. The sky is the limit, and the call is to collectively embark on this journey, building a platform that not only simplifies but enriches lives. Join me in shaping a project that transcends conventional boundaries and makes a meaningful impact on how we interact with technology.

### BEFORE YOU DECIDE TO PUSH YOUR COMMIT ASK YOURSELF:
+ Am I going to push a complete commit, finished code (particular file; page, component, function)?
+ Did I go pure, skipping libraries that add unneccessary load to the app?
+ Did I consider scalability when it comes to back end handling?
+ Do I have legit interest in helping others?
+ All above required to be YES, if that's what you got, then go ahead, I want to see your code!
+ See below what's on my mind at these early stages, see how you can help, what you can do better
+ Thanks in advance

### To do:
+ Account page
    + 401 on check auth before user logs in, can we avoid console throwing it?
    + User strike system - engagement (days in row, points, activity, bonuses, statistics)
    + Update info functionality
    + Ensure customization
        + Visually appealing and unique profile fosters a sense of ownership and identity
    + GDPR Section
        + Data export possibility (all not only user input, but also our output, what we generated based on that data)
+ Feedback hub
    + Central space to collaborate with others and build ideas
    + Small components that can be embeded and have a good way of triggering
        + This is to say I do not loog to have a Feedback button, I want option to appear intuitively, based on usage
    + Types:
        + Feature requests
        + Bug corrections
        + Third party integration request
+ Personal development
    + Goals & Challanges
        + Wellness
        + Creative prompts
    + Achievements
    + Current progress tracker
+ Journal
    + Simple note type of thing, even easier when WE make it
+ Relationship space
    + This can be collaboration of 2 individuals or group of people
    + User can have multiple spaces, but not when it comes to personal relationship space
        + We encourage good values and so loyality
    + Encouraging bulding healthy relationships based on doing right - together
+ Healthy food
    + Not sure exactly how, but we will encourage this, we will McDonalds suffer when we pump up our user base
+ App
    + Find a way to store user and setUser in main props without having to pass it into individual components
+ Leaderbord (prototype) 
    + Not obligatory, users can skip to ensure trust and allow data anonimity
    + Potentially based on small area statistics
+ Third party integrations
    + Fitness data
    + Calendars
    + To do
    + Notes
    + Course progress

## Changelog

+ #### v. 0.2 - Building structure cd
    + State, basic auth, protected routes
    + Readme.md
+ #### v. 0.1 - Intial commit
    + Structure