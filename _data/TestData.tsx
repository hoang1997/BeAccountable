import * as Interfaces from '../lib/interfaces'
import * as Enums from '../lib/enums';

export const Profile : Interfaces.IProfile = {
    id: 0,
    name: "Joseph Hoang", 
    followers: 1, following: 10, 
    height: "160cm", 
    weight: "100kg", 
    bmi: "100 (good)",
    current_split: "Push, Pull, Legs"
}

export const Posts : Array<Interfaces.IPost> = [
    {
        id: 0,
        display_name: "Joseph Hoang",
        user_id: 0,
        respects: [1,2,3, 4],
        date_time: "Today at 14:00",
        location: "RP Fitness, Cambridge",
        title: "Afternoon Workout",
        media_src: null, 
        workout: {
            id: 0, 
            type: "Push",
            time: "1h 20m",
            calories: 120,
            prs: [
                {
                    id: 0, 
                    exercise: "Bench press",
                    record: "120kg"
                }
            ],
            notes: ""
        }
    },
    {
        id: 1,
        display_name: "Anthony Hoang",
        user_id: 0,
        respects: [1,2,3,4,5,6,7,8],
        date_time: "Today at 14:00",
        location: "The gym, Cambridge",
        title: "Afternoon Workout",
        media_src: {
            id: 0,
            type: Enums.MediaSrcType.Image,
            url: "/images/breon.jpg"
        }, 
        workout: {
            id: 0, 
            type: "Push",
            time: "1h 20m",
            calories: 120,
            prs: [
                {
                    id: 0, 
                    exercise: "Bench press",
                    record: "120kg"
                }
            ],
            notes: ""
        }
    }
] 