<script lang="ts">
    import { ideas, updateIdeas } from "$lib/stores/store";
    export let idea:string[]

    let edit_text = ""
    let searched_idea = $ideas.find(e => e.id == idea.id)

    function change_editable_state() {
        searched_idea.onEdit = !searched_idea.onEdit

        let edited_ideas = [...$ideas]
        updateIdeas(edited_ideas)
    }
    
    function change_idea_name(params:type) {
        searched_idea.nameIdea = edit_text
        searched_idea.onEdit = false
        let edited_ideas = [...$ideas]
        updateIdeas(edited_ideas)
    }

</script>

<style>
    .IdeaCard {
        height: auto;
        min-height: 60px;
        min-width: 200px;
        max-width: 90%;
        background-color: aqua;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;

        margin-bottom: 10px;

    }

    .button_ok {
        z-index: 999;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="IdeaCard">
    {#if idea.onEdit == true}
        <input type="edit_text" bind:value={edit_text}>
        <button class="button_ok" on:click={change_idea_name}>Ok</button>

        {:else}
            <p on:click={change_editable_state}>{idea.nameIdea}</p>
    {/if}
</div>