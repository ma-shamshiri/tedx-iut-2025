// data.ts

import {
    aditya_thakkar_NoBG,
    aminNewNoBG,
    anthony_andreoli_NoBG,
    antonia_macris_NoBG,
    divyanshu_jaggi_NoBG,
    doneyli_de_jesus_NoBG,
    geoffrey_reid2_NoBG,
    mahim_rahman_NoBG,
    moksh_sood_NoBG,
    param_patel_NoBG,
    rashida_geddes_NoBG,
    vedant_gadhvi_NoBG,
    ysimer_gonzalez_NoBG
} from "../../assets";

export interface TeamMember {
    id: number;
    name: string;
    title: string;
    image: string;
    profileHref: string;
    linkedinAddress: string;
    emailAddress: string;
    twitterAddress: string;
}

export const teamMembersData: TeamMember[] = [
    {
        id: 1,
        name: "Vedant Gadhavi",
        title: "Organizer",
        image: vedant_gadhvi_NoBG,
        profileHref: "vedant-gadhavi",
        linkedinAddress: "http://linkedin.com/in/vedant-gadhavi",
        emailAddress: "",
        twitterAddress: "",
    },
    // {
    //     id: 2,
    //     name: "Aditya Thakkar",
    //     title: "Organizer",
    //     image: aditya_thakkar_NoBG,
    //     profileHref: "aditya-thakkar",
    //     linkedinAddress: "http://linkedin.com/in/adityathakkar032",
    //     emailAddress: "",
    //     twitterAddress: "",
    // },
    {
        id: 3,
        name: "Mahimur Rahman Khan",
        title: "Marketing",
        image: mahim_rahman_NoBG,
        profileHref: "mahimur-rahman-khan",
        linkedinAddress: "https://linkedin.com/in/mahimurrahman-khan",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 4,
        name: "Divyanshu Jaggi",
        title: "Operations",
        image: divyanshu_jaggi_NoBG,
        profileHref: "divyanshu-jaggi",
        linkedinAddress: "https://linkedin.com/in/divyanshu-jaggi",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 5,
        name: "Moksh Sood",
        title: "Production",
        image: moksh_sood_NoBG,
        profileHref: "moksh-sood",
        linkedinAddress: "https://www.linkedin.com/in/moksh-sood-3515b3171/",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 6,
        name: "Param Patel",
        title: "Operations",
        image: param_patel_NoBG,
        profileHref: "param-patel",
        linkedinAddress: "https://www.linkedin.com/in/param-patel1",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 7,
        name: "Amin Shamshiri",
        title: "Website Designer",
        image: aminNewNoBG,
        profileHref: "amin-shamshiri",
        linkedinAddress: "https://www.linkedin.com/in/ma-shamshiri/",
        emailAddress: "",
        twitterAddress: "",
    },
    // Add more speakers as needed
];
