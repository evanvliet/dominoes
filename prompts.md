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
#### n60
Act as an expert frontend engineer. We want to update our pure client-side
HTML/JavaScript dominoes scoring web app to support a background cloud backup
using a Google Apps Script Web App URL, while preserving our offline local storage architecture.

Please review my index.html file and add the following functionality:

1. App Settings Configuration:
   - derive a backup db name from player1 vs player2: player1_player2
   - store url for db in local storage,

2. Background Sync Architecture:
   - When a game is finalized and logged, append it to a queue array in localStorage
   (e.g., 'pending_sync_games'). Each game payload should look like this:
     {
       date: ISO 8601,    /* YYYY-MM-DDTHH:MM minute precision */
       p1_score: Number,
       p2_score: Number
     }
   - Create an asynchronous function `syncPendingGames()` that reads the queue,
     loops through each game, and sends a POST request via fetch() to the saved
     Google Web App URL using 'cors' mode.
   - If the Google Sheet returns a success status, remove that specific game
     from the localStorage queue. If it fails or there is no network connection,
     keep it safely in localStorage to try again later.
   - dominoes scoring webapp url and deployment ID 
 https://script.google.com/macros/s/AKfycbyxuBBODwP1r42jZnGxH8-M1S3qV_CPs8aoTkR2LkDOJxOvjQnDYZ585p5JNmvZ6dp-hw/exec 
 AKfycbyxuBBODwP1r42jZnGxH8-M1S3qV_CPs8aoTkR2LkDOJxOvjQnDYZ585p5JNmvZ6dp-hw
- code.gs running on server:
see  code.gs here, need to iron out name of sheet

3. UI Integration:
   - on options page, next to top score, have Backup On/Off toggle.
   - if off, no backup
   - if on, call syncPendingGames on each game completion
   - if on and backupdb exists, load all new scores into import area on import click
   - screen records on import and skip duplicates (date and scores the same)


Please provide the updated HTML, JavaScript, and CSS code matching our single-file layout, ensuring that swipe actions and core logic are unaffected.

Here is some javascript for talking to Google:

const APPS_SCRIPT_URL = "YOUR_COPIED_WEB_APP_URL_HERE";

async function backupGameToCloud(gameData) {
  // Example gameData shape:
  // { date: "2026-08-30T15:34", p1_score: 250, p2_score: 180 }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "cors", // Crucial for client-side pages
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    });

    const result = await response.json();
    if (result.status === "success") {
      console.log("Game successfully backed up to Google Sheets!");
      // Pro-tip: Flag this game as "synced" in localStorage so you don't upload duplicates
    } else {
      console.error("Cloud backup failed:", result.message);
    }
  } catch (error) {
    console.error("Network error trying to reach cloud backup:", error);
  }
}


#### n61
n61

move backup button on same line with top score
drop player names and derive from contest name
sync backup is a collection of lists of records.
the name of the list is the contest name  - the names of the players.
the records are just scores and dates, no need for player names.
make url import nicer, use import field.
how to share spreadsheet.

#### n62
n62

nice! But still some issues.

1. Odd state at new game start. Believe it's after clicking on a non-player button on the score screen. Possible fix: disable all other controls except user tiles. Leave Click User Tile with high double message on in message area and clear after high double selected.

2. Date format looks right on spreadsheet, but not on import / export. Please ensure same format on each, need to redo test sample and hisgtorical data to revlect addtion of ISO data format.

3. cloud backup, On load, first download scores from server and merge with local data, i.e., no duplication. Display in data box and allow overwrite by pasting data from clipboard. On Ok, update local data and post data to server. On export, just write data to data block and clipboard with full ISO date format. Perhaps wasteful but small amount of data. No need for a Paste Clipboard button.

4. on sheet, first row should have names of players, vs. p1_score...

Clarification:

1. can not now repro the odd state, looks like controls are now disabled. table this for now.

2. I will redo historical and test data to have right data format, no need to change code to do so on the fly.

3. Best next stop issues:

    1. option A. contest sheet starts with names and then game rows

    2. Option C. But, to be clear, on import, whatever the user puts into the text box, e.g. overwrites downloaded data, wins. what is sent back after import overwrites existing data on the server.

