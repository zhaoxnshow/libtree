export declare class InitData {
    static libData: {
        "Type": number;
        "Title": string;
        "isTreeOpen": boolean;
        "Uri": string;
        "Theme": string;
        "IconOpen": string;
        "IconClose": string;
        "BgColor": string;
        "FontColor": string;
        "ChildRecords": {
            "Title": string;
            "Type": number;
            "isTreeOpen": boolean;
            "Uri": string;
            "Theme": string;
            "IconOpen": string;
            "IconClose": string;
            "BgColor": string;
            "FontColor": string;
            "ChildRecords": {
                "Type": number;
                "Title": string;
                "isTreeOpen": boolean;
                "Uri": string;
                "Theme": string;
                "IconOpen": string;
                "IconClose": string;
                "BgColor": string;
                "FontColor": string;
            }[];
        }[];
    }[];
    constructor(argument: any);
}
