<script lang="ts">
    import { fade } from 'svelte/transition';

    interface Idea {
        id: number;
        nameIdea: string;
        onEdit: boolean;
    }

    export let idea:Idea;
    import { notes } from "$lib/stores/store";

    let note = $notes[idea.id];
    let textareaRef: HTMLTextAreaElement;
    let textareaValue: string;
    let noteHeight: number;

    function handleButtonClick() {
        textareaRef.focus();
    }

    function handleInput() {
        if (textareaRef) {
            textareaRef.style.height = `${textareaRef.scrollHeight}px`;
            note.noteHeight = noteHeight
        }
    }

    function updateNote() {
        note.noteContent = textareaValue;
        handleInput()
    }


</script>

<style>
    .NoteCard {
        background-color: #fff;
        width: 90%;
        min-height: 60px;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        font-family: "Roboto Slab", serif;
    }

    .NoteCardHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    textarea {
        height: auto;
        width: 100%;
        background-color: transparent;
        border: none;
        resize: none;
        font-family: "Nunito", sans-serif;
    }

    .NoteCardName {
        margin-right: 10px;
    }

    .NoteCardId {
        color: #4d4d4d;
    }
</style>
<!-- markup (zero or more items) goes here -->

<div class="NoteCard" transition:fade={{duration: 300}} bind:clientHeight={noteHeight} on:click={handleButtonClick}>
    <div class="NoteCardHeader">
        <p class="NoteCardName">{idea.nameIdea}</p>
        <p class="NoteCardId">{idea.id}</p>
    </div>
    
    <textarea
        bind:this={textareaRef}
        bind:value={textareaValue}
        on:input={updateNote}
    ></textarea>

</div>

