document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS FOR SCROLL REVEAL
    ========================================= */

    const revealItems = document.querySelectorAll(
        ".section-1, " +
        ".heading-1, .heading-2, .heading-3, .heading-4, " +
        ".filter, " +
        ".box-1, .box-2, .box-3, .box-4, .box-5, .box-6, " +
        ".card-1, .card-7, .card-13, .card-19, " +
        ".cart-1, .cart-7, .cart-13, .cart-19, " +
        "footer"
    );


    /* =========================================
       ADD REVEAL CLASS
    ========================================= */

    revealItems.forEach((item, index) => {

        item.classList.add("shop-reveal");

        /* One-by-one animation */
        item.style.transitionDelay =
            `${(index % 4) * 0.12}s`;

    });


    /* =========================================
       INTERSECTION OBSERVER
    ========================================= */

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealItems.forEach(item => {
        observer.observe(item);
    });


    /* =========================================
       PRODUCT CARD STAGGER
    ========================================= */

    const productCards = document.querySelectorAll(
        ".card-1, .card-7, .card-13, .card-19, " +
        ".cart-1, .cart-7, .cart-13, .cart-19"
    );

    productCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${(index % 4) * 0.15}s`;

    });


    /* =========================================
       MOUSE PARALLAX EFFECT
       VERY SUBTLE
    ========================================= */

    productCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -3;

            const rotateY =
                ((x / rect.width) - 0.5) * 3;

            card.style.transform =
                `translateY(-14px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        });

    });


function toggleMenu() {
    const menu = document.querySelector("nav ul");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

});