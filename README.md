MemoICE
----------------------

### DESCRIPTION
MemoICE is a memory game designed to train the brain , increase once's vocabulary and build friendship. Users (two players each) play against time to memorize words shown them. Then write all the words they remember to earn points and a place as a fire breather on the leaderboard. 

MemoICE has easy, medium, difficult and pro levels. Users can select the level and enter the room designed purposely for such level of gaming. 

### WORKING LINK
link site v1 ( User Testing)
link site v2 (Class Project Show)
link site v3 ( Finale - working and robust)

The working link to working page [WebPage-Progress](https://twilight-fringe-casquette.glitch.me)


### WIREFRAME

  ![Layout Sketch](https://eric-asare.github.io/ConnectionsLab/week10/memoICE/design/wireframe.png)

### STEPS COMPLETED
This is the game flow

* Two users  enter their name and join the same room from the lobby or landing page ( There are 4 rooms based on game difficulty : easy, medium, hard, pro levels)

* When a third User Join, he or she is prompted to join another room

* Only one user has to click the start button. Once, the start button is clicked, the client side sends a signal to the server to load the game data ( ideally , words to test users and the timelimit to memorize). 

* Client upon receiving this game data displays to the users and starts the timer. 

* Once the timer is done, the clients sends to server memorization time is over, the server sends to the client to start writing. a text box appears to the users telling them to enter the words they remember. A timer for this stage of the game begins to cause the users to feel a sense of urgency and to make the leader board competitives

* When users submit a word, the data is sent from the client side to the server side 

* The server upon receiving the wordInput data prepares a progress report to send to client by 1. keeping track of the name of the user who submitted the word, 2. where the word is correct or wrong 3. Score increment and deduction

* The client upon receiving the progress report back displays to the user

* When the remembering phase timer is over, the users are shown their score and position on the leader board and with a button to go back to the lobby. 

### CHALLENGES AND LESSONS
* Keeping Score Board - adding to array in OBJECTS 
* Lots of bugs, solved by running little of the client -server communication as I write
* Even though implementing alert to inform the user whether the room is full or not clears confusion when users are using the application, It felt annoying to always close the alert popups. So I look around for an alternative. 
It appears that you can control [in built alert](https://stackoverflow.com/questions/15466802/how-can-i-auto-hide-alert-box-after-it-showing-it).My best option was to use  a custom popup shown in the link above. 

* The window was changing as soon as timer stops, used setTimeout to delay the change by 2 seconds. Change it to 1second so that user don't feel the wait

* Need to generate random color in javascript : used this site https://css-tricks.com/snippets/javascript/random-hex-color/


* In creating buble words, I found this really helpful library. 
Animated text sphere in JavaScript using TagCloud.js (https://dev.to/asmit2952/animated-text-sphere-in-javascript-using-tagcloud-js-1p72)


* Learned you can create a type writer effect by using Javascript classes (https://codepen.io/bradtraversy/pen/jeNjwP)

* The word evaluation system broke down when I tried to color code the users. I couldn't fix it and had to present the broken code in class. Even though the UI had been improved, the backend was still breaking. - went back to the old code and try to trace what was wrong. 

* The color Coding was not working. Changed from Hex to words like black and it is working. 





* It is good to be ambitious but always take a step back to evaluate what you have and think of how to maximize the user experience. For instance, I wanted to add NeDB for score Board, a bubble floating word etc. However as described above, I found other ways to accomplish the same user experience and even better ways by just working with what I have. 


* Always try new things, some might break your code, but it is fine, it is the learning experience that matters, you can always go back to your previous working code. Thanks to github, glitch and discord, I could go back to my previous working code to trace the error in the updated code. It was so easy to work from the old code to the updated code since I documented how I did. 

* Practice Indeed make perfect. At first , I need to watch a youtube video with good explanation to even understand code not written by me. During this project, I could read a lot of javascript code online, in forums, on stackover , somethings even without explanatory text but could understand what the programmer is trying to do. 

* I learned I need to have at least a visual representation or logical flow of whatever I am doing / coding. I realized this when I sat for 2hrs non-stop sketching on paper how I wanted the project to look like and the game flow to be like. Having that physical and mental picture made it easy to code 


### USER TEST OUTCOMES

#### QUESTIONS AND USER ANSWERS 
**Disclaimer:** Names of participants omitted for privacy. Users responses are weaved into a single answer. 

* What is your first impression of the product?
**Ans:** It is an interesting game. The easy level is going to be easy. The words will be straigtforward.

* What is going in your mind as you interact with this product?
**Ans:** This is interesting. The game play seems straight forward. Are all these words? Where did you get these words? Wait the easy level is not as easy as it seems. I am too dumb. I should type fast,time ticking. 

* What did you expect to happen?
**Ans:** Thought it was a competition game but turns out to be a collaboration game? Thought it would be easy. 

* What would you change? What should be added or removed to enhance your experience. 

**Ans:**
1. Could you clearly tell players whether they are collaborating or competing against each other.
2. Could you clear the input so that I don't have to clean it when typing a new word
3. Can you show whether I am alone in the room or the room is full?
4. Can we have a link to go back to the LOBBY/ level selection
5. What are we playing the against if it is not against each other? Can you add a Time pressure? 
6. Is there a way to know the number of words left to type
7.  Can you colour code based on player
8. Could you add an element of competition among the Users
9. Could you separate clearly the words each player typed
10. What happens if I type the same "correct" word. Is the score incremented or stays the same?
11. Could you randomize the words? If I play for a long time. I would want to see new words
12.You could use [pantone colors](https://www.pantone.com/uk/en/color-of-the-year-2022-palette-exploration) for the UI 
13. Could you add round bubles containing the words typed


* Does this feel like it was designed for you?
**Ans:** Oh yes!,  No I am too dumb, my memory not so good for this game lol. Could be easier. 


* Since this is still a project in development what would you like to see in the newer version?
1. Maybe a communication system so that users can talk to each other as they play the game
2. Hints for the words if we fail guess


#### UPDATES FROM USER TESTING (7TH APRIL 2022)
User testing allowed me to discover what was important to my users rather than what I wanted to build.

I implemented the following from the user testing to enhance the overall game experience. 

1. Cleared the input area so that users may simply type new words without having to delete previous ones.

2. I added bolded text **COLLABORATE** to tell users this game is about collaboration

3. I added alert messages to inform users if they should wait for a game partner to join or play the game as room is full. 

4. Removed the send button because users were confused whether they could submit by presssing enter. Since the game is time pressured, any little time lost in the process is nerve wracking.

5. Added a go back button so that users can go back to choose different levels or look at the scoreboard

6. Made Sure that user can enter room only after entering name

7. Added a timer to heat up the recall stage. Users feel a sense of urgency to type all the words they can remember as fast as they can

8. Added a `div` just below the timer to allow the user know the the number of words left to recall

9. Color coded users using random colors generated upon opening browser
//
10. Adding bubles color coded according to user and the correct words typed.

11. Added sanity checks to not increment score if the word is already typed

12. Clean UI

13. Upload on github

14. Host on glitch

15. Paste into class link

// later
13. Randomized words using an API 

14. Confetti upon game over





#### UPDATES FROM CLASS PROJECT SHOW (12TH APRIL 2022)


During class project show, I learned a lot from users interacting with my game, and interacting with other games. I implement using the experience

One interesting question that came up was how I designed the levels. why I made them how it is. Users have same time (30s) under each level to recall words of varying lengths and number of words. 7 easy words, 10 medium words, 12 hard words and 15 pro words. 





1. Added a type writer effect to give users a feel of what's the game is about in an ironic way. Sad I couldn't show this in class. [image]

1. Made the instructions clear by adding an idea/hint * emoji/ changing the instruction depending the stage of the game

2. Fixed the glitch with evaluating the correct word
 [ show image of the glitch]
  [why was there a glitch in the first place]

3. Added autoscroll so users don't have to stop mid play to scroll between words

3. Added repeat emoji if word is repeated, correct emoji if correct and wrong emoji if wrong

3. scrolling on enter

4. Placed the total score next to the words left because players in class had a hard time finding it. 

3. Switching to alert because the infoUserClass is subtle, players in class didn't even realized I used them. 

4. It was cool to tell the users if someone disconnect, will add that to my game as well. 

4. From interaction with other students game and from experiencing students play with others game. It seems there are some ways I can go about the final part of the game which is showing scores. 


6. Add a single line of code `  elem.scrollTop = elem.scrollHeight;` which makes it easier to users to focus on the game and not scroll as they type their answers. essentially, an automatic scroller


5. I made sure the words are hard


- Show users their collaboration skill level. I could adapt this in many ways like show them a percentage of words recalled correctly to words recalled wrongly. 

 - I can also keep a percentage threshold to describe players are described from their score: highly collaborate, with a little work, you can thrive together, are you sure you are friends, hey strangers, these are your scores
 
  - I can also keep track of each users score, increment when they get a word right and show the total score together with the individual score. I think this one will work well because. Even though it is collaborate, it still give them a competitive edge which the majority who interacted with the game during user testing wanted

6. Record gameplay 

### NEXT STEPS
* Improve UI( Needs a color pallete)
  * Increment padding on Intro Words

* Top 5 players on landing page
* Add Words Shuffler or Generator (API)
* Timer for writing remembered words
* neDB for Score Board
* Functions to clean up code
* Remove unused code
* Ticking Timer Sound