# Behavior_Buddies

## Table of Contents

- [Description](#Description)
- [Links](#Links)
- [Future Work](#Future-Work)
- [Install](#Install)
- [Built With](#Built-With)
- [Code Organization](#Code-Organization)
- [References](#References)
- [Design Documentation](#Design-Documentation)
- [User Stories](#User-Stories)
- [Authors](#Author)
 
 
## Description

This is an application that allows the user to search for albums, add them to a list of ones in their collection, add to their wishlist, and update their quantity and the price they paid. We use a simple crud application that searches the discog API based on the artist and/or album. This search is displayed on the page with buttons that allows you to add to your personal collection and/or your wishlist. 

## Links

- You can access the WAQ_Vinyl Heroku Application here: https://whispering-everglades-63027.herokuapp.com/
- You can access the Discogs API here: https://www.discogs.com/developers
- You can access our backend API here: https://github.com/ajhutchins/WAQ_Vinyl
- You can access our backend Heroku directory here: https://dashboard.heroku.com/apps/murmuring-mountain-39567

## Future Work

This project needs a user authentication aspect to really make it function how intended. If users are able to sign up and log in, they will be able to manage their own personal collections and wishlists. Without this, there is only one master user.
The project needs a tighter funneling from our chosen API. Discog’s API is very powerful and holds a lot of information, but also includes some empty albums and interesting formatting that we would need more time with to correctly funnel only complete datasets. Until then, we have a few search results that come back wonky.

The project would benefit from being able to see other user data and seeing what others have in their collections and their wishlists. This would make the app a lot more enjoyable and less like a handful of lists.
Our original plan was to dynamically add data from an outside API for artists and albums to a handful of lists. We met our original goal. Along the way, we found out the difficulty of adding user authentication, but are still motivated to make it work. Inter-user connectivity would be a super beneficial feature if we continued to work on this.

## Install

You can fork this repo and run from node. You will need to set up the .env variables.
- Dependencies - npm packages (back end)
 - "dependencies": {
   - "cors": "^2.8.5",
   - "dotenv": "^8.2.0",
   - "express": "^4.17.1",
   - "express-session": "^1.17.1",
   - "mongoose": "^5.12.0"
 - },
 - "engines": {
   - "node": "14.15.4",
   - "npm": "6.14.10"
 - }

## Built With

- React Native
- mongodb
- node.js
- express.js
- cors
- dotenv
- npm
- JavaScript

## Code organization

The project tries to follow the coding style guide provided by AirBnb.

## References

1. Publication Manual of the American Psychological Association, 6th Edition. ISBN: 10:1-4338-0561-8.
2. Cooper, J. O., Heron, T. E., & Heward, W. L. (2019). Applied Behavior Analysis (3rd Edition). Hoboken, NJ: Pearson Education.

## Design Documentation

1. [Behavior_Buddy Wireframe](https://github.com/ajhutchins/Behavior_Buddy/blob/main/Scanned%20Documents.pdf)

### User Stories

#### MVP

1. User can see an 'index page' that includes 'index cards' of terms.
2. User can utilize a search bar at the top of the page that searches the index cards below.
3. User can also scroll through these terms to search for their desired term.
4. User can click on each term, which will reveal information, such as the definition, associated/suggested ABA methods, and resources to help guide the user through each situation.

#### STRETCH GOALS

1. User Authentication feature so user can have a profile and save favorite terms.
2. Create a way for admin users to add new terms (desktop version (CMS-like)).
4. Add 100+ terms to the app, so it might actually be useful out of the gate (nothing really like this exists, so I would really like to focus on expanding on the information of each index card to really try and make it useful for the user.
5. Add a 'Get Help Near Me' button that provides a googlemap of professionals within a certain radius.
6. Add other buttons to donate to Autism Speaks and Special Olympics.

## Author

A.J. Hutchins (Current Author)
