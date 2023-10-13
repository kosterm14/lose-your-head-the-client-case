<footer>
    <section class="footer-col-logo">
        <img src="/assets/visual-thinking-logo-footer.svg" alt='' />
    </section>

    <section class="footer-col-1">
        <ul>
            <a href="/over">
                <li class="footer-bold">Over</li>
            </a>
            <a href="/blog">
                <li class="footer-bold">Blog</li>
            </a>
            <a href="/tekenmethodes">
                <li class="footer-bold">Tekenmethodes</li>
            </a>
        </ul>
    </section>

    <section class="footer-col-2">
        <ul>
            <li class="footer-bold">Categorieën</li>
            <li>Onderzoeken en begrijpen</li>
            <li>Organiseren en plannen</li>
            <li>Leren over jezelf</li>
            <li>Leren over anderen</li>
            <li>Communiceren en presenteren</li>
            <li>Creatief Denken</li>
        </ul>
    </section>

    <section class="footer-col-3">
        <ul>
            <li class="footer-bold">Contact</li>
            <li>
                <span class="footer-social-media">
                    <img src="/assets/social-media-icons/twitter.svg" alt='' />
                </span>
                <span class="footer-social-media">
                    <img src="/assets/social-media-icons/instagram.svg" alt='' />
                </span>
                <span class="footer-social-media">
                    <img src="/assets/social-media-icons/tiktok.svg" alt='' />
                </span>
                <span class="footer-social-media">
                    <img src="/assets/social-media-icons/youtube.svg" alt='' />
                </span>
            </li>
            <li>© Charley Muhren, 2022</li>
        </ul>
    </section>
</footer>

<style>
    /* 
    footer
*/

    * {
        margin: 0;
        padding: 0;
    }

    footer {
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: var(--vtGrey-10);
        padding: 50px;
    }

    footer ul li {
        list-style: none;
        font-family: var(--vtPrimaryFont);
        font-size: 1em;
        font-weight: 400;
        color: var(--vtDarkBlue);
        padding: 10px;
    }

    .footer-bold {
        font-weight: 600;
    }

    .footer-col-logo {
        width: 100%;
    }

    .footer-col-1 {
        margin-top: 50px;
    }

    .footer-col-2 {
        margin-top: 50px;
    }

    .footer-col-3 {
        margin-top: 50px;
    }

    .footer-social-media {
        padding: 15px;
    }

    .footer-social-media:nth-of-type(1) {
        padding-left: 0px;
    }

    @media (min-width: 45em) {
        /* 
    footer
*/
        footer {
            width: 100%;
            display: grid;
            grid: "logo ." auto "col-1 col-3" auto "col-2 ." auto / 1fr 1fr;
            gap: 10px;
        }

        .footer-col-logo {
            grid-area: logo;
            width: 100%;
            height: auto;
        }

        .footer-col-1 {
            grid-area: col-1;
        }

        .footer-col-2 {
            grid-area: col-2;
        }

        .footer-col-3 {
            grid-area: col-3;
        }
    }

    @media (min-width: 68em) {
        /* 
    footer
*/
        footer {
            display: grid;

            display: grid;
            grid: "logo col-1 col-2 col-3" auto / 1fr 1fr 1fr 1fr;
            gap: 10px;
        }

        .footer-col-logo {
            grid-area: logo;
            width: 100%;
            height: auto;
        }

        .footer-col-1 {
            grid-area: col-1;
            margin-top: 0px;
        }

        .footer-col-2 {
            grid-area: col-2;
            margin-top: 0px;
        }

        .footer-col-3 {
            grid-area: col-3;
            margin-top: 0px;
        }
    }
</style>
