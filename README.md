# **Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock Game**

'Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock' (RPSLS) is a game designed to demonstrate how Javascript can be easily utilised for a variety of requirements when building a website. The site is targeted towards fans of web based games and the popular tv series 'The Big Bang Theory' as well as fellow developers looking to understand alternative Javascript concepts. 

Large Explosion Idea - RPSLS is a fully responsive interactive game that asks users to choose one of the 5 options (Rock, Paper, Scissors, Lizard, Spock) and in turn generates a random computer choice in response, a result is displayed to declare Win, Lose or Tie and the first player to reach a score of 10 wins the match.

![Responsive image](docs/read-me/responsive.png)

## **Table of contents**
1. [Planning Stage](#planning-stage)
1. [Features](#features)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Technology Used](#technology-used)
1. [Credits](#credits)

## **Planning Stage**

### **Wireframe**
As part of my initial planning stage I drew out a basic wireframe of how I wanted the layout of my game to look. Unfortunately this was not used on the finished site as it did not provide the user with a satisfying experience due to spacing issues for the icons and images.
![Wireframe](docs/read-me/wireframe.jpg)

### **User Experience UX**
- As a user, I want to access a fun, easy to use game
- As a user, I want clearly readable instructions on how the game works
- As a user, I want the game selections icons to be clearly visible
- As a user, I want to easily understand who the winner of each round and match is

### **Site Owner’s Aims**
- As the owner, I want to present a simple to use, fun web-based game
- As the owner, I want to educate the user on how to play Rock, Paper, Scissors, Lizard, Spock
- As the owner, I want to provide a simple score tracking function which declares a match winner when a player reaches 10 round wins
- As the owner, I want to introduce the user to Javascript programming concepts

### **Colour Scheme**
I chose a dark colour scheme for the game website design to give a sense of calming to the user to help promote a positive user experience. I opted for a dark Blue (#162732) for the site background and a plain off-white (#F6F5EA) for the text colour to prevent any colour contrast ratio issues. I used(https://webaim.org/resources/contrastchecker/) to check the contrasting colours worked well.
 - Main background

 ![Main Background colour scheme](docs/read-me/contrast-checker.png)


## **Features** 

This section gives detailed descriptions of each part of the Large Explosion Idea game and explain the value that each feature provides to the user and how this is acheived.

### **Existing Features**

- __The Large Explosion Idea Heading__

  - Featured at the top of the page, the Large Explosion Idea heading is clearly readable to the user. Upon viewing the page, the user will be able to see the name of the game 'Rock, Paper, Scissors, Lizard, Spock Game'. This design was chosen to make the intention of the site clear to anyone who visits it.

![Logo](docs/read-me/rpsls%20heading.png)

- __The Score Area__

  - This section is located directly below the heading and allows the user to see a more detailed image of the selection they have played, the number of wins and losses in that match and the result declaration for each round. I chose this layout design as the selection image, round scores and result are the main focal points of the game.

![score](docs/read-me/score-area.png)

- __The Game Area__

  - This section allows the user to play the RPSLS game. The user is clearly able to see the selection icons for Rock, Paper, Scissors, Lizard and Spock as represented by 'hand' silhouette icons, this makes it clear to the user which option they are selecting without the need for text, keeping a cleaner look to the site.
  - The user is able to select the choice for that round of the game by clicking 1 of the 5 icons in the 'Make a selection:' section of the game area. 

![Game](docs/read-me/selection-area.png)

- __The Rules section__

  - The rules section tells the user how the match winner is decided, First to 10 wins, and details how each round can be won based on the chosen icon written in a way that is easy for the user to understand. This layout was chosen as to keep the rules clearly visible but not distract the user from the main focal point of the site, which is the game area.

![Rules](docs/read-me/rules.png)


### **Features Left to Implement**
The Large Explosion Idea - RPSLS site is currently at the minimum viable product stage. Future features to be added to increase site usability include:
- A match wins feature and scoreboard function which allows users to register their number of match wins

## **Testing** 

I have tested the site in the Chrome, Firefox and Edge browsers, using dev tools to test responsiveness. I have also asked users to review on various mobiles devices; both Android and IOS had no issues fed back.

### **Functionality test**
Extensive functionality tests were carried out throughout the development and deployment process in order to identify any bugs that may occur during gameplay. 

#### **Implementation**:  
To ensure the user understands the purpose of the page and the functionality of the game.
#### **Test**:  
This test will be carried out by myself and by asking my peers and colleagues to play the game ensuring rapid clicking of the icon selection buttons and playing the game multiple times in rapid succession. 
#### **Did the buttons function correctly?**  
At the start of a new game the page is displaying the correct default image and score. When one of the selection icons is clicked, the correct selection choice image is displayed in the user game area. 
#### **Did the game play correctly?**  
The computer successfully generates a choice in response to a user selection and the correct game outcome is declared depending on the images displayed. The score counter responds correctly to the round outcome and when a score of 10 is reached an alert pops up to declare the winner of the match.
#### **Can the game be reset successfully?**  
When a score of 10 is reached an alert windows pops up for 3 seconds, when the alert window disappears the game successfully resets the scores back to 0 and displays the correct default image.
#### **Verdict:**  
This test passed with no issues on multiple devices.


### **Responsiveness**
![responsive design picture](docs/read-me/responsive.png)
The Chrome browser built in Dev tool was used for responsive testing as well as using various mobile/tablet devices. I also used (http://ami.responsivedesign.is/) to check there were no issues across all screen sizes. No issues were found.

**Below 800px (Tablets/Mobiles)**
- This is the tablet/mobile version with images stacked on top of each other

![responsive design on tablet/mobile](docs/read-me/mobile-responsive.png)
- Game selection images and results text reduce in size to keep the layout side by side
- Heading font size reduces as to stop the heading becoming over bearing on the page
- Selection icons stack down into a 2-2-1 layout
- Rules text content is fully responsive with the page size

### **Lighthouse**
All pages have been tested with lighthouse for both mobile and desktop devices with all scores acheiving above 90, however my performance score for mobile was 4 points lower than desktop. Testing through lighthouse was extremely useful for highlighting areas where best practice can be followed

- Although Large Explosion Idea - RPSLS scored well on lighthouse tests, the best practices score on desktop was 92 due to the game images not being high resolution. 

- Tested Lighthouse on mobile

![desktop_lighthouse](docs/read-me/lighthouse-mobile.png)

- Tested Lighthouse on desktop

![desktop_lighthouse](docs/read-me/lighthouse-desktop.png)

### **Validator Testing** 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
 ![Valid HTML](docs/read-me/html-valid.png)
- CSS ![Valid CSS logo](http://jigsaw.w3.org/css-validator/images/vcss)
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
 ![Valid CSS](docs/read-me/css-valid.png)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 7 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 17 statements in it, while the median is 2.
      - The most complex function has a cyclomatic complexity value of 5 while the median is 1.
    - Although there were no errors when running through the JSHint validator, there was 1 warning consisting of:
      - Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (playGame)

### **Bugs/Fixes and Unfixed Bugs**
```
- Problem: Initial If/else statement not working.
- Cause: Comparisons were strings for the user and integers for the computer.
- Resolution: Opted for a simpler if/else statement where both user and computer choices are referenced from the 'data-choice' string which greatly improved the code functionality.
```
```
- Problem: Selection images showing a broken link.
- Cause: Used file directory path.
- Resolution: Changed code to variable index reference based on choice made.
```
```
- Problem: Score counter would not reset at the end of the match.
- Cause: Added Let variable to resetGame function.
- Resolution: Removed Let variable as this was previously declared in the code.
```
```
- Problem: Score counter not increasing until next selection was clicked.
- Cause: Score increment code in the wrong place.
- Resolution: Moved score increment above innerHTML score code.
```
## **Deployment**

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository 'Portfolio2', navigate to the Settings tab above the green Gitpod button
  - On the left hand side of the page navigate down to the 'pages' tab
  - Under the 'Branch' subheading, select 'main' from the branch drop down menu and press save
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock Game](https://andyl86.github.io/Portfolio2/)


## **Technology Used**
Large Explosion Idea - RPSLS was built using HTML5, CSS3 and Javascript

## **Credits**

### **Content**
- Font was sourced from Google Fonts (https://fonts.google.com/)
- Color schemes were sourced through Colorspace (https://mycolor.space/)
- Some similarities to the Code Institues Love Maths project may occur throughout the code, although I have implented my own variations to this code 
- W3C was used for various problem solving and coding research (https://w3.org)
- Icons used are from Font Awesome (https://fontawesome.com/)
- Coding for the match winner pop up window was sourced from Sweetalert (https://sweetalert2.github.io/)

### **Media**
- The game selection images were sourced from (https://steamcommunity.com)

### **Thanks**
 - Richard Wells (https://github.com/D0nni387) - Code Institute mentor, without his patience and support I would not have been able to complete my project to a standard that I am happy with
 