4. Sheet schema should start with a contest header row with player names
#### n63
n63
test latest google stuff
fix tied score
put up releases with ui tag
figure out how to update two branches
assign years to old scores
redo with r2 vs google
add instructions on pulishing sheet
can you just copy a sheet?
how do you github a google sheet

https://script.google.com/macros/s/AKfycbzgtRjfdPA7NGSoKM6ErGr0I76bQfZf_lAHmI8ZcWinOJpg97QEkGkwYB1m8ZLAYX481Q/exec


#### n64
n64

incorporate tied score handling from main branch - force winning hand
need uniform date handling:
<iso date with minute precision>, score1, score2
data records for each game, contest name determines who gets score1 or score2
data should show in box after export as well as copied to clipboard
data import should grab data from box:
  box initialized with data scores from server
  user can modify replace, etc.
  import adds but ignores duplicates.
seems like a lot of extraneous data in local storage, please review

Comments after N64 feedback

the tie rule: in the event of a tie score, the game is not over, and continues with another hand. the tie is not saved as a game statistic.

player ordering: exports and imports are contest specific. the sync of finished games should operate on one contest at a time. so the queue of finished games should be a dictionary of lists, one list per contest. each list would have scores for that contest. in either case, the player is specified by the name of the contest.

Currently data box clears and shows number of records exported, not the actual records.

No need for a migration plan for existing dom_v9 data, in fact just use a new label.

scores should be ordered by date.

idea is scores only get added. need to clear data and start from scratch to delete scores. so all sync operations should only add new (different) scores. amount of data is miniscule, two ints and a date per score. possible optimization is to remember time of last sync and
only ask for later scores.

#### n65
n65

Comments after N64 feedback

the tie rule: in the event of a tie score, the game is not over, and
continues with another hand. the tie is not saved as a game statistic.

player ordering: exports and imports are contest specific. the sync of
finished games should operate on one contest at a time. so the queue
of finished games should be a dictionary of lists, one list per
contest. each list would have scores for that contest. in either case,
the player is specified by the name of the contest.

Currently data box clears and shows number of records exported, not
the actual records.

No need for a migration plan for existing dom_v9
data, in fact just use a new label.

scores should be ordered by date.

idea is scores only get added. need to clear data and start from
scratch to delete scores. so all sync operations should only add new
(different) scores. amount of data is miniscule, two ints and a date
per score. possible optimization is to remember time of last sync and
only ask for later scores.

#### n66
n66

more on feedback

Import can erase games: should only happen when the user presses the clear button. Else only adds games from the text box. Text box is only populated with new data from clipboard or server. so for cloud backup, each press of the import button downloads scores from the server and only adds new ones to the textbox. It then does the same from data on the clipboard. In either case put status result in info box at bottom:
"87 game scores copied to clipboard"
"34 new scores downloaded from server, 3 from clipboard"
and do not overwrite score records in score box.

Player-score order is defined by the name of the contest. Eric Peter is a separate contest from Peter Eric and scores follow order of names in conest name.

Duplicate detection is only used to suppress addition of duplicates, never to delete. Two games in the same contest would not occur in the same minute.

Tied games are games in progress, and not complete until a winning hand.


#### n67
n67

Ordered contest identity is a requirement change. The current getContestKey() sorts names, so it treats “Eric Peter” and “Peter Eric” as the same contest. Preserve name order in the key and use that same order for score columns, queues, and sheet headers. Trim names consistently; encoding the pair as JSON avoids collisions if a name contains |. A new storage label is appropriate if old data is intentionally abandoned.

- player names are letters only and single words

Treat the text box as an append-only working set. Fetching from the server or pasting clipboard data should add unseen rows without clearing what is already there. Importing should add those rows to local history, also without replacing it. Only an explicit clear action should delete scores. Browser clipboard reads may require permission, so I recommend an explicit Paste action (or have the user paste into the box) rather than silently reading it during import.

- just populate text box with new server data and allow user paste to add scores.

Make counts describe the destination. “Copied to clipboard” is clear for export. For import, report how many new records were added from each source and, optionally, how many duplicates were skipped. Avoid saying “downloaded” if those records were actually added to local history.

- on export:
32 game scores copied to clipboard
  on import:
23 scores 
just show in lower info box, leave text area alone. clear both when user clicks check
mark in lower box or selects other action (new contest)

