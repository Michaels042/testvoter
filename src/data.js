 import Thumbnail1 from './assets/flag1.jpg'
 import Thumbnail2 from './assets/flag2.jpg'
 import Thumbnail3 from './assets/flag3.jpg'
 import Candidate1 from './assets/candidate1.jpg'
 import Candidate2 from './assets/candidate2.jpg'
 import Candidate3 from './assets/candidate3.jpg'
 import Candidate4 from './assets/candidate4.jpg'
 import Candidate5 from './assets/candidate5.jpg'
 import Candidate6 from './assets/candidate6.jpg'
 import Candidate7 from './assets/candidate7.jpg'


 export const elections = [
    {
        id: "e1",
        title: "Havard Presidential Elections 2024",
        description: "Vote for your favorite candidate in the Havard Presidential Elections 2024!",
        thumbnail: Thumbnail1,
        candidates: ["c1", "c2", "c3", "c4"],
        voters: []
    },
     {
        id: "e2",
        title: "Legon Presidential Elections 2024",
        description: "Vote for your favorite candidate in the Havard Presidential Elections 2024!",
        thumbnail: Thumbnail2,
        candidates: ["c5", "c6", "c7"],
        voters: []
    },
     {
        id: "e3",
        title: "Stanford Presidential Elections 2024",
        description: "Vote for your favorite candidate in the Havard Presidential Elections 2024!",
        thumbnail: Thumbnail3,
        candidates: [],
        voters: []
    },
 ]




    export const candidates = [
        {
            id: "c1",
            fullName: "Enoch Ganyo",
            image: Candidate1,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 23,
            elections: "e1"
        },
        {
            id: "c2",
            fullName: "John Asiama",
            image: Candidate2,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 18,
            elections: "e1"
        },
         {
            id: "c3",
            fullName: "Dora Stephenson",
            image: Candidate3,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 3,
            elections: "e2"
        },
         {
            id: "c4",
            fullName: "Chairman Wobetumi",
            image: Candidate4,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 5,
            elections: "e1"
        },
         {
            id: "c5",
            fullName: "Amankwa Bapenyin",
            image: Candidate5,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 238,
            elections: "e2"
        },
         {
            id: "c6",
            fullName: "Vivian Jill",
            image: Candidate6,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 42,
            elections: "e2"
        },
         {
            id: "c7",
            fullName: "Mahamadu Bawumia",
            image: Candidate7,
            moto: `Vote for your favorite candidate in the Havard Presidential Elections.`,
            voteCount: 190,
            elections: "e2"
        },
    ]



    export const voters = [
        {
        id: "v1",
        fullName: "Ernest Achiever",
        email: "achiever@gmail.com",
        password: "achiever123",
        isAdmin: true,
        votedElections: ["e2"]
    },
    {
        id: "v2",
        fullName: "Doris Lartey",
        email: "doris@gmail.com",
        password: "doris123",
        isAdmin: false,
        votedElections: ["e1", "e2"]
    },
    
        {
        id: "v3",
        fullName: "Daniel vinyo",
        email: "daniel@gmail.com",
        password: "daniel123",
        isAdmin: false,
        votedElections: ["e1", "e2"]
    },
     {
        id: "v4",
        fullName: "Diana Ayi",
        email: "diana@gmail.com",
        password: "diana123",
        isAdmin: true,
        votedElections: []
    },
 ]