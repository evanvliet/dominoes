### Prompts used building the scoring app

Not all prompts are recorded, but a good percentage. Just for the curious.

#### n01
multiple tabs, so main one of just entering score to user / domino
enter user names, options on other tab
display score with hashtags as old one
display next to go
have multiple undo
save data on cloud

on score tab, just have:
numpad for entering digits
buttons for two players labelled with name
move hash tags to history page
add button to signify score is a domino, and toggle first player


#### n02
data record is:
who
points
time

add a record for each score
display running totals on first page
also totals for current hand (points scored between a player going domino) - this should reset to 0 after each domino
allow data to exported and imported
move tab bar to bottom
remove percetages for players
remove "scoring for peter"
move numpad to top
clicking on user button adds current score to that user and resets scoring field 
no need for switch to eric or undo last
history should have grid view of scores allowing for deleting or changing
change + button to "domino" button meaning the current hand is over and the next player alternates from the last hand (not the last play)

keep track of who goes first - at the beginning it's whoever has the highest double, so first click on a user box is that person, only scores if it's a double 5, so after end-of-hand domino, it alternates.

also save record to data to mark when a domino was called, so that the number of points scored on each hand can be calculated

And on first page show both total and current hand totals for each user


#### n03

scores are 1 pt for each multiple of 5, so a double five would score 2 points

like to show hand / total numbers as slashed pair, e.g. 3/45. use digits vs. hash marks.

use border highlighting to indicate who goes first and remove from status bar

replace clear with domino button

add export / import data to options

#### n04
Player names are hard to enter, loses focus on each letter.
Make default target score 50.
scores do not update (hand / total)


#### n05
tscoring:
game is over after a player reaches the target score and someone plays domino, scores should reset to 0.

history:
should just contain points scored, no need for +, always positive points.
edit button not functional, and if a score changes, totals need recalculation.
each domino should record game totals for each player, use the points column
display most recent at top
delete score column
domino record shold start with time stamp, player column is domino, and points column should be current game totals for users separted by a slash

options:
reset should clear game totals on score page


#### n06
score:
nice to have domino button with domino tile icon
replace target reached alert with changing the domino button to Game over

history:
editing pts on history broken, like to see it turn into an edit control, it just highlights border and pts don't change

deleted score should update later domino records

options:
do not see exported data

#### n07
icon pips should be on a diagonal for 2 or 3
move domino button to numpad bottom right and just use just domino icon no text
make default user names Peter and Eric
after domino - 
  a. highlight first user border
  b. keep hand scores for a bit
  c. after 10 seconds or after score entered:
      - clear high lighted border
      - reset hand scores
after game reset -
  show click first user button message
  show regular (no highlight, no dashes) border
  also at start, no dashes on the border
use domino icon for app icon when installing on iphone home screen
add a game tab to score, history, options
game tab shows four columns and one row for each domino. columns are:
Peter      Eric
hand total hand

hand columns have hand totals for that domino
total columns have hash marks for user total
picture:

Peter              Eric *          add star to user with first double
10   ||||\ ||||\   ||||\ ||||\  7  totals accumulate hash marks slash indicates diagonal crossing first 4 tags
5    ]]]]\ |||     |||          0  add a line for each domino and hand totals for that domino
3                               6  there maybe more hand total lines than total lines
                                    
#### n08
on first use:
show options tab

score:
need better domino icon with black background, see domscore.jpg
move domino button to lower right corner opposite delete
add a help button that displays:
   on game start click user with highest double
   click domino button when a user dominoes
   note message with scores for that hand, and who goes first
   after player scores, enter score and click player tile
   to correct / delete score, go to game tab
   to see statistics go to stats tab
   to change players, go to options tab
reorder UI elements:
   player buttons
   mumpad
   score field
   message field
redo dominoes processing:
   dislpay info message at bottom:
   That was a 9 3 hand for Peter. Eric goes first.
First player logic:
   At game start, meaning at beginning and after a game has ended, display message at bottom:
      Click player with highest double.
   Clear message on player click.
   Set First player to be the other player.
   Toggle First player after dominoes.
