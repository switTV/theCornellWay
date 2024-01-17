<script lang="ts">
    import { ideas, updateIdeas } from "$lib/stores/store";
    export let idea;

    
    let edited_text = "";
    
    function change_editable_state() {
        idea.onEdit = !idea.onEdit;
        updateIdeas([...$ideas]);
    }
    
    function change_idea_name() {
        idea.nameIdea = edited_text;
        idea.onEdit = false;

        updateIdeas([...$ideas]);
    }
</script>

<style>
    .IdeaCard {
        min-height: 60px;
        min-width: 90%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 10px;
        font-family: 'Roboto Slab', serif;
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

<div class="IdeaCard">
    {#if idea.onEdit}
        <input placeholder="Add a new name" bind:value={edited_text}>
        <button class="button_ok" on:click={change_idea_name}>Ok</button>
    {:else}
        <p on:click={change_editable_state}>{idea.nameIdea}</p>
    {/if}
</div>
