
import Poster1 from "../assets/Images/MoviePoster/The Matrix Resurrections.svg"
import Poster2 from "../assets/Images/MoviePoster/Resident Evil_ Welcome to Raccoon City.svg"
import Poster3 from "../assets/Images/MoviePoster/Sword Art Online_ Progressive - Aria of a Starless Night.svg"
import Poster4 from "../assets/Images/MoviePoster/Tenet.svg"
import Poster5 from "../assets/Images/MoviePoster/John Wick_ Chapter 3 - Parabellum.svg"
import Poster6 from "../assets/Images/MoviePoster/Avengers_ Endgame.svg"

interface Brands{
    xxi:boolean,
    cgv:boolean,
    cinemapolis:boolean
}

interface MoviePoster{
    image:string,
    title:string,
    brands:Brands
}

export const MoviePosterData:MoviePoster[] = [
    {
        image:Poster1,
        title:"The Matrix: Resurrections",
        brands:{xxi:true,cgv:true,cinemapolis:true}
    },
    {
        image:Poster2,
        title:"Resident Evil: Welcome to Raccoon City",
        brands:{xxi:true,cgv:true,cinemapolis:true}
    },
    {
        image:Poster3,
        title:"Sword Art Online: Progressive - Aria of a Starless Night",
        brands:{xxi:false,cgv:true,cinemapolis:false}
    },
    {
        image:Poster4,
        title:"Tenet",
        brands:{xxi:true,cgv:true,cinemapolis:false}
    },
    {
        image:Poster5,
        title:"John Wick: Chapter 3 - Parabellum",
        brands:{xxi:true,cgv:true,cinemapolis:true}
    },
    {
        image:Poster6,
        title:"Avengers: Endgame",
        brands:{xxi:true,cgv:false,cinemapolis:true}
    },
]