/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  ID: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  Film: {
    __typename: { __type: "String!" },
    characterConnection: {
      __type: "FilmCharactersConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    created: { __type: "String" },
    director: { __type: "String" },
    edited: { __type: "String" },
    episodeID: { __type: "Int" },
    id: { __type: "ID!" },
    openingCrawl: { __type: "String" },
    planetConnection: {
      __type: "FilmPlanetsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    producers: { __type: "[String]" },
    releaseDate: { __type: "String" },
    speciesConnection: {
      __type: "FilmSpeciesConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    starshipConnection: {
      __type: "FilmStarshipsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    title: { __type: "String" },
    vehicleConnection: {
      __type: "FilmVehiclesConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
  },
  FilmCharactersConnection: {
    __typename: { __type: "String!" },
    characters: { __type: "[Person]" },
    edges: { __type: "[FilmCharactersEdge]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  FilmCharactersEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  FilmPlanetsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FilmPlanetsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    planets: { __type: "[Planet]" },
    totalCount: { __type: "Int" },
  },
  FilmPlanetsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Planet" },
  },
  FilmSpeciesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FilmSpeciesEdge]" },
    pageInfo: { __type: "PageInfo!" },
    species: { __type: "[Species]" },
    totalCount: { __type: "Int" },
  },
  FilmSpeciesEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Species" },
  },
  FilmStarshipsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FilmStarshipsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    starships: { __type: "[Starship]" },
    totalCount: { __type: "Int" },
  },
  FilmStarshipsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Starship" },
  },
  FilmVehiclesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FilmVehiclesEdge]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  FilmVehiclesEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Vehicle" },
  },
  FilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[FilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  FilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  Node: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    $on: { __type: "$Node!" },
  },
  PageInfo: {
    __typename: { __type: "String!" },
    endCursor: { __type: "String" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    startCursor: { __type: "String" },
  },
  PeopleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PeopleEdge]" },
    pageInfo: { __type: "PageInfo!" },
    people: { __type: "[Person]" },
    totalCount: { __type: "Int" },
  },
  PeopleEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  Person: {
    __typename: { __type: "String!" },
    birthYear: { __type: "String" },
    created: { __type: "String" },
    edited: { __type: "String" },
    eyeColor: { __type: "String" },
    filmConnection: {
      __type: "PersonFilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    gender: { __type: "String" },
    hairColor: { __type: "String" },
    height: { __type: "Int" },
    homeworld: { __type: "Planet" },
    id: { __type: "ID!" },
    mass: { __type: "Float" },
    name: { __type: "String" },
    skinColor: { __type: "String" },
    species: { __type: "Species" },
    starshipConnection: {
      __type: "PersonStarshipsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    vehicleConnection: {
      __type: "PersonVehiclesConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
  },
  PersonFilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PersonFilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  PersonFilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  PersonStarshipsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PersonStarshipsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    starships: { __type: "[Starship]" },
    totalCount: { __type: "Int" },
  },
  PersonStarshipsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Starship" },
  },
  PersonVehiclesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PersonVehiclesEdge]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  PersonVehiclesEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Vehicle" },
  },
  Planet: {
    __typename: { __type: "String!" },
    climates: { __type: "[String]" },
    created: { __type: "String" },
    diameter: { __type: "Int" },
    edited: { __type: "String" },
    filmConnection: {
      __type: "PlanetFilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    gravity: { __type: "String" },
    id: { __type: "ID!" },
    name: { __type: "String" },
    orbitalPeriod: { __type: "Int" },
    population: { __type: "Float" },
    residentConnection: {
      __type: "PlanetResidentsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    rotationPeriod: { __type: "Int" },
    surfaceWater: { __type: "Float" },
    terrains: { __type: "[String]" },
  },
  PlanetFilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PlanetFilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  PlanetFilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  PlanetResidentsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PlanetResidentsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    residents: { __type: "[Person]" },
    totalCount: { __type: "Int" },
  },
  PlanetResidentsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  PlanetsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[PlanetsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    planets: { __type: "[Planet]" },
    totalCount: { __type: "Int" },
  },
  PlanetsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Planet" },
  },
  Species: {
    __typename: { __type: "String!" },
    averageHeight: { __type: "Float" },
    averageLifespan: { __type: "Int" },
    classification: { __type: "String" },
    created: { __type: "String" },
    designation: { __type: "String" },
    edited: { __type: "String" },
    eyeColors: { __type: "[String]" },
    filmConnection: {
      __type: "SpeciesFilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    hairColors: { __type: "[String]" },
    homeworld: { __type: "Planet" },
    id: { __type: "ID!" },
    language: { __type: "String" },
    name: { __type: "String" },
    personConnection: {
      __type: "SpeciesPeopleConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    skinColors: { __type: "[String]" },
  },
  SpeciesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[SpeciesEdge]" },
    pageInfo: { __type: "PageInfo!" },
    species: { __type: "[Species]" },
    totalCount: { __type: "Int" },
  },
  SpeciesEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Species" },
  },
  SpeciesFilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[SpeciesFilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  SpeciesFilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  SpeciesPeopleConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[SpeciesPeopleEdge]" },
    pageInfo: { __type: "PageInfo!" },
    people: { __type: "[Person]" },
    totalCount: { __type: "Int" },
  },
  SpeciesPeopleEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  Starship: {
    __typename: { __type: "String!" },
    MGLT: { __type: "Int" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    costInCredits: { __type: "Float" },
    created: { __type: "String" },
    crew: { __type: "String" },
    edited: { __type: "String" },
    filmConnection: {
      __type: "StarshipFilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    hyperdriveRating: { __type: "Float" },
    id: { __type: "ID!" },
    length: { __type: "Float" },
    manufacturers: { __type: "[String]" },
    maxAtmospheringSpeed: { __type: "Int" },
    model: { __type: "String" },
    name: { __type: "String" },
    passengers: { __type: "String" },
    pilotConnection: {
      __type: "StarshipPilotsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    starshipClass: { __type: "String" },
  },
  StarshipFilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[StarshipFilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  StarshipFilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  StarshipPilotsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[StarshipPilotsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    pilots: { __type: "[Person]" },
    totalCount: { __type: "Int" },
  },
  StarshipPilotsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  StarshipsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[StarshipsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    starships: { __type: "[Starship]" },
    totalCount: { __type: "Int" },
  },
  StarshipsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Starship" },
  },
  Vehicle: {
    __typename: { __type: "String!" },
    cargoCapacity: { __type: "Float" },
    consumables: { __type: "String" },
    costInCredits: { __type: "Float" },
    created: { __type: "String" },
    crew: { __type: "String" },
    edited: { __type: "String" },
    filmConnection: {
      __type: "VehicleFilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    id: { __type: "ID!" },
    length: { __type: "Float" },
    manufacturers: { __type: "[String]" },
    maxAtmospheringSpeed: { __type: "Int" },
    model: { __type: "String" },
    name: { __type: "String" },
    passengers: { __type: "String" },
    pilotConnection: {
      __type: "VehiclePilotsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    vehicleClass: { __type: "String" },
  },
  VehicleFilmsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[VehicleFilmsEdge]" },
    films: { __type: "[Film]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
  },
  VehicleFilmsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Film" },
  },
  VehiclePilotsConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[VehiclePilotsEdge]" },
    pageInfo: { __type: "PageInfo!" },
    pilots: { __type: "[Person]" },
    totalCount: { __type: "Int" },
  },
  VehiclePilotsEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Person" },
  },
  VehiclesConnection: {
    __typename: { __type: "String!" },
    edges: { __type: "[VehiclesEdge]" },
    pageInfo: { __type: "PageInfo!" },
    totalCount: { __type: "Int" },
    vehicles: { __type: "[Vehicle]" },
  },
  VehiclesEdge: {
    __typename: { __type: "String!" },
    cursor: { __type: "String!" },
    node: { __type: "Vehicle" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    allFilms: {
      __type: "FilmsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    allPeople: {
      __type: "PeopleConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    allPlanets: {
      __type: "PlanetsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    allSpecies: {
      __type: "SpeciesConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    allStarships: {
      __type: "StarshipsConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    allVehicles: {
      __type: "VehiclesConnection",
      __args: { after: "String", before: "String", first: "Int", last: "Int" },
    },
    film: { __type: "Film", __args: { filmID: "ID", id: "ID" } },
    node: { __type: "Node", __args: { id: "ID!" } },
    person: { __type: "Person", __args: { id: "ID", personID: "ID" } },
    planet: { __type: "Planet", __args: { id: "ID", planetID: "ID" } },
    species: { __type: "Species", __args: { id: "ID", speciesID: "ID" } },
    starship: { __type: "Starship", __args: { id: "ID", starshipID: "ID" } },
    vehicle: { __type: "Vehicle", __args: { id: "ID", vehicleID: "ID" } },
  },
  subscription: {},
  [SchemaUnionsKey]: {
    Node: ["Film", "Person", "Planet", "Species", "Starship", "Vehicle"],
  },
} as const;

/**
 * A single film.
 */
export interface Film {
  __typename?: "Film";
  characterConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmCharactersConnection>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of the director of this film.
   */
  director?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The episode number of this film.
   */
  episodeID?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl?: Maybe<ScalarsEnums["String"]>;
  planetConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmPlanetsConnection>;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate?: Maybe<ScalarsEnums["String"]>;
  speciesConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmSpeciesConnection>;
  starshipConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmStarshipsConnection>;
  /**
   * The title of this film.
   */
  title?: Maybe<ScalarsEnums["String"]>;
  vehicleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmVehiclesConnection>;
}

/**
 * A connection to a list of items.
 */
export interface FilmCharactersConnection {
  __typename?: "FilmCharactersConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface FilmCharactersEdge {
  __typename?: "FilmCharactersEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * A connection to a list of items.
 */
export interface FilmPlanetsConnection {
  __typename?: "FilmPlanetsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface FilmPlanetsEdge {
  __typename?: "FilmPlanetsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
}

/**
 * A connection to a list of items.
 */
export interface FilmSpeciesConnection {
  __typename?: "FilmSpeciesConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface FilmSpeciesEdge {
  __typename?: "FilmSpeciesEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
}

/**
 * A connection to a list of items.
 */
export interface FilmStarshipsConnection {
  __typename?: "FilmStarshipsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface FilmStarshipsEdge {
  __typename?: "FilmStarshipsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
}

/**
 * A connection to a list of items.
 */
export interface FilmVehiclesConnection {
  __typename?: "FilmVehiclesConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface FilmVehiclesEdge {
  __typename?: "FilmVehiclesEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
}

/**
 * A connection to a list of items.
 */
export interface FilmsConnection {
  __typename?: "FilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface FilmsEdge {
  __typename?: "FilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * An object with an ID
 */
export interface Node {
  __typename?:
    | "Film"
    | "Person"
    | "Planet"
    | "Species"
    | "Starship"
    | "Vehicle";
  /**
   * The id of the object.
   */
  id: ScalarsEnums["ID"];
  $on: $Node;
}

/**
 * Information about pagination in a connection.
 */
export interface PageInfo {
  __typename?: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor?: Maybe<ScalarsEnums["String"]>;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: ScalarsEnums["Boolean"];
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A connection to a list of items.
 */
export interface PeopleConnection {
  __typename?: "PeopleConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PeopleEdge {
  __typename?: "PeopleEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * An individual person or character within the Star Wars universe.
 */
export interface Person {
  __typename?: "Person";
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<ScalarsEnums["String"]>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonFilmsConnection>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<ScalarsEnums["String"]>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<ScalarsEnums["String"]>;
  /**
   * The height of the person in centimeters.
   */
  height?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld?: Maybe<Planet>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The mass of the person in kilograms.
   */
  mass?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The name of this person.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The skin color of this person.
   */
  skinColor?: Maybe<ScalarsEnums["String"]>;
  /**
   * The species that this person belongs to, or null if unknown.
   */
  species?: Maybe<Species>;
  starshipConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonStarshipsConnection>;
  vehicleConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PersonVehiclesConnection>;
}

/**
 * A connection to a list of items.
 */
export interface PersonFilmsConnection {
  __typename?: "PersonFilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PersonFilmsEdge {
  __typename?: "PersonFilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * A connection to a list of items.
 */
export interface PersonStarshipsConnection {
  __typename?: "PersonStarshipsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PersonStarshipsEdge {
  __typename?: "PersonStarshipsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
}

/**
 * A connection to a list of items.
 */
export interface PersonVehiclesConnection {
  __typename?: "PersonVehiclesConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface PersonVehiclesEdge {
  __typename?: "PersonVehiclesEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
}

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export interface Planet {
  __typename?: "Planet";
  /**
   * The climates of this planet.
   */
  climates?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The diameter of this planet in kilometers.
   */
  diameter?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetFilmsConnection>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The name of this planet.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population?: Maybe<ScalarsEnums["Float"]>;
  residentConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetResidentsConnection>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The terrains of this planet.
   */
  terrains?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
}

/**
 * A connection to a list of items.
 */
export interface PlanetFilmsConnection {
  __typename?: "PlanetFilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PlanetFilmsEdge {
  __typename?: "PlanetFilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * A connection to a list of items.
 */
export interface PlanetResidentsConnection {
  __typename?: "PlanetResidentsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PlanetResidentsEdge {
  __typename?: "PlanetResidentsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * A connection to a list of items.
 */
export interface PlanetsConnection {
  __typename?: "PlanetsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface PlanetsEdge {
  __typename?: "PlanetsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Planet>;
}

/**
 * A type of person or character within the Star Wars Universe.
 */
export interface Species {
  __typename?: "Species";
  /**
   * The average height of this species in centimeters.
   */
  averageHeight?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The average lifespan of this species in years, null if unknown.
   */
  averageLifespan?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The designation of this species, such as "sentient".
   */
  designation?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesFilmsConnection>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * A planet that this species originates from.
   */
  homeworld?: Maybe<Planet>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The language commonly spoken by this species.
   */
  language?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of this species.
   */
  name?: Maybe<ScalarsEnums["String"]>;
  personConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesPeopleConnection>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
}

/**
 * A connection to a list of items.
 */
export interface SpeciesConnection {
  __typename?: "SpeciesConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesEdge {
  __typename?: "SpeciesEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Species>;
}

/**
 * A connection to a list of items.
 */
export interface SpeciesFilmsConnection {
  __typename?: "SpeciesFilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesFilmsEdge {
  __typename?: "SpeciesFilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * A connection to a list of items.
 */
export interface SpeciesPeopleConnection {
  __typename?: "SpeciesPeopleConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface SpeciesPeopleEdge {
  __typename?: "SpeciesPeopleEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * A single transport craft that has hyperdrive capability.
 */
export interface Starship {
  __typename?: "Starship";
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<ScalarsEnums["String"]>;
  /**
   * The cost of this starship new, in galactic credits.
   */
  costInCredits?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipFilmsConnection>;
  /**
   * The class of this starships hyperdrive.
   */
  hyperdriveRating?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The length of this starship in meters.
   */
  length?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The manufacturers of this starship.
   */
  manufacturers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers?: Maybe<ScalarsEnums["String"]>;
  pilotConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipPilotsConnection>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A connection to a list of items.
 */
export interface StarshipFilmsConnection {
  __typename?: "StarshipFilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface StarshipFilmsEdge {
  __typename?: "StarshipFilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * A connection to a list of items.
 */
export interface StarshipPilotsConnection {
  __typename?: "StarshipPilotsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface StarshipPilotsEdge {
  __typename?: "StarshipPilotsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * A connection to a list of items.
 */
export interface StarshipsConnection {
  __typename?: "StarshipsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface StarshipsEdge {
  __typename?: "StarshipsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Starship>;
}

/**
 * A single transport craft that does not have hyperdrive capability
 */
export interface Vehicle {
  __typename?: "Vehicle";
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargoCapacity?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<ScalarsEnums["String"]>;
  /**
   * The cost of this vehicle new, in Galactic Credits.
   */
  costInCredits?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew?: Maybe<ScalarsEnums["String"]>;
  /**
   * The ISO 8601 date format of the time that this resource was edited.
   */
  edited?: Maybe<ScalarsEnums["String"]>;
  filmConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehicleFilmsConnection>;
  /**
   * The ID of an object
   */
  id: ScalarsEnums["ID"];
  /**
   * The length of this vehicle in meters.
   */
  length?: Maybe<ScalarsEnums["Float"]>;
  /**
   * The manufacturers of this vehicle.
   */
  manufacturers?: Maybe<Array<Maybe<ScalarsEnums["String"]>>>;
  /**
   * The maximum speed of this vehicle in atmosphere.
   */
  maxAtmospheringSpeed?: Maybe<ScalarsEnums["Int"]>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<ScalarsEnums["String"]>;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers?: Maybe<ScalarsEnums["String"]>;
  pilotConnection: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehiclePilotsConnection>;
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
   */
  vehicleClass?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A connection to a list of items.
 */
export interface VehicleFilmsConnection {
  __typename?: "VehicleFilmsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface VehicleFilmsEdge {
  __typename?: "VehicleFilmsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Film>;
}

/**
 * A connection to a list of items.
 */
export interface VehiclePilotsConnection {
  __typename?: "VehiclePilotsConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * An edge in a connection.
 */
export interface VehiclePilotsEdge {
  __typename?: "VehiclePilotsEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Person>;
}

/**
 * A connection to a list of items.
 */
export interface VehiclesConnection {
  __typename?: "VehiclesConnection";
  /**
   * A list of edges.
   */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /**
   * Information to aid in pagination.
   */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<ScalarsEnums["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
}

/**
 * An edge in a connection.
 */
export interface VehiclesEdge {
  __typename?: "VehiclesEdge";
  /**
   * A cursor for use in pagination
   */
  cursor: ScalarsEnums["String"];
  /**
   * The item at the end of the edge
   */
  node?: Maybe<Vehicle>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  allFilms: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<FilmsConnection>;
  allPeople: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PeopleConnection>;
  allPlanets: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<PlanetsConnection>;
  allSpecies: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<SpeciesConnection>;
  allStarships: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<StarshipsConnection>;
  allVehicles: (args?: {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
  }) => Maybe<VehiclesConnection>;
  film: (args?: {
    filmID?: Maybe<Scalars["ID"]>;
    id?: Maybe<Scalars["ID"]>;
  }) => Maybe<Film>;
  node: (args: { id: Scalars["ID"] }) => Maybe<Node>;
  person: (args?: {
    id?: Maybe<Scalars["ID"]>;
    personID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Person>;
  planet: (args?: {
    id?: Maybe<Scalars["ID"]>;
    planetID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Planet>;
  species: (args?: {
    id?: Maybe<Scalars["ID"]>;
    speciesID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Species>;
  starship: (args?: {
    id?: Maybe<Scalars["ID"]>;
    starshipID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Starship>;
  vehicle: (args?: {
    id?: Maybe<Scalars["ID"]>;
    vehicleID?: Maybe<Scalars["ID"]>;
  }) => Maybe<Vehicle>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface $Node {
  Film?: Film;
  Person?: Person;
  Planet?: Planet;
  Species?: Species;
  Starship?: Starship;
  Vehicle?: Vehicle;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
