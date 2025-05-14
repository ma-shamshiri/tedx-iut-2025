import { speaker1, speaker2, speaker3, speaker4, speaker5, speaker6, speaker7 } from "../../assets";

export interface Speakers {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
}

export const speakers: Speakers[] = [
    {
        id: "1",
        imageUrl: speaker1,
        name: "سخنران 1",
        description: "توضیحات",
    },
    {
        id: "2",
        imageUrl: speaker2,
        name: "سخنران 2",
        description: "توضیحات",
    },
    {
        id: "3",
        imageUrl: speaker3,
        name: "سخنران 3",
        description: "توضیحات",
    },
    {
        id: "4",
        imageUrl: speaker4,
        name: "سخنران 4",
        description: "توضیحات",
    },
    {
        id: "5",
        imageUrl: speaker5,
        name: "سخنران 5",
        description: "توضیحات",
    },
    {
        id: "6",
        imageUrl: speaker6,
        name: "سخنران 6",
        description: "توضیحات",
    },
    {
        id: "7",
        imageUrl: speaker7,
        name: "سخنران 7",
        description: "توضیحات",
    },
];
