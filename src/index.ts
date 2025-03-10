// imports prompt-sync for usage
import promptSync from 'prompt-sync';

// creating an instance of promptSync
const prompt = promptSync();

// function that calls an api with a request and awaits results
async function searchMovie(query: string) {
  const api_key = '22336e436133639a755aa57cabbbabe4';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Boolean to keep the while loop going
let search: boolean = true;

// async main function
async function main() {
  while (search) {
    // prompts the user for a movie to request
    let userSearch: string = prompt('What movie do you want to review? ');

    // if statement to check if prompt is null
    if (userSearch !== null) {
      let notNull: string = userSearch;

      // await call to api for response
      let movies = await searchMovie(notNull);

      // results printed onto console
      console.log(movies);
    }

    // ask user if they would like to keep searching
    let keepSearching: string | null = prompt(
      'Would you like to search again? Y/N '
    );

    // changes boolean based on user response to continue or quit
    if (keepSearching == 'n') search = false;
    else if (keepSearching == 'y') search = true;
  }
}

// main function run
main();
