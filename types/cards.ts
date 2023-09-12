export interface Cards {
    status: number;
    data:   Card[];
}

export interface Card {
    uuid:               string;
    displayName:        string;
    isHiddenIfNotOwned: boolean;
    themeUuid:          null | string;
    displayIcon:        string;
    smallArt:           string;
    wideArt:            string;
    largeArt:           string;
    assetPath:          string;
}