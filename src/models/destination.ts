
export default interface Destination {
    id : number,
    title : string,
    image : "beach" | "climbingHills" | "frozenHills" | "homeBanner" | "onboardingImage" | "skiVilla" | "skiVillaBanner",
    location :string
    rating : number
}

export const DestinationsDummyDatas : Destination[] = [
    {
        id : 1,
        title : "Climbing Hills",
        image : "climbingHills",
        location : "France",
        rating : 4.5
    },
    {
        id : 2,
        title : "Frozen Hills",
        image : "frozenHills",
        location : "Belgique",
        rating : 5
    },
    {
        id : 3,
        title : "Ski Villa",
        image : "skiVilla",
        location : "RDC",
        rating : 3.5
    },
    {
        id : 4,
        title : "Beach",
        image : "beach",
        location : "Angleterre",
        rating : 0
    },
    {
        id : 5,
        title : "Ski Villa banner",
        image : "skiVillaBanner",
        location : "RDC",
        rating : 4.5
    },
]

// export default Destination