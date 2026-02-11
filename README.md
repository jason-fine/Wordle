# Wordle

Wordle Clone using JavaScript and HTML.

<img width="857" alt="Screen Shot 2022-05-07 at 6 01 54 AM" src="https://user-images.githubusercontent.com/74693076/167249490-bbc7c04b-b455-42a9-940f-56f2a3e7024b.png">

## How to Run the Game

1. Start a local web server in the project directory:

   ```bash
   # Using Python 3 (recommended)
   python3 -m http.server 8000
   
   # Alternative using Python 2
   python -m SimpleHTTPServer 8000
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

3. The game should now be running in your browser!

## How to Play

1. The goal is to guess a 5-letter word in 8 or fewer attempts.
2. Type your 5-letter guess in the input field and click "Submit".
3. After each guess, the colors will change to give you clues:
   - Green: The letter is in the correct position
   - Red: The letter is in the word but in the wrong position
   - Gray: The letter is not in the word
4. Use these clues to make better guesses and solve the word!
5. When the game ends (win or lose), you'll be asked if you want to play again.

## Stopping the Server

To stop the server when you're done playing, go to the terminal where it's running and press `Ctrl+C`.

Alternatively, you can use this command to find and kill the process:
```bash
kill $(lsof -ti:8000)
```
