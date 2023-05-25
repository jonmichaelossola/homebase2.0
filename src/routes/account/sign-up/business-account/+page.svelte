<script>
  import AccountSignupNav from "../../../../components/AccountSignupNav.svelte";
  import Dropdown from "../../../../components/Dropdown.svelte";

  let currentSlide = 0;
  let progress = 0;
  let progressMultiplier = 33.33;
  let name = "";
  let nameValid = false;

  $: {
    nameValid = name.trim().length > 0;
  }

  function nextSlide() {
    if (currentSlide < 2) {
      currentSlide += 1;
    }
    progress = currentSlide * progressMultiplier;
  }
</script>

<AccountSignupNav />
<div class="flex flex-col w-[600px] ml-auto mr-auto mt-10">
  <h3 class="uppercase text-sm font-bold">Step {currentSlide + 1} of 3</h3>
  <div class="w-80 h-2 bg-off-white rounded overflow-hidden mb-5">
    <div
      class="h-full bg-turquoise transition-width duration-300"
      style="width: {progress}%"
    />
  </div>
  {#if currentSlide === 0}
    <div
      class="h-full w-full flex flex-col slide bg-white rounded animate-slide mt-50"
    >
      <h1 class="text-6xl text-black font-bold mb-4">Hi, we're Homebase2.0</h1>
      <label for="name" class="text-xl mt-4 font-100">What's your name?</label>
      <input
        id="name"
        type="text"
        bind:value={name}
        class="w-full h-10 mt-1 p-4 border-2 border-inputBorder rounded hover:border-turquoise focus:outline-none focus:border-turquoise focus-visible:border-turquoise"
      />
      <!-- <p>Try everything free for 14 days. No credit card required.</p> -->
      <button
        disabled={nameValid === false}
        class="ml-auto disabled:bg-disabled disabled:text-black text-white font-bold bg-turquoise px-8 py-3 rounded mt-10"
        on:click={nextSlide}>Get Started</button
      >
    </div>
  {:else if currentSlide === 1}
    <div class="h-full w-full slide bg-white p-8 rounded animate-slide">
      <h2>Hello World</h2>
    </div>
  {:else}
    <div class="h-full w-full slide bg-white p-8 rounded animate-slide">
      <h2>Hello World 23</h2>
    </div>
  {/if}
</div>

<style>
  .animate-slide {
    animation: fade-in-left 1s forwards;
    animation-delay: calc(0.2s * var(--animation-order));
  }

  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
