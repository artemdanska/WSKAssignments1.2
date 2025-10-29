const movies = [];

function sortArray(array, order) {
  if (order === 'asc') {
    return array.sort((a, b) => a.rating - b.rating);
  } else if (order === 'desc') {
    return array.sort((a, b) => b.rating - a.rating);
  }
}

const movieAmount = Number(prompt('How many movies do you want to rate?'));
for (let i = 1; i < movieAmount + 1; i++) {
  let userTitle = prompt('What is the title of the movie ' + i + '?');
  let userRating = null;
  while (userRating === null || isNaN(userRating)) {
    const input = prompt('What is your rating (10-0) for ' + userTitle + '?');
    userRating = Number(input);
    if (isNaN(userRating) || userRating < 0 || userRating > 10) {
      alert('Please enter a valid number for the rating!');
    }
  }
  movies.push({title: userTitle, rating: userRating});
}

sortArray(movies, 'desc');
const bestMovie = movies[0];
console.log(
  'Your highest rated movie is: ' +
    bestMovie.title +
    ' with a rating of ' +
    bestMovie.rating
);
document.getElementById('output').innerHTML +=
  'Your highest rated movie is: ' +
  bestMovie.title +
  ' with a rating of ' +
  bestMovie.rating +
  '<br>';

console.log('Movies sorted by rating: ', movies);
document.getElementById('output').innerHTML += 'Movies sorted by rating: <br>';
movies.forEach((movie) => {
  document.getElementById('output').innerHTML +=
    movie.title + ' - ' + movie.rating + '<br>';
});
