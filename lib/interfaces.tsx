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

export interface IWorkout {
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
    workout: IWorkout

}

export type ItemObject = {
    id: string, 
    title: string,
    display_title: string
}