# Race time keeper

An app to keep track of times for a variety of races.

## Current development plans

- Hold race records for each racer who can:
- Access there data with just there `racerID` (no need for a password)
  - Add times to there record with a length and time
  - Get all of there times
  - Get a list of all racer times
- Hold a variaty of lengths of races
- Hold multiple races for each user and length
- Be accesed with basic requests (JSON response)

## Running the code

The program can currently be ran with: `docker-compose -f docker-compose.dev.yml up --build` and tested with: `docker build -t race-time-keeper --target test .`

## Credits

Made by [Callum Gilchrist](https://github.com/CallumGilly/)
