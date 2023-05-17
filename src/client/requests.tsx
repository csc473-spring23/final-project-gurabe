const key="9bfb78557ee79b8248e4ed092880d4c2";


const requests:{[key: string]: string;}={
   requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=4`,
   requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
   requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
   requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
//    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=2&include_adult=false`
};

export default requests;