After player goes domino with a winning score:
   Display messages: Eric won 54 to 37, last hand was 6 to 3 Peter.
   Click Player with hightest score.
   Clear message after click
   Add total scores to stats
   Clear scores in player tiles
Player tiles show only name and total, keep it simple

game:
drop hash marks, just one line for each domino, most recent first, two fields: player1 score, player2 score
allow editing , deleting entry
entries can be added from the score tab

stats: (new tab)
display scrollable history of game scores, e.g. totlals for each player, and dates, most recent first
options to show score totals, game totals, and histogram of scores, see scores.jpg  games.jpg hist.jpg 
the histogram is number of times a particular score was a total, in three flavors: one for each player and one for a total number of times either player won with that score
suggest better, fun stats

options:
allow tracking of different games, by names of players
need drop down list of different pairs
player names update with selection from list
player names also editable, with a new / update choice

reset doesn't work

#### n09
font not readable on options, make light for dark mode
for player pairs:
+ have listbox to select active game
+ entries are player1/player2
+ selecting + or new invokes entries for two names
+ also method of deleting player/pair game
only show active pair with option to select another
each distinct game (user pair) has its own data for scoring
domino icon more like domscore.jpg
domino button more to right of 0 uner 9, just icon, small butto
help button to top row of numpad next to score control
move messages below mumpad
games: just player and score fields
also white if dark background
stats only for current (user pair)#### n10
n10

score
redo layout
big green domino button:
  smaller
  same color as other buttons
  move just below same size as 9
  change icon to look like domscore.jpg (dots on diagonal)
move help button to above 1 and split line with zero (each 1/2 width)
on game complete:
  show hand and score totals in message, who was winner: Peter won 55 to 34 on a 4 / 10 hand for Eric.
  change domino button to "new"
  when new is clicked:
    display who has the highest double" message
    revert button to domino icon
player boxes should not change border

game
font should batch score display
entries clear on new game
split into two boxes:
top for scores for current game, that clears on new game
bottom half has final scores for each game and time
most recent first

stats
grand totals for each player, scores and number of games
buttons to generate reoprts
+ histogram, e.g. hist.jpt
+ games and scores (differences between two players)
+ like a stock market graph with variable time slots

options
select active game should be a list of player pairs
click on a pair to edit names
click on new button to create#### n11
n11

Score Tab

Action button:
replaces Domino button, sates G D N 
G game start
D domino
N new game

G: status =  "who got the high double"
click -> D
set frst player to other user

D: status =  "enter score and click user to assign points"
after 20 seconds of inactivity blank status
click -> "Peter ahesd 33 to 27 on a 4 5 hand"
if total > max -> N

N: status =  "Peter won 55 to 27 on a 4 5 hand" "click D for next game"
Action turns Green
click -> reset scores and start new game and ->G

Appearance:
    rotate domino icon 90 degrees 
    make status box like others, like player boxes - no green color
    layout:


     user 1.     user 2
    
    numpad conrtrol
    1 2 3
    4 5 6
    7 8 9
    D 0 ?  (D is domino icon)

    status box


Game Tab:
Current Game
Peter Eric
4.     9.     (hand totals for each domino)
3.     2
8.     0
...

Completed games:
time Peter Eric
xxx.   43    54
...

Options Tab:

Contests:
Peter vs Eric
Eric vs Suzette
...

Add     Delete. (buttons)

Target score
Import Export

Reset


questions:


I'll check the n11 file and the repository memory to understand the context.

Looking at your sketched n11 changes compared to the n10 work, here are the time-consuming ambiguities I'd flag:

Action button state machine — The G→D→N flow with the 20-second inactivity timeout and status text updates is complex. You'll need to clarify:

Does the timer reset on every interaction, or only during specific states (D)?
- only when entering state D
What happens if user clicks during D state before status updates?
- also clear status (or show game as for entering N)
How does this interact with actual score submission?
- no scores only updated when user clicks a player button
Numpad layout semantics — The "D 0 ?" layout is unclear:
- D is the acrtion button, displyas domino icon most of the time, turns red for G and is blank for N