Use one duplicate rule everywhere. Within an ordered contest, (ISO date to minute, score1, score2) is workable given your assumption that two games won’t occur in the same minute. Apply it consistently for local import, cloud append, and merging. Keep records sorted by date for display/export, not as a side effect of deduplication.

- perfect

Keep ordinary sync append-only. The current cloud endpoint supports duplicate suppression for individual posts, but bulk sync has a replace mode that clears the sheet. Remove replace from normal import/sync; make clearing a distinct, deliberate operation that clears both local and cloud data if that is what “start from scratch” means.
Tied scores stay in progress. Don’t add a tie to completed-game history or the sync queue. Continue hands until there is a

- perfect
#### n68
n68

Import just adds scores from the text area.

Change cloud sync processing as follows. Make indepondent of import, which is used as before
to add scores. If cloud synd is enabled, just asynchronously (i.e. background) get all scores from server and add any it does not have. Do no more than once a day.

When user clicks import button, info (bottom) text area says:
<if cloud sync and nRecentImports> Found <nRecentImports> scores 3 days ago. 
    set nRecentImports = 0
Paste new scores above and press Done to
update score history.
<after user clicks done>
Added 3 scores.
and delete input area

Clear deletes all scores from both local and server histories.

I like Eric vs Peter for contest names, the vs a small bit of eye candy.
#### n69
n69

yes all this is contest specific.

yes, cloud updates not visible, and likely quite exceptional.

I like your status wording, but like to keep it as a prefix, rather than a separate prompt. Only disply in hte exceptional case of discovering new scores on the server.

yes Clear only deletes scores for the currnet contest, both server and client. Put a warning
in the lower status box if any failure.

Yes background sync can amend to history, ignoring duplicates. And the app appends scores on Import, also ignoring duplicates. Is there a race condition, do we need a lock or something?
#### n70
n70

show the "upper text area" to show imported or exported scores,
it disappears after click on check mark or other button.
placed below the DETAILS box, above the status ? box

Headers on server sheet are p1_score... should be player names

I like Peter vs Eric style name for sheets. not Peter!Eric

Adds scores ok, but Clear does not clear server scores.

#### n71
n71

Clear does not work.
User names do not appear in sheet header. Still shows p1_score ...
How do I make sure I'm running against the latest code.gs and not somethoing cached.
imported scores should add to server as well.
#### n72
n72

still showing date	p1_score	p2_score, like to see Date Eric Peter
clear still broken
after import scores should be sorted by date
need more space for version display, currently truncated after GS: CHECKING ...
#### n73
n73

looks great! just a few things:
change style of version stamp on options page, now small caps, prefer mixed case
version stamp still shows earlier server version, but works ok
after import, should show number of scores added out of number submitted.
on clear, put confirmation text into lower box with cancel ok buttons
on clear, if cleared, remove even context name and delete sheet on server.
review stats. on new contest shows zero games but has non-negative win margins.
after just one game, total points, games is ok but graph of cumulative points / games won is empty
and histogram does not seem right, has entry for both me and peter, should onoly have one.

#### n74
n74

still stuck on older version stamp, but if i run from python -m http.server get right stamp
version still in small caps case
import status feedback not visible

#### n75
n75

can't create contest with names reversed,
more testing on import export
single game still shows no game or point history and shows histogram for both users should only show one
import broken, create new contest, click import, says no games to import, regardless if backup is turned on. no way to paste data into box
backup not working
not seeing version stamp from sheet code.gs


#### n76
n76

Idea is that Eric | Peter is a different contest than 
Peter | Eric, so identtity should be stable. 

Both players are active. after a single game one one of the players
will have a win margin, the other none. But there are three "views" to click through, one for win margins for one player,
one for margins for the other, and third for all margins.

In case of version stamp failure, please provide good
diagnostic feecback in lower box on options page.
#### n77
n77

