<script>
  import Header from "../../lib/components/header.svelte";
  import Footer from "../../lib/components/footer.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const canvas = document.getElementById("drawing-board");
    const toolbar = document.getElementById("toolbar");
    const ctx = canvas.getContext("2d");

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let lineWidth = 5;
    let startX;
    let startY;

    toolbar.addEventListener("click", (e) => {
      if (e.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    toolbar.addEventListener("change", (e) => {
      if (e.target.id === "stroke") {
        ctx.strokeStyle = e.target.value;
      }

      if (e.target.id === "lineWidth") {
        lineWidth = e.target.value;
      }
    });

    const draw = (e) => {
      if (!isPainting) {
        return;
      }

      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";

      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
      ctx.stroke();
    };

    canvas.addEventListener("mousedown", (e) => {
      isPainting = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    canvas.addEventListener("mouseup", (e) => {
      isPainting = false;
      ctx.stroke();
      ctx.beginPath();
    });

    canvas.addEventListener("mousemove", draw);
  });
</script>

<Header />

<main>
  <div class="labeltekst"><h1>Teken hier!</h1></div>
  <section class="container">
    <div id="toolbar">
      <h3>Kleurenpalet</h3>
      <label for="stroke">Kleur</label>
      <input id="stroke" name="stroke" type="color" />
      <label for="lineWidth">Pen dikte:</label>
      <input id="lineWidth" name="lineWidth" type="number" value="5" />
      <button id="clear">Wissen</button>
    </div>
    <div class="drawing-board">
      <canvas id="drawing-board" />
    </div>
  </section>
</main>

<Footer />

<style>
  .labeltekst {
    font-family: var(--vtPrimaryFont);
    margin: auto 0;
  }
  .container {
    height: 100%;
    display: flex;
  }

  #toolbar {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    width: 15%;
    background-color: #feb51e;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }

  #toolbar input {
    width: 100%;
  }

  #linewidth input {
    width: 100%;
  }

  #toolbar button {
    background-color: #1565c0;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 2px;
    margin-top: 0.5em;
    width: 100%;
  }

  #stroke {
    padding: 0;
    border: none;
    background: none;
  }
</style>