What does "?" do? (Help? Submit? Skip?)
- shows help in status box
Is "D" the domino action button or a separate score-entry key?
- the domino action button
How do numpad inputs map to score entry vs. state transitions?
- click on user adds current score to user tally. And clears current sum. Otherwise like a telephone number input.
Hand totals display — In "Current Game," you show stacked numbers (4/3/8 and 9/2/0). Questions:
Is each column a domino hand (dots on each side)?
- no just one line for each domino, recording hand totals for that domino. Just two number, hand totals for each user under their name.
Do these update in real-time as dominos are played, or only at round end?
- numbers added to user data as user is clicked. Only displayed when games tab selected
Should they persist or clear on "New Game"?
- Current game clears on new Game. Complete  Games accumulate for life of "contest" - games between the specific players
Game completion trigger — "if total > max → N" is vague:
- game is complete when either player has more that the max score (default is 50) after a domino
What's the max score (e.g., 100, 150)?
- set on options tab, default 50
Should this auto-trigger N state or just enable the N button?
- changes action button to red and goes to N state after action button clicked
Do you need to handle tie-breaks or overtime rules?
- no ties, they are ok.
Status box styling — "like player boxes - no green color" needs concrete design specs (background, border, font, padding).
- like the Imoport Data box on the options page

More clarification:

1. Numpad input:
   1->2 means 12, added to current hand score of player that scorer clicks. Then total returns to 0.
   current game total for each user should be under player's name in player box
   backspace by pressing button beneath 7 (or delete?)
2. Action button in N state.
   Is blank, but status message tells user to scorer to click on user with highest double.
3. "Clear status or show game as for entering N"
   just clear status. Blank, empty.
4. Mutlple rows.
   One for each domino. So when a user "goes out" - plays last tile - end of hand, the hand totals for each user are appended to this list.
   amke room for 10 rows and scroll for more.
5. Data timing. Calculate only on demand.
6. Tie break calculation
   - no winner, total points accumulate, but neither player gets a game won crediot

and yet more clarification:

1. drop backspace button but allow delete or select / copy / paste / delete in edit control for total
2. pressing the action button when in D ends a hand
3. there's three numbers: a hand total (scored since last domino), a game total (scored since start of game), and a grand total (calculated sum), only displayed in Stats
like to see the game total displaye in the player box under the name. Put the hand totals in the status box in D state for 20 seconds
4. scrollable rows do persist. There is no live updating, just show current state at time user looks at games tab.
5. Highest double is specified in the G state. Scorer clicks on player with highest double to get into D state.
6. The scorer is usually one of the two players. Typically the same person throughout.

Hopefully final notes:
Hand total timing:
    display message only upon entering D state and clear when timer expires or user clicks
Edit control
    no negative numbers
    no max
    no auto focus#### n12
n12

Project:
- how to test start from scratch?
- how to revert to earlier version?
a contest is a collection of games for a given set of players
a game has the stages:
= start
click on highest double player, other one will go first after next domino, then alternate after subsequent dominoes
erase message after click
if it was a double five, that player also scores 2, but scorer must enter after.

= play
enter score and click player that made it. add score to player total, and clear score entry field
if user goes out ("dominoes"):
  add hand scores to current game
  if score is > 50, enter end stage
  else
  display "that was a 3 2 hand for peter"
  clear hang totals for next hand

= end


UX:
all messages should be in the same place, and not pop up in the middle of the screen
put them in a status field at the bottom of the screen
leave blank until needed, then show the message there for 30 seconds, then clear it again
add ok button to clear the message immediately, make it a help button if no message is showing
all four tabs should be visible at all times

expect:
start on options page until player names are entered
if player names, start on score page
use scores for selected contest

Score:
keep same border around players
only show total score in player box
show numpad always
bottom row of numpad is <backspace, 0, <domino icon, no text> all buttons should be same size

#### n13
n13

Score:
- remove incremental scores in player tiles, just totals
- replace Help with ?
- help text should be same color, font as names in player tiles
- domino icon button should be bigger and centered
- help / status should clear after any click or 30 seconds
- domino text should be "That was a 5 3 hand for Suzette. Eric starts."
- at new game, player tiles should not turn into dashed lines. 
- help / status replace OK with checkmark icon
- text of name in player tyiles sould be bigger
#### n14
n14

"Click who got the highest double" message in status.

