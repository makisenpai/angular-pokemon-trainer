export interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export interface PokemonResponse {
    count: number;
    next: string;
    prev: string;
    results: Pokemon[];
}
