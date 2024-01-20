# Stop Watch
 Javascript stop watch
This is my first real Javascript project. I wanted to start with something straight forward and easy to follow.

My first step was to create the HTML file. You will see that I got my fonts from google fonts. I included a title outside of the container because I wanted the container to be just the stop watch information. It thought it would be easier to clump the stopwatch display and buttons into one div.
Wanted to make the stopwatch as simple as possilbe with just the three buttons, start, stop and reset.

To start off my css file, I first added box-sizing: border-box. This helps make sure elements on the webpage behave consistently when it comes to their size and spacing. It's a way to avoid surprises and make it easier to control how things look.
I used display: flex and justify-content: center since my title (h1) is single dimentions. My font size is 3em.
To center the container horizontally, I used margin-right: auto and margin-left auto. 
For my h3 smaller title I used display flex and justfiy-content: center just like my h1.
My buttons are inline-block with a margin-right 30px. I have my padding at 1rem 3rem to give the btns a rectangle shape.
I also gave the btns a hover pseudo-element with the background-color whitesmoke and a cursor: pointer.

To start my Javascript file I set some  variables, timer, minutes, seconds,hours, and isRunning = false. 
I have it set at false since I want the stopwatch to not start until the user presses the btn start.
I wrote a function to start the stopwatch. It checks if the value is false, if the stopwatch is currently running. If it's not running then the timer will start with setInterval function. Else it will clearInterval to stop.
I wrote stopStopwatch function, if the isRunning is false, then the clearInterval(timer) function will run and will stop the stopwatch.
Then I wrote a resetStopwatch() function. If the stopwatch isn't currently running, it will clear the stopwatch and set the seconds, minutes, and hours to 0. Then calls a function I wrote, updateDisplay().
I wrote a updateStopwatch() function, will add a second, if the seconds equal 60, seconds will go back to zero and add a minute. The same for minutes to hours. Then called the updateDisplay() function. 
My updateDisplay() function first names a variable display with getElementById. Then I adding display.innerText to change the hours minutes and seconds. This function will keep the stopwatch display updated. I used the function I wrote formateTime(time) function.
My formatTime(time) function will check if time is less than 10, it returns the string '0' + time. This adds a leading zero to the time when it's a single digit.
If time is 10 or greater, it simply returns the original time. If time is 5, the function returns '05'. If time is 15, the function returns '15'.