import export funky 
hide backup url
copy url from cliboard at init
check auto daily import
stats funky
divvy up into manageable files
#### n78
n78

	Import/export “funky”	First capture one failing example: expected result, actual result, and whether it’s clipboard export, paste, or import. The app exports Date,Player 1,Player 2 CSV, while README.md documents the older `Player 1

Scene:
new contest, with existing data on server. click backup.
Expect:
status: imported <n> scores.
data: n scores added
Get:
no status

Scene:
existing data, cloud backup, import. paste data and click done
Expect:
status: imported <n> out of <all> scores <wait for checkmark or other action to clear status and text>
data: n more scores on local and server updated with those scores as if they had been added manually
Get:
nothing
Comment:
implicit in this reorg of UI making the input text area a fixed part of the options tab:
Contest
p vs p dropdown

Details
top score / Backup
Appearance ...
Scores Export Import Clear

Data
<empty box>

Status        <check>


Idea is that all feedback, confirmation, choice stuff goes in the Status box
Data box is used to paste scores for import, URL for backup, show scores for export.




2	Hide Backup URL	Specify whether “hide” means masked by default with a reveal control, or omitted from the UI unless backup settings are expanded. Keep the saved URL usable; don’t clear it or disable backup when hidden.

when user selects backup, if url not set, prompt for it to be pasted into data, and only enable if url provices a version stamp. once enabled place note with url in status box.

3	Copy URL from clipboard at init	Browsers generally block reading the clipboard on page load. Specify this as a user-initiated Paste action (or paste into a focused URL field), with permission/error feedback—not silent clipboard access during initialization. Decide whether this should replace or supplement manual entry.

as for 2 above

4	Check automatic daily import	A once-per-24-hours cloud merge already appears to exist in index.html, but define the intended trigger: app startup, returning to the app, or contest selection. Specify per-contest behavior, no duplicates/overwrites, and user-visible success/failure status.

intended trigger is checksum mismatch. so on app startup, get version stamp and checksum. It not last, sync scores. Sync consists of union of local and server scores with duplicates removed. Comparison of time stamps sufficient for duplicate detection.

5	Stats “funky”	Include a screenshot or example dataset and say what the graph should show. Current margin histogram uses eight bins scaled to the data maximum; with only one game, its margin lands in the last bin, which may look misleading. Specify expected behavior for zero, one, and several games, including the three player-1/player-2/all views.

views:   Peter.  Eric.  All
0 games: blank for all
1 games: only score for the one winner and only one margin all all
severla games:  one tick for each win of margin set. so all would have sum of ticks in each player.
games and points should reflect actual total number of games played (or won)

6	Split into manageable files	Make this a separate cleanup after the fixes. Keep the app deployable on GitHub Pages without a build step unless you explicitly want to introduce one; define a smoke-test checklist so the move doesn’t change behavior.

separte files for:
css
html
javascript for each tab
jabascript for data
javascript for cloud
consider dart

#### n79
n79

n78

	Import/export “funky”	First capture one failing example: expected result, actual result, and whether it’s clipboard export, paste, or import. The app exports Date,Player 1,Player 2 CSV, while README.md documents the older `Player 1

Scene:
new contest, with existing data on server. click backup.
Expect:
status: imported <n> scores.
data: n scores added
Get:
no status

Scene:
existing data, cloud backup, import. paste data and click done
Expect:
status: imported <n> out of <all> scores <wait for checkmark or other action to clear status and text>
data: n more scores on local and server updated with those scores as if they had been added manually
Get:
nothing
Comment:
implicit in this reorg of UI making the input text area a fixed part of the options tab:


Contest
p vs p dropdown

Details

top score / Backup replaced with a Local | Cloud toggle. 
    If cloud selected, paste backup url in data box and ask for 
    comfirnation in status box. Allow user to change data box
    and specify other backup url for that contest. Confirm Cloud
    choice if sucessful version stamp.
Appearance Light Dark System
Scores Export Import Clear

Data
<empty box>

Status        <check>


Idea is that all feedback, confirmation, suggestion goes in the Status box.
Data box is used to paste scores for import, URL for backup, show scores for export, combobox for contest creation. relocarte  current popub combobx.
player names for contest creation go here if "new" selected, with ok.



2	Hide Backup URL	Specify whether “hide” means masked by default with a reveal control, or omitted from the UI unless backup settings are expanded. Keep the saved URL usable; don’t clear it or disable backup when hidden.

when user selects backup, if url not set, prompt for it to be pasted into data, and only enable if url provices a version stamp. once enabled place note with url in status box.

