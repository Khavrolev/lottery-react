# Keno Lottery test task

## TASKS:

1. Create a new project.
2. Create a grid up to 80 numbers.
3. The user should be able to select 5 numbers.
4. Add a stake input field and a place bet button.
5. When pressing the place bet, it should be validating the number of selections and the stake, if it’s valid display a success message to the user and clear out the selections.
6. Add stake buttons next to the stake input with the most popular stakes to improve the UX.
7. Add a Lucky Pick button with the functionality to select 5 random numbers.

## Extra Points:

8. Use a state management library.
9. Use typescript.

## How to run

```bash
npm install

npm run start
```

## Info

There is src/utils/constants.js, where you can change some parameters before starting game:

- BOARD_SIZE: total number of cells and number of cells in one row.
- POPULAR_STAKES: popular stakes.
- NUMBER_CELLS_IN_BET: valid number of selections.

- You can use [GitHub Pages](https://khavrolev.github.io/lottery-react/).
