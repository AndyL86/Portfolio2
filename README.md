# Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock Game

'Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock' (RPSLS) is a game designed to demonstrate how Javascript can be easily utilised for a variety of requirements when building a website. The site is targeted towards fans of web based games and the popular tv series 'The Big Bang Theory' as well as fellow developers looking to understand alternative Javascript concepts. 

Large Explosion Idea - RPSLS is a fully responsive interactive game that asks users to choose one of the 5 options (Rock, Paper, Scissors, Lizard, Spock) and in turn generates a random computer choice in response, the first player to reach a score of 10 wins the match.

![Responsive image](docs/read-me/responsive.png)

## Features 

This section give detailed descriptions of each part of the Large Explosion Idea game and explain the value that each feature provides to the user and how this is acheived.

### Existing Features

- __The Large Explosion Idea Heading__

  - Featured at the top of the page, the Large Explosion Idea heading is clearly readable to the user. Upon viewing the page, the user will be able to see the name of the game 'Rock, Paper, Scissors, Lizard, Spock Game'.

![Logo](docs/read-me/rpsls%20heading.png)

- __The Score Area__

  - This section is located directly below the heading and allows the user to see a more detailed image of the selection they have played, the number of wins and losses in that match and the result declaration for each round. 

![score](docs/read-me/score-area.png)

- __The Game Area__

  - This section allows the user to play the RPSLS game. The user is clearly able to see the selection icons for Rock, Paper, Scissors, Lizard and Spock as represented by 'hand' silhouette icons.
  - The user is able to select the choice for that round of the game by clicking 1 of the 5 icons in the 'Make a selection:' section of the game area. 

![Game](docs/read-me/selection-area.png)

- __The Rules section__

  - The rules section tells the user how the match winner is decided, First to 10 wins, and details how each round can be won based on the chosen icon written in a way that is easy for the user to understand. 

![Rules](docs/read-me/rules.png)

<!-- For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Another feature idea -->

## Testing 

I have tested the site in the Chrome, Firefox and Edge browsers, using dev tools to test responsiveness. I have also asked users to review on various mobiles devices; both Android and IOS had no issues fed back.

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

### Validator Testing 

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
    - Although there were no errors when running through the JSHint validator, there were 23 warnings consisting of:
      - 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
      - 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
      - 'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
      - Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (playGame)
      - 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
    - The Jshint checker also picked up on 1 undefined variable 'Swal', however, this coding is intentional as this was sourced from an external site (referenced below).

### Bugs/Fixes and Unfixed Bugs

counter not increasing until next icon clicked - fix, moved playerScore to about innerHTML
images not loading on selection - fix, src needed to be options[compChoice]
icon styling not working on iphone (ongoing)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository 'Portfolio2', navigate to the Settings tab above the green Gitpod button
  - On the left hand side of the page navigate down to the 'pages' tab
  - Under the 'Branch' subheading, select 'main' from the branch drop down menu and press save
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Large Explosion Idea - Rock, Paper, Scissors, Lizard, Spock Game](https://andyl86.github.io/Portfolio2/)


## Credits 
<!-- 
In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project.  -->

fontawesome for icons
google fonts for text
colorspace for colour pallette
sweetalert for win/lose pop up code (Swal variable)

### Content 

<!-- - The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/) -->

### Media

<!-- - The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer!  --> 