3	Copy URL from clipboard at init	Browsers generally block reading the clipboard on page load. Specify this as a user-initiated Paste action (or paste into a focused URL field), with permission/error feedback—not silent clipboard access during initialization. Decide whether this should replace or supplement manual entry.

as for 2 above

4	Check automatic daily import	A once-per-24-hours cloud merge already appears to exist in index.html, but define the intended trigger: app startup, returning to the app, or contest selection. Specify per-contest behavior, no duplicates/overwrites, and user-visible success/failure status.

intended trigger is checksum mismatch. so on app startup, get version stamp and checksum. It not last, sync scores. Sync consists of union of local and server scores with duplicates removed. Comparison of time stamps sufficient for duplicate detection.

5	Stats “funky”	Include a screenshot or example dataset and say what the graph should show. Current margin histogram uses eight bins scaled to the data maximum; with only one game, its margin lands in the last bin, which may look misleading. Specify expected behavior for zero, one, and several games, including the three player-1/player-2/all views.

import data from te30, check Stats
shows 0 gmes won for Peter and Eric, should be 16 14
games graph looks like a straight line
histogram shows no win margins for Peter and totals are same as eric, should have distinct
diplays for bars for number of wins with a particualr margin.

views:   Peter.  Eric.  All
0 games: blank for all
1 games: only score for the one winner and only one margin all all
severla games:  one tick for each win of margin set. so all would have sum of ticks in each player.
games and points should reflect actual total number of games played (or won)

new contest, let A win by 51, then B by 51
games graph is straight line, should up then down


6	Split into manageable files	Make this a separate cleanup after the fixes. Keep the app deployable on GitHub Pages without a build step unless you explicitly want to introduce one; define a smoke-test checklist so the move doesn’t change behavior.

separte files for:
css
html
javascript for each tab
jabascript for data
javascript for cloud
consider dart

Other issues:
consistent display and erasure of commehts on options page. start with clearing data and status boxes after user action
on new game, click domino before player, gets into bad state, should disable domino tile until player select


Working spec — cloud backup and modular direction

Cloud merge:
- Cloud backup is per contest. On startup, check the cloud revision for each configured cloud-backed contest. Fetch and merge that contest only when its revision differs from the last revision recorded locally.
- A completed game is identified by contest plus its normalized timestamp, at minute precision. A contest may have at most one game per minute. Reject/report a second game at the same contest timestamp rather than silently merging or overwriting it. If a timestamp collision has different scores, surface it for explicit resolution; neither copy wins automatically.
- Merge is a union by that identity. Never overwrite an existing game's scores during routine sync. Push local-only games to the server and add cloud-only games locally. Report the number added and any conflicts in Status.
- The cloud API must expose a per-contest revision that changes after every add, clear, or other data mutation. Compute it from a canonical, consistently sorted representation of the contest's normalized timestamps and scores. A successful fetch or upload returns the revision the client can store for its next comparison. Keep API/script version validation separate from this data revision.
- Clear on a cloud-backed contest is a reset on both local and cloud storage. The cloud reset advances a contest generation/reset marker. A client that observes a newer reset marker replaces its local contest history with the post-reset cloud history instead of unioning stale games back in. Require confirmation and report success/failure; do not claim a clear succeeded unless both sides confirm it.

Cloud setup and Options feedback:
- Keep the backup URL saved per contest. Selecting Cloud with no URL enters URL-entry mode in Data; validate the URL with the API version check before enabling Cloud. Show the selected mode and saved URL in Status after success. A failed check leaves the contest local and reports the error.
- Clipboard access is user-initiated: the user pastes into the focused Data field (or uses an explicit Paste action). Do not read the clipboard during app initialization.
- Data is a shared control with an explicit mode/label for URL entry, score import, score export, or new-contest player names. Switching modes must not submit or reinterpret existing text. Clear Data and Status consistently after the action completes; keep actionable errors visible until the next action.
- Import reports how many records were accepted out of how many were supplied, and identifies timestamp conflicts without overwriting existing games. Export reports completion and leaves the exported text available to copy.

