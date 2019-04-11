import { Track } from './track';

export interface Album {
    name: string;
    realeseDate: string;
    coverImage: string;
    tracks: Track[];
}
