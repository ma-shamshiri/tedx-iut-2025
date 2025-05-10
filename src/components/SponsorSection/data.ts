import { sponsor1, sponsor2, sponsor_logo } from "../../assets";

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
        name: "",
        logo: sponsor_logo,
        description: "",
        tier: "",
    },
    {
        id: 4,
        name: "",
        logo: sponsor_logo,
        description: "",
        tier: "",
    },
    {
        id: 5,
        name: "",
        logo: sponsor_logo,
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