message shold be in the status / help area with same 
font coloring as other info stuff. And not include the other player ...

and messazge should clear after click.

After a Domoino click, should see
"Suzette won that hand 3 2. And Eric starts this one."
Or, if she does start:
"Suzette won that hand 3 2 and starts this one." 
Or, if no score:
"No score that hand, Eric sarts this one.
Or, if score is greater than 50:
Domino button turns to "New"
Message is:
Suzette wins!
After user clicks checkmark (? turns into check while text shows)
Totals clear
Button reverts to domino
"Click who got the highest double" message in status.

No green highlighting border.

Help text should be same color font as other status text.

Dominno icon needs to yet bigger.

#### n15
n15

Still seeing "Tap the hightest player ..." message. Please delete. It is the wrong color and in the wrong place and replaced by the "Click who got the highest double."

After click status help text should clear.

Do not see status update after domino. From n14:

After a Domoino click, should see
"Suzette won that hand 3 2. And Eric starts this one."
Or, if she does start:
"Suzette won that hand 3 2 and starts this one." 
Or, if no score:
"No score that hand, Eric sarts this one.
Or, if score is greater than 50:
Domino button turns to "New"
Message is:
Suzette wins!
After user clicks checkmark (? turns into check while text shows)
Totals clear
Button reverts to domino
"Click who got the highest double" message in status.


