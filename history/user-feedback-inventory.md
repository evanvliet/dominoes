# User-facing feedback inventory

This inventory covers the in-app help, status, confirmation, validation, and completion messages, including their display locations and triggers.

## Score tab

| When | Feedback | Where |
| --- | --- | --- |
| Initial game start | No instructional message; the status area is blank. The `?` icon and typing `?` open help. | Score status area |
| Type `?` or tap `?` while choosing a starter | “Click on player with highest double, then score by entering points and clicking on player tile.” | Score status area |
| Type `?` or tap `?` during play | “Enter number and click Player to add that to their score. Delete mistakes in recent scores by clicking red x. Replace by adding the correct score.” | Score status area |
| Type `?` or tap `?` after a game ends | “Game finished. Click player with high double to start a new game.” | Score status area |
| Try to enter scores while a game is over, or tap Domino outside active play | “Click player with high double to start a new game.” | Score status area |
| Complete a hand | Reports a tied hand, or the hand winner and both hand totals. If the game ends, adds whether a player won or the game tied and prompts for the next starter. | Score status area; the message can be acknowledged |
| Record scores with no other status visible | Recent score amounts, players, and (during play) delete controls appear in the status area. Delete controls are hidden after the game ends. | Score status area |

## Stats tab

| When | Feedback | Where |
| --- | --- | --- |
| Enter a year with no recorded games | “Choose a year with recorded games.” The previous selection remains active. | Below the year controls |
| No games exist | Year controls are disabled; the filter remains **All**. | Top of Stats |

The filter starts at **All**. Previous/next cycle through years with completed games and wrap between **All** and the earliest/latest available year.

## Options tab

| When | Feedback | Where |
| --- | --- | --- |
| No action/status is active | “Ready. Choose a parameter or score action.” | Bottom status panel |
| Add a contest | “Add player names and press Add.” | Bottom status panel |
| Add invalid player names | “Enter exactly two player names on separate lines (or separated by |).” | Bottom status panel |
| Add valid player names | “Contest selected: {player 1} vs {player 2}.” | Bottom status panel |
| Request Options help | “Create a new contest by selecting New... from Players. Or import data from clipboard. Export data to see format. Erase to clear contest and player names.” | Bottom status panel |
| Change max score | “Max score updated.” | Bottom status panel |
| Turn cloud backup off | “Cloud backup is off for this contest. The verified URL is saved.” | Bottom status panel |
| Turn cloud backup on when already configured | “Cloud backup is already enabled for this contest.” | Bottom status panel |
| Choose cloud backup without a contest | “Select or create a contest before choosing backup mode.” | Bottom status panel |
| Enter or edit a backup URL | “Enter URL for cloud backup and press Set.” | Bottom status panel |
| Submit an invalid backup URL | “Enter a valid Apps Script /exec URL in Data.” | Bottom status panel |
| Change contests while verifying a URL | “Contest changed. Select Cloud for the intended contest and try again.” | Bottom status panel |
| Verify a backup URL | “Checking backup URL...” followed by a verification result or error. | Bottom status panel |
| URL verification succeeds | “Connection verified for {URL}. Confirm to save it [as the new URL / and enable Cloud backup].” | Bottom status panel, with URL confirmation buttons |
| URL verification fails | “Backup URL check failed: {error}.” | Bottom status panel |
| Confirm URL after the contest changed | “Contest changed. No backup settings were changed.” | Bottom status panel |
| Confirm a valid URL | “Cloud backup enabled for this contest: {URL}.” | Bottom status panel |
| Cancel URL confirmation | “Backup URL change canceled. Previous settings are unchanged.” | Bottom status panel |
| Double-click the status panel | Shows “App {version}” and the backup script version, when available. | Bottom status panel |
| Change appearance | “Dark mode on.” or “Using system appearance.” | Bottom status panel |
| Begin import | “Paste scores into Data and press Import again to add scores.” If cloud sync recently added records, prefixes this with “Found {count} new scores from server.” | Bottom status panel |
| Import with empty Data | “Paste score data into Data before importing.” | Bottom status panel |
| Import with an invalid CSV header | “Invalid CSV header: expected date,Player 1,Player 2” | Bottom status panel |
| Import with an invalid legacy header | “Invalid first line: use "date,Player 1,Player 2" or the legacy "Player 1 \| Player 2" format” | Bottom status panel |
| Import with no valid game rows | “No valid games found — expected date,score1,score2 rows” | Bottom status panel |
| Import parsing fails | “Could not parse data — check the format and try again.” | Bottom status panel |
| Import completes | “Added {added} of {submitted} scores to {player 1} vs {player 2}.” May also report existing local timestamp conflicts and invalid rows ignored. | Bottom status panel |
| A score import is canceled because scores were cleared | “Import canceled because contest scores were cleared.” | Bottom status panel |
| Scores are cleared while cloud sync is running | “Scores were cleared before cloud sync completed.” | Bottom status panel |
| Import saves locally but cloud sync fails | “Scores added locally, but cloud sync failed.” | Bottom status panel |
| Scores are cleared before import completes | “Scores were cleared before import completed.” | Bottom status panel |
| Export scores | “{count} scores in Data, copy and paste to save” | Bottom status panel |
| Confirm erasing scores | “Clear all scores for {player 1} vs {player 2} from this device [and the server]?” with Cancel and Confirm erase buttons. | Bottom status panel |
| Cloud erase fails | “Could not clear cloud scores: {error}.” | Bottom status panel |
| Erase succeeds | “Contest scores cleared.” or “Local contest scores cleared.” | Bottom status panel |
| Cloud upload fails | “Cloud upload failed: {error}.” | Bottom status panel |
| Cloud sync completes | “Cloud sync complete ({URL}): {imported} imported, {uploaded} uploaded.” | Bottom status panel |
| Cloud sync fails | “Cloud sync failed: {error}.” | Bottom status panel |

Status messages appear in the active tab's status area: on Score, in its status bar; on Options, in the bottom status panel. Stats has no general status bar, so general status messages may not be visible while it is active; the year-validation message is shown inline. Messages generally clear when acknowledged or after their configured timeout. The Options status panel also contains the active erase or URL confirmation when one is pending.
