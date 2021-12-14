import * as Interfaces from '../lib/interfaces'
import * as Enums from '../lib/enums';

export const Profile : Interfaces.IProfile = {
    id: 0,
    name: "Joseph Hoang", 
    followers: 1, 
    following: 10, 
    posts: [1],
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
        media_src: null/* {
            id: 0,
            type: Enums.MediaSrcType.Image,
            url: "/images/breon.jpg"
        }*/, 
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


export const WorkoutPlan : Interfaces.IWorkoutPlan= {
    title: "",
    description: "",
    details: {
        focus: "",
        duration: 12,
        workouts_per_Week: "5-6",
        diary:  [
            {
                week: 1,
                workouts:  [
                    {
                        day: 1,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Barbell squat",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Deadlift",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", null],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            }
                        ]
                    },
                    {
                        day: 2,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                        ]
                    },
                    {
                        day: 3,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Barbell squat",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                        ]
                    },
                ]
            },
            {
                week: 2,
                workouts:  [
                    {
                        day: 1,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Barbell squat",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Deadlift",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", null],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            }
                        ]
                    },
                ]
            },
            {
                week: 3,
                workouts:  [
                    {
                        day: 1,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Barbell squat",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Deadlift",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", null],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            }
                        ]
                    },
                ]
            },
            {
                week: 4,
                workouts:  [
                    {
                        day: 1,
                        workout: [
                            {
                                exercise: "Lunges",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Barbell squat",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", ""],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            },
                            {
                                exercise: "Deadlift",
                                warmup_set: ["20","20","20"],
                                working_set: ["40","65","100", null],
                                rpe: 10,
                                rpm: "",
                                notes: "",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    upvotes: 20,
    created: "12/11/2021",

}