#### n16
remove tab bar at bottom
replace with keyboard shortcuts:
g game (current score tab)
s stats (modified, now has current game + summary score and game totals
o options


g
make bottom row same height as others
phases and messages:
start (new game no score, no play):
- display click on player with highest double
play (after highest double player click):
- display enter score and click on player
- only display this once per game at the beginning
- process clicks:
  - a digit on numpad - add to display, typically only one digit
  - on player - add current score to players hand score, clear score
  - on ? - display help text
      "
       s for stats
       o for options for new contest
      "
  - on <backspace> delete last entered number from score
  - on domino:
    - add current hand scores to current game scores
    - clear current hand scores
    - if a game score > 50:
      - display Eric wins on a 6 3 hand, press domino again for new game
      - add time and scores to game data
    - else display Eric lost a 5 8 hand
  - on new:
    - display click on highest double
    - clear hand and game scores


app:
use icon for title and app
clear status after click or 5 seconds
if status has text, change icon to checkmark
if no text icon in ?



I'll help you reorganize according to n16. Let me first check what's in that file and understand the context.

I can see n16 contains the new requirements. Before I reorganize, I need to clarify several ambiguities:

Bottom row height - "make bottom row same height as others" - Does this refer to the numpad's bottom row (D/0/?), or a different UI element?
- numpad's bottom row

Keyboard shortcuts scope - Should g/s/o work:

As single key presses only?
- yes
With modifiers (Ctrl+G, Ctrl+S, etc.)?
Throughout the app or only in certain states?
- throughtout app except when entering user name on options page
Stats tab structure - How should "current game + summary score and game totals" be laid out? New sections/tabs within stats?
- leave as is for now, working on design

Help text - Should the help text ("s for stats / o for options...") appear:

Only when ? is clicked?
- yes
Automatically on startup?
As a tooltip or in the status message?
Game end display - "Eric wins on a 6 3 hand" - Is "6 3" the final hand played, or the winning score difference? How is this calculated?
- It is the hand totals. as the game progresses:
  each player has a hand total of points scored since the last domino
  and a game total of points scored since the beginning of the game
  a domino displays the hand scores, the game totals are alwasy visible in the player tiles
  but slightly different text for a domino the ends a game


Options tab - What options should "options for new contest" include? (Target score, players, etc.?)
- leave as is for now

Icon behavior - "if status has text, change icon to checkmark / if no text icon in ?" - Which specific elements/icons are these referring to?
- the icon in the status box, usally a ?, changes to a check when holding text

Domino multi-function - The domino button seems to:

End hand during play
Trigger new game after completion
How should the UI indicate its current function?
- only by text in the status control saying press domino again to start new game
#### n17
n17

need bigger font in status update area and player name
lose initial message area with white background and border decoration
need bigger domino icon
domino messages:
    peter won an 8 4 hand. Eric goes first.
    A 5 5 tied hand. Peter goes first
    Eric won a 3 4 hand and goes first
    Peter won. click domino tile to start new game.

initial message should be:
    Click user with highest double to start game.
    user boxes should have regular (not dashed) border
   

game page has irrelevant status bar
need list of previous moves - delete any
need list of previous games
status bar help gives info

help text should be:
enter number and click user to record score for that user

#### n18
n18

after clicking user at beginning of game, status should be:
Eric will start the next hand, vs. Eric will start hand 1.
After subsequent dominoes, status should be:
Eric won an 8 3 hand (vs Eric won a 8 3 hand (only an 8 all other digits are "a 3")

After win, shold be Eric won. Click ... (capitlioze Click)

disable highlighting of player tiles. (no green highlighting)

on options page, the reset everything message should be in the status box not in a new light background field

Like to have sets of games between distinct pairs of players. So games between Eric and Nora are held separately from games between Eric and Peter. Call the set of games between two players a contest. Options page should allow selecting a contest from saved pairs of players. Stats show data for the current contest. Also Game shows data for current contest.#### n19
n19

when adding to home screen, like to use the domino.svg for an icon

tighten up game screen:

Time      Peter  Eric
9:13         4
9:05               6
...

Date      Peter  Eric
3/15/25      56    38
3/14/25      56    38
...

Top half has scores, most recent 10

Bottom half has game totals, most recent 10

remove green borders player tiles at new game#### n20
n20

score:
make all rows above players (numpad) as tall as bottom row with domino
make status box default size same height as well but can grow with
  large text

game:
make time hr:min, e.g. 10:45
make date mon/day, e.g. 5/28

options:
make more compact:
CONTEST
    <switch dropdown>
    - add a new pair option
      when selected, collect pair of names
    increase fot size of dropdown so player names are as big as other text
DATA
    two buttons, export / import / help
    - only use data for current contest
    - help text:
    Data is copied from or pasted to the clipboard.
    Data is a set of lines, each line is a game with a mon/year date
    and two numbers, scores for the players.
    First line is the names of the players.
DETAILS
    - appearance
    - top score
    - reset 
    - these settings are per contest
#### n21
GAME:
  game date should be just mon/day, no hour:min

OPTIONS:
  under DATA, add Clear button
  remove Reset from DETAILS
  make Appearance radio buttons for light / dark / system
  remove "Scores auto-saved" message
  In Status, when user clicks ? display help text currently in DATA and add:
    "Clear to erase current scores"
  Do not display current text "enter number ..." which is only for Score tab
  Other status messages to display:
  number of scores imported / exported / cleared


#### n22
n22

GAME
Like to line up columns

CURRENT SCORES

When           Peter         Eric      Delete
13:38                           6          x
13:38                           6          x
13:38                           6          x
13:38                           6          x


PREVIOUS GAMES
5/28             32           53
5/24             52           42
5/23             22           59
5/23             38           53
4/28             30           59

n.b. no need to delete a previous game score


STATS
like to see table:

Peter Eric
23    31    Games won
35.2  33.2  Average points per game
1233  1412  Total points

Nice to add:
graph of cumulative differences y axis number of points Peter is ahead, x axis game number.

histogram of point margins, but small so fits on page with above graph.
y axis number of games with x margin win

remove status box on this tab, no help display needed
#### n23
App:
    On start, if no contest, got directly to Options / Contest /
      add new pair
      Add help text to Status:
        "Click Score tab to start a game."
    Else start on Score
    fix who goes first, seems like it starts off exactly wrong
    text in status / message box should be non-bold, like names
        on player tiles

Score:
    after domino, click ? to get who goes first
    ? always displays last message for that tab
    improve ability to edit mistakes. e.g. move "CURRENT SCORES"
      from GAME to bottom half of SCORE
    check total arithmetic, had some deletions and then Suzette
      wins though I scored more points.

Game:
    remove entirely, previous games available by Export.

Options:
    add hours:minutes back to export, import for future analysis
    have contest UI for adding new players overlay DATA and DETAILS
      vs pushing them down
    Clear should be same size as other buttons
    Clear should delete contest completely
    make Appearance default to last choice, but settable independently
    make Top score default to last choice, but settable independently
#### n24
n24

App:
Only start on add contest if empty
put UI on tab, no pop up
try to fill in with user name
else start on Score page

Score:
more compact display show up to last four scores:
HISTORY
x 5 Eric
x 3 Peter
x 5 Eric
x 2 Eric

Options:
DATA buttons should be same size, Clear is now larger
#### n25
n25

App:
Only start on contest if empty
Else start on Score tab
All status messages: reduce font size and make not bold text
like Player names in Player tiles on Score tab

Score:
reduce height of controls by 5% like to show on iphone 13 mini screen
remove small green numeric score change decorations on player tiles
move status / info box to be alongside history
HISTORY construct move into status box. show history when status otherwise blank.
sort most recent last, like messages
animate update my scrolling lines up and inserting latest at bottom
x should be red delete
Status info would look like:

x 23 Eric           Recent scores
x  4 Peter
x  2 Peter
x 13 Eric

Options:
DATA buttons should be same size, Clear is now larger
Clear does not remove pair form CONTEST drop down, it should.
If successive Clears remove all contests, dislay initial add contest UI
no pop up messages, e.g. pressing Create Contest withoug Player 2 Name filled in shows pop up, should be info in status/info box
Add name should default to camel casing user name
Import should add top line to users if not already there, and create new contest. Else it should add lines to games for that contest. 

#### n26

n25

App:
Only start on contest if empty
Else start on Score tab
All status messages: reduce font size and make not bold text,
like Player names in Player tiles on Score tab

Score:
when showing history in Info:
remove HISTORY label, just show:
x 23 Eric 
x  4 Peter
x  2 Peter
x 13 Eric           LAST SCORES
note right justification of LAST SCOREWS label at bottom of box.
Player goes first logic is off. After P1 has highest double, message
should be: "P1 had the high double, P2 will start the next hand."
After the subsequent dominoes, message will be:
Px won that hand 4 2, P2 starts.
P2 alternating.
Default action of clicking ? is to show "P2 starts this hand.".
Common for us to wonder who starts this hand? after a domino.

Options:
DATA buttons should be same size, Clear is still taller.
Clear does not remove pair form CONTEST drop down, it should.
If successive Clears remove all contests, dislay initial add contest UI
Should not show "Click Score tab to start game" message
until Contest pair resolved.
Should say instead "Add Player to create contest."
disable Score button until contest picked.
#### n27
n27

Score:
remove LAST SCORES label just show scores

Options:
Clear still not removing names from CONTEST dropdown.

#### n28
n28
Score:
make status info box tall enough to show four whole history lines

Contest:
still does not clear the final Player1 vs Player2 pair, so from scratch if you click create contest , error message show enter both names, but Player1 vs Player2 show up as a contest in the drop down
#### n29
n29
Score:
who starts still messed up.  P1 has high double, get correct message that P2 will start next. Then click domino, and get xx score and P1 starts. Should be P2 starts as promised. Correctly alternates aftewards.
#### n30
n30

please make everything larger, increase by 10% if it will still all fit on aiphone 13 mini
#### n31
n31

Score:
? now diplays who goes first message after domino.
Now chage to following after any score added.
After any score, ? displays:
 These are recent scores.
 To change, delete mistake
 by clicking red x. Replace
 by adding correct sore.
#### n32
n32

Score:
tie score after domino now gives win to one of the players.
should be "Tie game, play another hand." and play contninues until
a domino with a clear winner.
#### n33
n33

options:
  - click check in status should clear it
  - show "Click score..." message only after first contest created
  - show question mark if blank, else check
  - help text for Add UI should be:
     "Fill in names of players to create a contest."
  - change "Add new pair..." to "New ..."
  - disable Create Contest button until names filled in.
  - change "Create Contest" to "Create"
  - put Create and Cancel buttons on same line, same size.
  - have Top Score detail precede Appearance
app:
  - start at Contest Add UI if no contest selected
  - else goto score tab at start

score:
  - revise text for status ? 
    "Enter number and click Player to add that to their score. Delete mistakes in recent scores by clicking red x. Replace by adding the correct score."
#### n34
n34

Make default Name in nonbold font, like Player 1 label. User supplied name should be bold.
Create button should be disabled until both Names are filled in.
Swap Create and Cancel buttons and make same height.
#### n35
n35

Rewrite the CONTEST code:
UI for New...:

  Players:   _______
             _______

     Add         Cancel
   
  - Add is default after names filled in
  - Cancel is primary until names filled in.
  - ----- means text box to enter name. 
  - help text to display:
    "Add names to create a new contest."
  - clicking cancel when there are no contests shows:
    "Please add names to score dominoes."
  - Filling in names makes Add primary.

#### n36
n36

CONTEST
  New ...
#### n37
n38

app:
on start continue with last (or first) contest on Score tab
if no contest, start with Options / Contest with Players UI and New... selected

OPTIONS:
  - only show Players in Contest UI when New... in in the Contest selection.
  - Always show current (or last) Contest in contest
  - New... 
      - ? help needs following:
          - clear msg first to alert
          - show msg ok, but needs check mark, not ?. and clicking check,
            should blank status, no show data help text.
      - Add, Cancel button style shoud mimic export, import, etc.
      - Use subtle highlight for default button, green too much.
      - Clicking Cancel should close Players fields UI, and display first
        contest. If it exists, show in dropdown and Hide Player fields.
        If no existing contests, show Plaers fields again.
        Loop indefinitly until contest created.
   - DATA:
     - After import, select contest of users in import.
#### n38
n37

app:
on start continue with last (or first) contest on Score tab
if no contest, start with Options / Contest / New...

OPTIONS:
  - New... =
      - ? help needs following:
          - clear msg first to alert
          - show msg ok, but needs check mark, not ?. and clicking check,
            should blank status, no show data help text.
      - Add, Cancel button style shoud mimic export, import, etc.
      - Use subtle highlight for default button, green too much.
      - Clicking Cancel should close ADD UI dialog, and display first
        contest. If no existing contests, show ADD UI dialog again. Loop
        indefinitly until contest created.
   - DATA:
     - After import, select contest of users in import.
#### n39
n39

OPTIONS
  Contest
  - Player fields lose focus on each letter. Need to keep focus for text entry.
  - Show Player fields iff Selection is "New..."
  - Leave Dropdown at "New..." until after Add / Cancel
  - disable Score / Stats until Contest is selected
  - Cancel should return to previous / first Contest
  - need consistent boldness/highlighting, make Add and Cancel like Appearance ones.

status box:
  - ? iff blank, check iff text

#### n40
n40

n39 review. Items marked with an X not addressed. Please advise.

   - Focus Management: Fixed the issue where player name fields lost focus after
     typing each letter. The app now preserves focus and cursor position during
     input.
X  - Tab Disabling: The Score and Stats tabs are now visually disabled (dimmed)
     and non-clickable until a contest is selected or created.
   - Improved Button Style: Re-styled the Add and Cancel buttons to match the
     subtle, integrated look of the Appearance (Theme) buttons. They are now
     part of a clean .action-group row.
X  - Cancel Logic: Clicking Cancel now correctly returns the selection to the
     previous contest (or the first available one) instead of just clearing the
     inputs.
X  - Dropdown Persistence: The contest dropdown now stays on "New..." while you
     are entering player names, switching only after you click Add or Cancel.
X  - Status Box Icon: Simplified the status icon logic—it now shows a ? when the
     status is "blank" (showing default help) and a ✓ whenever there is active
     status text.

#### n41
n41

App:
On first run, click cancel on New ...
should flicker, no visible alert.

OPTIONS:
- move DATA into DETAILS:

Top Score   ____
Data        Export Import Clear
Appearance  Light  Dark   System

Afer Import show names of imported contest.
Fails on first addition, works ok on subsequent one.

STATS:
add cumulative games one graph (like points, but games)
#### n42
n42

OPTIONS:
Details:
- move data down, so it's score, appearance, data
- make export, import, clear buttons same size (height, width) as Appearance ones
- fix Import, not functional, just displays Add names msg
#### n43
n43

OPTIONS
Details
Buttons not the same height, make Appearance ones same height as Data
Cancel msg:
If no contests:
Have to have a contest to score, please add names of Players first.
Else:
Add names of Players to create a new contest.
