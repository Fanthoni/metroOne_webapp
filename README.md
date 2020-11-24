## Metro One (Title)

* [General info](#general-info)
* [Authors](#authors)
* [Technologies](#technologies)
* [Contents](#content)
* [Author](#author)

## General Info
This browser based web application to ...

## Authors
Mark Theron - DuvalTries
Ferrel Anthoni - Fanthoni
Genie Park - gunehee6566	
Jun mo An - JamesAn92

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript, jQuery
* Bootstrap
* Firebase
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── landing.html             # landing HTML file, this is what users see when you come to url
├── profile.html             # HTML file, this is what users see when they click profile/settings
├── main.html                # the first HTML file that users see when they logged in to MetrOne
├── safety.html              # HTML file where users can see different safety protocols of the mall
├── store-list.html          # HTML file where users can browse stores through list
├── store-reservation.html   # HTML file where users see their list of store reservations
├── sign-up.html             # HTML files for users to sign up
├── contact-us.html          # HTML file where users can contact the developers
├── about-us.html            # HTML file where users can read more about the developers and the app
├── settings.html            # HTML file where users configure their the app such as notifications, passwords, and profile
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /back.png                # a back button to go to the previous screen
    /bell.png                # bell notification icon
    /bellNotified.png        # new notification(s) bell icon
    /directory.png           # the store's directory (main page)
    /edit.svg                # edit icon
    /fav-current             # heart icon if the user is currently at favorite.html screen
    /hamburgerMenu.png       # hamburger menu icon
    /heart-liked.png         # the icon displayed at the store page when the user liked the store
    /heart.png               # heart icon for favourited store list and navbar
    /home-current.png        # home icon when the user is AT the home screen
    /home.png                # home icon to go back to directory (home)
    /letter-x.png            # the letter 'x' icon to replace the menu icon when clicked and vice versa
    /metro1logo.png          #
    /metro1logo2.png         #
    /metrOneLogo.png         # logo for landing page
    /metrOneLogoText.png     # logo for everywhere else
    /reservation.png         # calendar icon for the reservation button at the navbar
    /reserve-current.png     # calendar icon if the user is currently at the reservation screen
    /settings-current.png    # gear icon if the user is currently at the settings menu
    /settings.png            # gear icon for the settings button placed at the navbar
    /star.png                # 
    /writing.png             # edit icon for community feedback/rating
    

├── scripts                  # Folder for scripts
    /favourite-read.js       # Backend of favorite.html
    /favourite-write.js      # Backend of pressing the like button to a store.
    /firebase_api_metro1.js  # Firebase API for the app's database 
    /login.js                # user authentication script
    /menu.js                 # Javascript file for the menu's functionality and animation
    /profile.js              # Javascript file for profile DOM manipulation
    /res.js                  # 
    /searchbar.js            # Store search functionality of the serachbar
    /store.js                # Listens to which store is being requested from the event
    /write.js                # write a new store information to the datbase

├── styles                   # Folder for styles
    /favorite.css            # Stylesheet for favorite store page
    /header.css              # Stylesheet for common navigation bar 
    /landing.css             # Stylesheet for the landing page
    /navbar.css              # Stylesheet for common navigation bar
    /profile.css             # Stylesheet for profile.html
    /reservation.css         # Stylesheet for reservation.html
    /searchbar.css           # Stylesheet for the common searchbar
    /settings.css            # stylesheet for settings.css
    /sign-up.css             # Stylesheet for the sign-up page
    /store-list.css          # Stylesheet for store-list.html
    /store-page.css          # Stylesheet for store.html

    

Firebase hosting files: 
├── .firebaserc...


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

