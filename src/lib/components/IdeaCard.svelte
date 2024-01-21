<script lang="ts">
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { ideas, updateIdeas, notes } from "$lib/stores/store";
    
    interface Idea {
        id: number;
        nameIdea: string;
        onEdit: boolean;
    }

    export let idea: Idea;

    let current_note = $notes.find(note => note.id === idea.id);
    let edited_text = "";
    let ideaCard:HTMLDivElement

    function change_editable_state(): void {
        idea.onEdit = !idea.onEdit;
        updateIdeas([...$ideas]);
    }

    function change_idea_name(): void {
        if (edited_text == "") {
            idea.nameIdea = "Name it whenever you want :)";
            idea.onEdit = false;
        } else {
            idea.nameIdea = edited_text;
            idea.onEdit = false;
            updateIdeas([...$ideas]);
        }
    }

    function updateHeight() {
        if (ideaCard) {
            ideaCard.style.height = `${current_note.noteHeight}px`
        }
    }
</script>

<svelte:window on:mousemove={() => (updateHeight())}/>

<style>
    .IdeaCard {
        min-width: 90%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 10px;
        font-family: 'Roboto Slab', serif;
        transition: height 0.3s;
        min-height: 60px;
    }

    .button_ok {
        z-index: 999;
    }

    input {
        border: none;
        border-bottom: 2px solid #1D7874;
        outline: none;
        margin-right: 10px;
        font-family: "Nunito", sans-serif;
    }
</style>

<div 
    transition:fly={{ duration: 300, x: 0, y: 500, opacity: 0.5, easing: quintOut }} 
    bind:this={ideaCard}
    class="IdeaCard"
>
    {#if idea.onEdit}
        <input placeholder="Add a new name" bind:value={edited_text}>
        <button class="button_ok" on:click={change_idea_name}>Ok</button>
    {:else}
        <p on:click={change_editable_state}>{idea.nameIdea}</p>
    {/if}
</div>