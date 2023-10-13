<script>
  import Header from "../../lib/components/header.svelte";
  import Footer from "../../lib/components/footer.svelte";

  import { onMount } from "svelte";

export let data;
// console.log(data)

let selectedCategoryId = null;

onMount(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const filterParam = queryParams.get("filter");
    if (filterParam) {
        // De filterqueryparameter bevat de geselecteerde categorie-ID
        selectedCategoryId = filterParam;
    }
});

// Functie om methoden te filteren
function filterMethodsByCategory() {
    if (selectedCategoryId === null) {
        return data.methods; // Geen categorie geselecteerd, retourneer alle methoden
    } else {
        return data.methods.filter(method => 
            method.categories.some(category => category.id === selectedCategoryId)
        );
    }
}


</script>

<Header />

<!-- Content -->
<section class="intro">
  <article class="intro-text">
    <h1>Tekenmethodes</h1>
    <p class="lowercase">
      Welkom op onze pagina over Visual Thinking! Visual Thinking is een super
      toffe manier om informatie te begrijpen, te ordenen en te delen met
      anderen door middel van plaatjes in plaats van alleen maar woorden. Dit
      maakt het gemakkelijker om complexe ideeën te begrijpen en te delen met
      anderen. <br />
      <br />
      Op deze pagina vind je verschillende Visual Thinking tekenmethodes die je kunt
      gebruiken om je creativiteit en productiviteit te vergroten. Of je nu een student
      bent, of gewoon geïnteresseerd bent in Visual Thinking, wij hebben de juiste
      tools en technieken voor jou. <br />
      <br />
      Hier vind je ook een heleboel tips en trucs voor het gebruik van Visual Thinking
      in je dagelijks leven en je studie. Dus waar wacht je nog op? Ontdek vandaag
      nog de kracht van Visual Thinking en maak je ideeën visueel!
    </p>
  </article>
</section>

<section class="categories-mobile">
  <label for="touch"><span id="menu-icon">Categorieën</span></label>
  <input type="checkbox" id="touch" />
  <ul class="slide">
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch">Onderzoeken en begrijpen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch">Organiseren en plannen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch">Leren over anderen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch">Leren over jezelf</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch">Communiceren en presenteren</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch">Creatief denken</a>
    </li>
  </ul>
</section>

<section class="categories">
  <section class="categories-container">
    <ul class="categorie-names">
    <li class="categorie-name">
        <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch">Onderzoeken en begrijpen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch">Organiseren en plannen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch">Leren over anderen</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch">Leren over jezelf</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch">Communiceren en presenteren</a>
    </li>
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch">Creatief denken</a>
    </li>
    </ul>
  </section>
</section>

<!-- omg emona hielp -->

<main class="tekenmethodes-main">
  <article class="methods">
    {#if data.methods.length > 0}
      {#each data.methods as method, index}
        <section class="method-container" data-index={index}>
          <a href="/tekenmethodes/{method.slug}" class="link-detail-page">
            {#if method.template && method.template.url}
              <img
                class={method.categories[0].title.replaceAll(" ", "-")}
                src={method.template.url}
                alt={"Voorbeeld van " + method.title}
                loading="lazy"
              />
            {:else}
              <img
                class={method.categories[0].title.replaceAll(" ", "-")}
                src="/assets/placeholder.webp"
                alt="Placeholder"
                loading="lazy"
              />
            {/if}
            <section class="methods-titles">
              <h2>{method.title}</h2>
            </section>
          </a>
        </section>
      {/each}
    {/if}
  </article>
</main>

<Footer />
