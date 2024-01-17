<script lang="ts">
    import type { PageData } from './$types';
    import { ideas, notes } from '$lib/stores/store';

    import IdeaCard from '$lib/components/IdeaCard.svelte';
    import NoteCard from '$lib/components/NoteCard.svelte';

    let contador = -1
    
    export let data: PageData;

    function create_new_idea(ideaName: string) {
        ideas.update(myIdeas => {
            return [...myIdeas, { "id": contador += 1, "nameIdea": ideaName, "onEdit": false }];
        });
        create_new_note();
    }

    function create_new_note() {
        notes.update(myNotes => {
            return [...myNotes, { "id": contador, "noteContent": "", "onEdit": false, "noteHeight": 0 }];
        });
    }
</script>

<svelte:head>
    <title>The Cornell way</title>
</svelte:head>

<style>
    .grid_container {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        height: 100vh;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          "questions_container notes_container notes_container"
          "questions_container notes_container notes_container"
          "resume_container resume_container resume_container";
    }

    .questions_container {
        grid-area: questions_container;
        background-color: #1D7874;
        border-right: #000000 2px solid;
        border-bottom: #000000 2px solid;
        overflow-y: scroll;
    }
    
    .notes_container {
        grid-area: notes_container;
        background-color: #1D7874;
        border-bottom: #000000 2px solid;
        overflow-y: scroll;
    }

    .resume_container {
        grid-area: resume_container;
        background-color: #ffffff;
    }

    .header_top {
        width: 100%;
        height: 60px;
        background-color: #1D7874;
        border-bottom: #0B132B 2px solid;
        color: #fff;
        font-family: "Roboto Slab", serif;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .notes {
        margin-top: 20px;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .questions {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

</style>

<!-- main web page -->
<div class="container">
    <div class="grid_container">
        <div class="questions_container">
            <div class="header_questions header_top">
                <h2>Ideas</h2>
                
            </div>
            <div class="question">
                {#if $ideas.length === 0}
                    <button on:click={() => {create_new_idea("Name it whenever you want :)")}}>+</button>
                    {:else}
                    <div class="questions">
                        {#each $ideas as idea}
                            <IdeaCard {idea}></IdeaCard>
                        {/each}
                        <button on:click={() => {create_new_idea("Name it whenever you want :)")}}>+</button>
                    </div>
                {/if}
            </div>
        </div>
        <div class="notes_container">
            <div class="header_notes header_top">
                <h2>Notes</h2>
            </div>
            <div class="notes">
                {#each $ideas as idea}
                    <NoteCard {idea}></NoteCard>
                {/each}
            </div>
        </div>
        <div class="body_notes">
        </div>
        <div class="resume_container">
            <h2>resume: </h2>
        </div>
    </div>
</div>