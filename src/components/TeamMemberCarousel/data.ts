// data.ts

import {
    ali_karimi,
    ali_mehrjoo,
    alireza_movahed,
    amin_shamshiri,
    amirmahyar_teimouri,
    aref_shams,
    erfaneh_hosseini,
    erfan_morshedzadeh,
    farzaneh_maghsoudi,
    fatemeh_nasr,
    hanane_ghasemi,
    houra_bayaz,
    mohadese,
    mohammadmahdi_salimi,
    nadia_nadi,
    pirouz_malmali_tarazi,
    ramtin,
    roya_mazrouee,
    saeed_ranjbar_bafghi,
    sara_chatraee,
    sepehr_javan,
    shakila_yavari,
    amin,
    mahsa_norouzi,
    arghavan_mahdikhani,
    amir,
    sajede_akaaf,
} from "../../assets";

export interface TeamMember {
    id: number;
    name?: string;
    title?: string;
    image?: string;
    profileHref?: string;
    linkedinAddress?: string;
    emailAddress?: string;
    twitterAddress?: string;
}

export const teamMembersData: TeamMember[] = [
    {
        id: 1,
        name: "sepehrJavan",
        title: "organizer",
        image: sepehr_javan,
        // profileHref: "sepehr-javan",
        // linkedinAddress: "http://linkedin.com/in/vedant-gadhavi",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 2,
        name: "saeedRanjbarBafghi",
        title: "mediaTeamLead",
        image: saeed_ranjbar_bafghi,
        // profileHref: "saeed-ranjbar-bafghi",
        // linkedinAddress: "http://linkedin.com/in/adityathakkar032",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 3,
        name: "pirouzMalmaliTarazi",
        title: "mediaCoordinator",
        image: pirouz_malmali_tarazi,
        // profileHref: "pirouz-malmali-tarazi",
        // linkedinAddress: "https://linkedin.com/in/mahimurrahman-khan",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 4,
        name: "erfanMorshedzadeh",
        title: "mediaCoordinator",
        image: erfan_morshedzadeh,
        // profileHref: "erfan-morshedzadeh",
        // linkedinAddress: "https://linkedin.com/in/divyanshu-jaggi",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 5,
        name: "hananeGhasemi",
        title: "mediaCoordinator",
        image: hanane_ghasemi,
        // profileHref: "hanane-ghasemi",
        // linkedinAddress: "https://www.linkedin.com/in/moksh-sood-3515b3171/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 6,
        name: "alirezaMovahed",
        title: "mediaCoordinator",
        image: alireza_movahed,
        // profileHref: "alireza-movahed",
        // linkedinAddress: "https://www.linkedin.com/in/param-patel1",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 7,
        name: "mohadese",
        title: "mediaCoordinator",
        image: mohadese,
        // profileHref: "mohadese",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 8,
        name: "mohammadmahdiSalimi",
        title: "mediaCoordinator",
        image: mohammadmahdi_salimi,
        // profileHref: "mohammadmahdi-salimi",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 9,
        name: "ramtin",
        title: "mediaCoordinator",
        image: ramtin,
        // profileHref: "ramtin",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 10,
        name: "mahsaNorouzi",
        title: "mediaCoordinator",
        image: mahsa_norouzi,
        // profileHref: "ramtin",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 11,
        name: "farzanehMaghsoudi",
        title: "speakerCurator",
        image: farzaneh_maghsoudi,
        // profileHref: "farzaneh-maghsoudi",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 12,
        name: "nadiaNadi",
        title: "speakerCurator",
        image: nadia_nadi,
        // profileHref: "nadia-nadi",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 13,
        name: "shakilaYavari",
        title: "speakerCurator",
        image: shakila_yavari,
        // profileHref: "shakila-yavari",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 14,
        name: "amirmahyarTeimouri",
        title: "speakerCurator",
        image: amirmahyar_teimouri,
        // profileHref: "amirmahyar-teimouri",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 15,
        name: "arefShams",
        title: "speakerCurator",
        image: aref_shams,
        // profileHref: "aref-shams",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 16,
        name: "hourabayaz",
        title: "speakerCurator",
        image: houra_bayaz,
        // profileHref: "houra-bayaz",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 17,
        name: "sajedehEtekaf",
        title: "speakerCurator",
        image: sajede_akaaf,
        // profileHref: "houra-bayaz",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 18,
        name: "aliKarimi",
        title: "communicationsCoordinator",
        image: ali_karimi,
        // profileHref: "ali-karimi",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 19,
        name: "royaMazrouee",
        title: "communicationsCoordinator",
        image: roya_mazrouee,
        // profileHref: "roya-mazrouee",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 20,
        name: "saraChatraee",
        title: "communicationsCoordinator",
        image: sara_chatraee,
        // profileHref: "sara-chatraee",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 21,
        name: "fatemehNasr",
        title: "communicationsCoordinator",
        image: fatemeh_nasr,
        // profileHref: "fatemeh-nasr",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 22,
        name: "aminShamshiri",
        title: "websiteDesigner",
        image: amin,
        // profileHref: "amin-shamshiri",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 23,
        name: "amir",
        title: "sponsorshipTeamLead",
        image: amir,
        // profileHref: "ali-mehrjoo",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 24,
        name: "aliMehrjoo",
        title: "sponsorshipCoordinator",
        image: ali_mehrjoo,
        // profileHref: "ali-mehrjoo",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 25,
        name: "arghavanMahdikhani",
        title: "communicationsCoordinator",
        image: arghavan_mahdikhani,
        // profileHref: "fatemeh-nasr",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },
    {
        id: 26,
        name: "erfanehHosseini",
        title: "communicationsCoordinator",
        image: erfaneh_hosseini,
        // profileHref: "erfaneh-hosseini",
        // linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        // emailAddress: "",
        // twitterAddress: "",
    },

    // Add more speakers as needed
];
