<script>
  import Header from "../../lib/components/header.svelte";
  import Footer from "../../lib/components/footer.svelte";
</script>

<Header />

<main>
  <header>
    <div class="hexagon-kennisclip">
      <section class="yellow2-2">
        <section class="white2-2" />
      </section>

      <section class="yellow2-3">
        <section class="white2-3" />
      </section>

      <section class="h3-yellow2-3" />

      <section class="yellow2-4">
        <section class="white2-4" />
      </section>

      <section class="h3-yellow2-4" />

      <section class="yellow2-5">
        <section class="white2-5" />
      </section>

      <section class="h3-yellow2-5" />

      <section class="yellow2-6">
        <section class="white2-6" />
      </section>

      <section class="h3-yellow2-6" />
    </div>
  </header>

  <!-- Kennisclip video via YouTube -->

  <div class="iframe">
    <section class="video-arrows">
      <button class="arrows">
        <img
          class="left-arrow"
          src="assets/arrows.svg"
          alt="Knop met pijl naar volgende video"
        />
      </button>
    </section>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/yr-rRMElLFg?si=CkdyjnxpUFMqM7se"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />

<div class="beschrijving">

    <h3 class="youtube-video-naam">Visual thinking in het hbo: onderzoeken en begrijpen </h3>

    <p>
      Deze kennisclip gaat over visual thinking en hoe het kan worden toegepast om zowel studenten
      als docenten in het hbo op een andere manier te leren onderzoeken.
    </p>
    
    <br>

    <p> 
      Deze kennisclips zijn onderdeel van het platform ‘Visual thinking in het hbo’.
      Dit platform staat vanaf 2024 online. Tot die tijd kunnen werkvormen
      opgevraagd worden bij Charley Muhren, docent en onderzoeker bij CMD
      Amsterdam: c.j.muhren@hva.nl.
    </p>

</div>
    <section class="video-arrows">
      <button class="arrows">
        <img
          class="right-arrow"
          src="assets/arrows.svg"
          alt="Knop met pijl naar volgende video"
        />
      </button>
    </section>
  </div>
</main>
<Footer />

<style>
  .hexagon-kennisclip {
    display: grid;
    grid-template-columns: auto;
    margin-top: 1em;
    justify-content: flex-end;
  }

  /* Hexagon grids  */

  .yellow2-2,
  .h3-yellow2-2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
  }

  .yellow2-3,
  .h3-yellow2-3 {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 2;
  }

  .yellow2-4,
  .h3-yellow2-4 {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 2;
  }

  .yellow2-5,
  .h3-yellow2-5 {
    grid-column-start: 6;
    grid-column-end: 4;
    grid-row-start: 3;
  }

  .yellow2-6,
  .h3-yellow2-6 {
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 3;
  }

  /* Hexagon shape  */

  .yellow2-1,
  .yellow2-2,
  .yellow2-3,
  .yellow2-4,
  .yellow2-5,
  .yellow2-6 {
    width: 300px;
    height: 275px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
  }

  .white2-1,
  .white2-2,
  .white2-3,
  .white2-4,
  .white2-5,
  .white2-6 {
    width: calc(285px);
    height: calc(261.25px);
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }

  /* Iframe styling */

  .iframe {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    margin-top: 2em;
  }

  .video-arrows {
    margin: 1em;
  }

  /* Arrow buttons */

  .arrows {
    width: 72px;
    height: 66px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
    border: none;
    background: var(--vtYellow);
  }

  .right-arrow {
    transform: rotate(270deg);
  }

  .left-arrow {
    transform: rotate(90deg);
  }

  /* Iframe text styling */

  .beschrijving{
    max-width: 500px;
    max-height: 409px;
    margin-left: 1em;
  }

  .youtube-video-naam{
    /* margin-bottom: 1em; */
  }
 
</style>
