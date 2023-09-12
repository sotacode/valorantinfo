export interface Maps {
    status: number;
    data:   Map[];
}

export interface Map {
    uuid:                 string;
    displayName:          string;
    narrativeDescription: null | string;
    tacticalDescription:  TacticalDescription | null;
    coordinates:          null | string;
    displayIcon:          null | string;
    listViewIcon:         string;
    splash:               string;
    assetPath:            string;
    mapUrl:               string;
    xMultiplier:          number;
    yMultiplier:          number;
    xScalarToAdd:         number;
    yScalarToAdd:         number;
    callouts:             Callout[] | null;
}

export interface Callout {
    regionName:      string;
    superRegionName: SuperRegionName;
    location:        Location;
}

export interface Location {
    x: number;
    y: number;
}

export enum SuperRegionName {
    A = "A",
    B = "B",
    C = "C",
    DelLadoAtacante = "del lado atacante",
    DelLadoDefensor = "del lado defensor",
    Mid = "Mid",
}

export enum TacticalDescription {
    ABCSites = "A/B/C Sites",
    ABSites = "A/B Sites",
}