Modularity:
- Fix backup/import and statistics behavior before restructuring files.
- Keep the app deployable on GitHub Pages without a build step. Prefer native ES modules for code organization; treat adopting Dart or a build tool as a separate decision.
- Separate game/contest rules and score history from storage/sync adapters and UI views. Local storage and cloud backup should be replaceable adapters; scoring views should not own game rules.
- Represent turn order and start-player conventions as rules, not UI assumptions. Keep the game model open to scoring formats beyond two domino scores (for example pool scores or bead/string scoring).
- After the refactor, smoke-test contest creation/selection, score entry and domino completion, import/export/clear, cloud setup and two-way sync, offline/local-only use, theme settings, and all statistics views.
#### n80
n80

only check cloud sync for one active contest, only once per day,
at startup or contest change

completed game identified by timestamp. two games with same timestamp will be pruned at sync time, with local taking precedence.

merge overwrites existing entries, local winning. 

cloud api need only provide complete list of all scores for a given contest. and accept new scores to
add to cloud version, and keep them sorted by date.

so cloud sync gets all scores, updates local, and sends back any scores in local version not on server. cloud deletes any scores on server that have conflict
with timestamp of posted scores.

clear does reset both local and server. 

import reports scores accepted and supplied, and resolves all conflicts by local coopy winning. Export shows nuimber of records in status and score data in data block

revsist modularity later.

#### n81
n81

simplify options

one box of parameters

one box of text for copy / paste

one box for status / info / confirmation

parameters:
    players
    top score
    cloud url
    dark mode
    data:
        erase
        import
        export

text box
    resets dynamically, often has scores
    also backup url
    user names

info
    has checkmark to clear
    updated after UI click
    typically ephemeral, cleared by check

on start:
    display parameters in one box, akin to
    what we have now, but in one box

on paramater click:
    invoke UI to update parameter, e.g. specify
    player names, backup url if needed. for each
    parameter as follows:
        players: put up two text boxes for names of players
            and add "Add" button. into text box. add "Enter player
            names and press Add" into info box.
            top score has number input control as now
        cloud url. just a toggle to turn on. also
            when turned on, display url in text area. with "Update"
            button. user can edit url, press Update to try connection.
            Only change after successful connection.
            if no url, "Paste backup URL" into status. Add "Check"
            button, only set url if success. Display "Checking ..."
            or "Failed" or "Success". set toggle to on.
            when turned off, stop cloud sync. Keep track of last
            successfully connected url, and use it by default on new
            contests.
        dark mode: for black, if off, use system
        data:
            import:
                "Paste data into text area and click import again."
                <user clicks import> add any new scores. update cloud
                and set status area with "<n> out of <m> scores added"
            export:
                put all scores in text area. update status: 
                "copy scores from text above"
            erase:
                erase both local and server records of current contest

misc:
    double click text to get version displayed in status,
    clears on checkmark, other click (easter egg)

    like to have a better icon, dominoes.svg too primitive.
#### n82
n82

remove contest combo
make Players the combo control
top score should shorter
lose url buttron, replace with activation by turning clould backup on.
have top score, cloud, and dark on same line
prefilx import ... buttons with Scores label
upshot:

Paramenters   <drop upper right label>

Players  <combobox
Options  Cloud    Dark   Top Score
Scores   Import  Export  Erase

Data

Status

Data and status to stay clear.
Selecting new puts up player names in data
and an Add button
and a "add player neames and press Add" in info

Click Cloud: if enabled, turn off
else show backup url if previously set with OK button
put "edit to change url"
else leave black with disbaled set button
status says "enter url for cloud backup and press Set.

If new url, put "Backup updated", else "Backup enabled".

Else put "unable to contact server".

Click Dark: set dark mode

Click Top score: put Top Scoree <edit control> in Info.
And "update max score" in status.

Scores:
on Import put "put scores in data area first." followed by
Import button.
On Export "copy NN scores from data"
On Erase put "Press OK to remove all data for the xx vs yy contest. followed by OK button.

the three buittons should be on a line same size, etc.

Status area:
Make checkmark queston mark button min widtth. now forcing 
all status to be one character per line.
#### n83
n83

PARAMETERS:  <lose the Player vs Player  in upper left>

players, oprtion and scorees should like up vertically:

P      <combo
Opt.    Cloud     Dard.   Top>
Scores. Import.   Export. Erase

Data - should start out blank, no "Chooose ..."

Bottom box Should have STATUS lave like DATA and PARAMETERS
Check / question should be just a small box up upper left,
as on the status page for scores tab
And text and spacing should be like that also.

