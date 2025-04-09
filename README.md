//TRAVEL JORNAL// BY OZODBEK ABILOV(00018243)

A simple CRUD app for managing travel trips, built for the Web Technology module.

//ABOUT//
Create, view, edit, and delete travel trips with this Node.js/Express.js app using Pug templates and CSS styling.

//RUN LOCALLY//
1. Clone: `git clone https://github.com/00018243/travel-journal.git`
2. Navigate: `cd travel-journal`
3. Install: `npm install`
4. Start: `npm start`
5. Visit: `http://localhost:3000`

//DEPENDENCIES//
-express: ^4.17.1
-pug: ^3.0.2


//DEPLOY TO GLITCH//

Go to glitch.com and sign in.
Click “New Project” > “Import from GitHub.”
Enter: https://github.com/00018243/travel-journal



//LINKS//
-GitHub: https://github.com/00018243/travel-journal
-Live App: https://nervous-half-crown.glitch.me/trips 

//STRUCTURE//
/travel-journal
├── app.js               
├── package.json          
├── package-lock.json     
├── .gitignore           
├── controllers/          
│   └── trips/
│       └── index.js
├── public/               
│   └── styles/
│       └── style.css
├── routes/               
│   ├── index.js
│   └── trips/
│       └── index.js
├── services/             
│   └── trips/
│       └── index.js
├── views/               
│   ├── index.pug
│   ├── layout.pug
│   └── trips/
│       ├── create.pug
│       ├── edit.pug
│       └── index.pug

//NOTES//
: Uses `trips/` instead of `users/` for context; omits `images/` and `javascripts/` as no client-side JS/images are needed.


