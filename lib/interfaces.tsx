import * as Enums from './enums'

export interface IProfile  {
    id: number;
    name: string;
    following: number
    followers: number;
    posts: Array<number>;
    height: string;
    weight: string;
    bmi: string;
    current_split: string;
};

export interface IPR {
    id: number;
    exercise: string;
    record: string;
}

export interface IMediaSrc {
    id: Enums.MediaSrcType;
    type: number;
    url: string;
}

export interface IWorkoutSummary {
    id: number;
    type: string;
    time: string;
    calories: number;
    notes: string;
    prs: Array<IPR>;
};

export interface IPost {
    id: number;
    user_id: number;
    display_name: string;
    respects: Array<number>;
    date_time: string;
    location: string;
    title: string;
    media_src: IMediaSrc | null
    workout: IWorkoutSummary

}

export type ItemObject = {
    id: string, 
    title: string,
    display_title: string
}

export interface IWorkout {
    exercise: string,
    warmup_set: Array<string | null>,
    working_set: Array<string | null>,
    rpe: number,
    rpm: string,
    notes: string,
}

export interface IWorkoutDiaryDay {
    day: number,
    workout: Array<IWorkout>
}

export interface IWorkoutDiaryWeek {
    week: number,
    workouts:  Array<IWorkoutDiaryDay>
}

export interface IWorkoutPlanDetails  {
    focus: string,
    duration: number,
    workouts_per_Week: string
    diary: Array<IWorkoutDiaryWeek>
}

export interface IWorkoutPlan {
    title: string,
    description: string,
    details: IWorkoutPlanDetails,
    created: string,
    upvotes: number,
}