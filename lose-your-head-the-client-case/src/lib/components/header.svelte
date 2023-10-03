<section class="page">
    <header>
        <section>
            <a href="/">
                <img class="logo" src="/assets/vtHBO-v1.0-Logo_1.svg" alt="" />
            </a>
        </section>

        <section class="navheader">
            <nav>
                <ul>
                    <a href="/over">
                        <li>Over</li>
                    </a>
                    <li>Blog</li>
                    <li>
                        <img src="/assets/account.svg" alt="" />
                    </li>
                </ul>
            </nav>
        </section>
    </header>

    <section>
        <a href="/tekenmethodes">
            <p class="line">
                <img class="arrows-line" src="/assets/arrows.svg" alt="" />
                Overzicht <strong>tekenmethodes</strong>
            </p>
        </a>
    </section>
</section>

<style>
    .page {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .navheader ul {
        display: flex;
        align-items: center;

        list-style: none;
    }

    .navheader li {
        padding: 0.6rem;
        font-size: 1rem;

        font-family: var(--vtPrimaryFont);
        color: var(--vtDarkBlue);
        font-weight: bolder;
    }

    .navheader {
        display: flex;
        align-items: center;
    }

    .navheader li {
        padding: 1.4rem;
    }

    .line {
        background-color: var(--vtSec-DarkBlue);
        color: var(--vtWhite);

        text-transform: uppercase;
        font-family: var(--vtPrimaryFont);
        font-size: 0.75rem;

        padding-left: 7rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;

        margin-top: 0px;
        display: flex;
        align-items: center;
    }

    .line img {
        margin-right: 0.5rem;
    }
</style>
