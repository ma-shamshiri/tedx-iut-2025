import { InstagrapPost1, InstagrapPost2, InstagrapPost3, InstagrapPost4, InstagrapPost5 } from "../../assets";

export interface InstagramPost {
    id: string;
    imageUrl: string;
    caption: string;
    link: string;
    videoUrl: string;

}

export const instagramPosts: InstagramPost[] = [
    {
        id: "1",
        imageUrl: InstagrapPost1,
        caption: "تیم TEDx دانشگاه تهران",
        link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "https://drive.google.com/file/d/1O8QqPG4IuTORniLBy5aDGgku1sHuqUUZ/preview",
    },
    {
        id: "2",
        imageUrl: InstagrapPost2,
        caption: "ایده‌های نوآورانه",
        link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "https://drive.google.com/file/d/1wPE_Vb60sFVNjCTVal26fuc3maV0VcG1/preview",
    },
    {
        id: "3",
        imageUrl: InstagrapPost3,
        caption: "همایش TEDx",
        link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "https://drive.google.com/file/d/1ZU00rQHy47AfT76zRALeklySs93_UyAh/preview",
    },
    {
        id: "4",
        imageUrl: InstagrapPost4,
        caption: "الهام‌بخش",
        link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "https://drive.google.com/file/d/1Gh3fRnOXcJPn2eodRNt8zhulSlU6VsCx/preview",
    },
    {
        id: "5",
        imageUrl: InstagrapPost5,
        caption: "نوآوری",
        link: "https://www.instagram.com/tedxuniversityoftehran/",
        videoUrl: "https://drive.google.com/file/d/1wgZaNGsv-EcifzvJ7jVN5QZx_JYtP-Wm/preview",
    },
];
