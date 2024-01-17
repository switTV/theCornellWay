import { writable } from "svelte/store";

interface Idea {
    id: number;
    nameIdea: string;
    onEdit: boolean;
}

interface Note {
    id: number;
    noteContent: string;
    onEdit: boolean;
    noteHeight: number;
}

export const ideas = writable<Idea[]>([]);
export const notes = writable<Note[]>([]);

export function updateIdeas(newData:any){
    ideas.set(newData)
}

export function updateNotes(newData:any){
    notes.set(newData)
}
