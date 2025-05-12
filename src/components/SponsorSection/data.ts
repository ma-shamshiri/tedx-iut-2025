import {
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor_logo,
} from "../../assets";

export interface Sponsor {
    id: number;
    name: string;
    logo: string;
    description: string;
    tier?: string;
}

export const sponsors: Sponsor[] = [
    {
        id: 1,
        name: "sponsor1Name",
        logo: sponsor1,
        description: "sponsor1Description",
        tier: "حامی ویژه",
    },
    {
        id: 2,
        name: "sponsor2Name",
        logo: sponsor2,
        description: "",
        tier: "",
    },
    {
        id: 3,
        name: "sponsor3Name",
        logo: sponsor3,
        description: "sponsor3Description",
        tier: "",
    },
    {
        id: 4,
        name: "sponsor4Name",
        logo: sponsor4,
        description: "",
        tier: "",
    },
    {
        id: 5,
        name: "sponsor5Name",
        logo: sponsor5,
        description: "",
        tier: "",
    },
    {
        id: 6,
        name: "",
        logo: sponsor_logo,
        description: "",
        tier: "",
    },
];
