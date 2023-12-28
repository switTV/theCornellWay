<script lang="ts">
    import type { PageData } from './$types';
    import { ideas } from '$lib/stores/store';
    import IdeaCard from '$lib/components/IdeaCard.svelte';
    
    export let data: PageData;

    function create_new_idea(name_idea:string, ) {
        ideas.update(myIdea => {
            return [...myIdea, { "name_idea": name_idea }];
        })
        console.log($ideas)
    }
</script>

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
        background-color: #e4e4e4;
        border-right: #000000 2px solid;
        border-bottom: #000000 2px solid;
    }

    .notes_container {
        grid-area: notes_container;
        background-color: #fafafa;
        border-bottom: #000000 2px solid;
    }

    .resume_container {
        grid-area: resume_container;
        background-color: #37718E;
    }

    .header_top {
        width: 100%;

        display: flex;
        justify-content: center;
    }

</style>

<!-- main web page -->
<div class="container">
    <div class="grid_container">
        <div class="questions_container">
            <div class="header_questions header_top">
                <h2>Ideas</h2>
                
            </div>
            <div class="body_question">
                {#if $ideas.length === 0}
                    <button on:click={() => {create_new_idea("Name it whenever you want")}}>+</button>
                    {:else}
                    <div class="questions">
                        {#each $ideas as idea}
                            <IdeaCard {idea}></IdeaCard>
                        {/each}
                        <button on:click={() => {create_new_idea("Name it whenever you want")}}>+</button>
                    </div>
                {/if}
            </div>
        </div>
        <div class="notes_container header_top">
            <div class="header_notes">
                <h2>Notes</h2>
                <div class="notes">

                </div>
            </div>
        </div>
        <div class="resume_container">
            <h2>resume: </h2>
        </div>
    </div>
</div>