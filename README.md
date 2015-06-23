##Apollo Music Application

### Table of Contents  
#####[Overview](#overview) 
#####[Timeline](#timeline) 
#####[Technology](#erd) 
#####[Upcoming Features](#newfeatures) 




<a name="overview"/>
###Overview
Apollo Music Application is a one-stop-shop for tour schedule, twitter feed, and latest news articles on any music artist. Simply search for any music artist by name and Apollo will pull the results into a user friendly interface. 
![Screen Shot](/apollomain1.png)
![Screen Shot](/apollomain2.png)
![Screen Shot](/apollomain3.png)
####Features
1) *Search Feature*- quick and easy searching for any music artist. One search will pull in all of the below information, eliminating the need for multiple searches. 
#####
2) *Twitter Feeds*- allows the user to see the up-to-date Twitter feed of their favorite artists.
#####
3) *Touring Information*- allows users to browse the latest touring information, as well as links to purchase tickets. 
![Screen Shot](/search1.png)
#####
4) *News Articles*- allows users to find the latest news articles about their favorite artists. 
![Screen Shot](/search2.png)
#####


<a name="timeline"/>
###Timeline
####Planning
1) *Ideation / Problem Identification & Solving* - the only phase of the planning process was formulating and expanding on ideas. I knew I wanted this application to be geared towards something I was passionate about, so music was an easy decision. Being an avid fan of music, I identified several problems that I faced when browser for information about artists. I realized that the most prominent issue was the lack of an aggregation of informaiton about music artists. My solution was to this issue was to create an application that, through the use of API's, pulled in all of the information into one, centralized location. 

####UX Design
1) *Wireframing* - the first phase of the UX process was to sketch out a rough, low-fidelity wireframe of my application. This would allow me to determine necessary features, user-flow, and a rough overview of my application.
#####
2) *Branding* - the second phase of the UX process was to create a brand for my application. I wanted to be colorful, playful, but bold. I determined the central theme of my application to be music and discovery, hence the name Apollo.
#####
3) *Designing* - the final phase of the UX process was to conceptualize, design, and save out my design assets (including icons, logos, transitions, and backgrounds). I utilized Adobe Illustrator and Photoshop for this process, making sure to save out my design assets to allow access to the Asset Pipeline. 

####Development
After I had planned out my application, designed the layout and necessary assets, it was time to develop the application. The technology I used is described in the next section.

<a name="technology"/>
###Technology
####Front End
1) Backbone.js
	a) Allows for dynamic rendering of searched content.
	#####
	b) AJAX calls that will allow for users to access their favorited artists, as well as information from our API.
	######
	c) Seperation of concerns, allowing clean organization of models, views, and controllers.

2) Underscore.js
	a) Used to create organized templates to be accessed by my Backbone views for data rendering.

3) JQuery.js
	a) Used for manipulation of DOM elements.
	######
	b) Also used as a requirement for Backbone.js. 
####Back End
1) Ruby on Rails

2) PostgreSQL
	a) Used to create my data tables to store User information, including user email, password, and eventually favorited artists.

<a name="newfeatures"/>
###Upcoming Features
1) *Favorited Artists* - allow users to store favorited artists in their profile, allowing for easy access to these artists.

2) *Ability to Share* - allow users to share artist pages through their own social media channels. 

3) *Multiple Social Media Channels* - include the artist Facebook link and Instagram link. 
