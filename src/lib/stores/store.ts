import { writable } from "svelte/store";

export let ideas = writable([])
export let notes = writable([])

export let numIdeas = writable(0)

export function updateIdeas(newData:any){
    ideas.set(newData)
}

export function updateNotes(newData:any){
    notes.set(newData)
}
