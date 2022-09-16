import { USERS } from "./users";

export const POSTS = [
    {
        imgurl: "https://i.pinimg.com/originals/9a/33/4e/9a334e0361fdfc96be23223f0d7dab9f.jpg",
        user: USERS[0].user,
        likes: 1768,
        caption: "Building a instagram clone using React-native🙄🙄😊",
        profile_picture: USERS[0].img,
        comments: [
            {
                user: "bhaskarjya_7",
                comment: "random text for the 😂😍 oh yeah oh yeah",
            },
            {
                user: "somondas",
                comment: "✌😡🤙🎇✌✌😡😉random text for the oh yeah oh yeah",

            },

        ],


    },
    {
        imgurl: "https://www.myfreewalls.com/public/uploads/preview/free-pink-star-wavelength-4k-wallpaper-mobile-616395050410wlakkhxe8.jpg",
        user: USERS[1].user,
        likes: 19327,
        caption: "😁😋😒😋😋Lorem ipsum dummy text..",
        profile_picture: USERS[1].img,
        comments: [
            {
                user: "ohyeah_8",
                comment: "🎶🤞🤞🤷‍♂️🤷‍♀️🤦‍♀️🤦‍♀️🙌💕",
            },
            {
                user: "bhaskarjya_7",
                comment: "🤣🤗🤣😊😊🤗😁😒",

            },

        ],


    },

]