Keep size so fits on iphone 13 mini

Add the version easter egg: double cliock the Status area to get version info printed.

and any suggestions on a better domino.svg icon?
#### n84
n84

check mark still not like scores tab - should be in uppoer right
buttons in Prameters still not lined up vertically - need to widen Scores buttons pand Paleers combo box
Change Top to Max

Heading of DATA should not change, and remove Buttons or additional directon in data area unless specified for particular action. So press Import
then lablel stays DATA
Data block stays blank. no Cancel button
Status area message:
"Paste scores into Data and press Import again to add scores. Make button green but just Import not Import now

Export:
DATA labell stays the same, no <select scores> or Done bubttons
Status is <nn> scores on in data, copy and paste to save


#### n85
n85

n84

check mark still not like scores tab - should be in uppoer right
if awkward for some technical reason, just make it the same as the
bottom panel of the scores tab, check mark in upper right, no STATUS label

buttons in Prameters still not lined up vertically - need to widen Scores
buttons and Players combo box
make all controls buttons and combo box same height



#### n86
n86

import should always work - does not depend on current contest. if new data create
new contest, the way it worked before.

and if no users, have a local cloud vs guest one. right now selecting new with
no users does not provide usable ui for entering player names.
#### n87
n87

scores tab, bottom panel
displays recent scores and allows deletion
somewhat flaky animation and scores not displayed in correct order
switch focus and return, scores painted in correct order.

increase font size on scores page
#### n88
n88

help on scores page: start out blank.
  remove "Click player ..." message, just blank. user can type ? to
  get help
advise on json config idea - replace all options with simple textbox
  displays all config settings in json
  updates settings from json
have seen but can not repro a stuck state on the scores tab
  perhaps fluke key press at game start. any way to exercise?
produce pages like the current scores we could just tape on
  to our old sheets. see photos in history
like to review text, list all user feedback messages, where and when displayed
add years filter selection on stats page by year or all
increase font on user messages




#### n89
n89

keep lower box on scores tab same size

remove hightlighting of users, just have text message saying who goes first

game end: message format:
Peter wins 52 to 47 on a 4 6 hand. 
allow to go blank with check
highlight users in this case.
disallow any controls
any non-user click, clear scores from user tiles, show:
Peter won the last gaeme 52 to 47. 
Click user with high double to start a new game.
Keep users highlit until click to start game.

on stats page, add a third view for another click on the second tab, got graphs for points, games. Add tail
of recent games scores with time stamps.

increase font size of player names on scores tab


#### n90
n90

“Lower box”: Do you mean the status/history box on the Score tab? Should it keep its current height even when messages or recent scores change?

  max size needed but no bigger than can fit on iphone se

Player highlighting: Should the starter’s highlight disappear during normal play, but both players highlight after the game ends? That seems to reconcile “remove highlighting” with “keep users highlit.”

  hightlight players iff waiting for who got highest double.

Game-end flow: Confirm the exact message format and whether tapping the checkmark hides the message without unlocking the game. Specify which controls are disabled and whether tapping anywhere other than a player card leaves the end state unchanged.

  Peter wins 54 to 48 on a 5 3 hand. If starting a new game, click on the player with the highest double.

  tapping check just clears box.

  but any user click outside a user tile does not change game state but does causes following in status:

    Peter won the last gaeme 52 to 47. 
    Click user with high double to start a new game.
  
  Keep users highlit until click to start game.


Recent games: Specify how many games to show, whether newest comes first, and the timestamp format.

  like the scores control on the scores tab, 4 or 5 whatever fits in current size box, newest last, same format
  as export on options.


Player-name font: Give a target size, or say “increase from the current 14px mobile / 15px desktop.” 

  Swap size with score
#### n91
n91

need recent games to be same size as graphs so doesn't jump around
need text color of recent games to be white, or just like font color for total points

when disabling input waiting for highest double, still allow stats Options clicks, but return to scores tab in same state where players are highlit and other controls disabled.



#### n92
n92

text / help changes:

    remove If starting new game ...

    Peter goes first -> Peter has the highest double, Eric will start the next hand.

    Eric goes first next hand. -> Eric goes first.

Bug:

    Options | New... is broken, can't create new contest.

