// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
  //add "{id}.png" at the end of imageUrl
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    pokeApiUrl: "https://pokeapi.co/api/v2/pokemon/",
    userApiUrl: "https://tien-assignment-apis.herokuapp.com/trainers/",
    apiKey: "t3wKgL0uNyz4kXRBOe7ggWmyrf50UKRUM4QSspTYFHZL20gAFIiEu16oFfIIdNvu"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
