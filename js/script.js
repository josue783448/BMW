/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector(".nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("aberto");


        if (nav.classList.contains("aberto")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("aberto");

            menuBtn.textContent = "☰";

        });

    });

}


/* =========================
   VOLTAR AO TOPO
========================= */

const topo = document.getElementById("topo");


if (topo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topo.style.display = "flex";

        } else {

            topo.style.display = "none";

        }

    });


    topo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================
   FORMULÁRIO
========================= */

const formulario =
    document.getElementById("formContato");


if (formulario) {

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome")
                .value
                .trim();


            const email =
                document.getElementById("email")
                .value
                .trim();


            const mensagem =
                document.getElementById("mensagem")
                .value
                .trim();


            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (nome === "") {

                alert(
                    "Por favor, informe seu nome."
                );

                return;
            }


            if (email === "") {

                alert(
                    "Por favor, informe seu e-mail."
                );

                return;
            }


            if (!emailValido.test(email)) {

                alert(
                    "Digite um e-mail válido."
                );

                return;
            }


            if (mensagem === "") {

                alert(
                    "Por favor, escreva sua mensagem."
                );

                return;
            }


            alert(
                "Mensagem enviada com sucesso!"
            );


            formulario.reset();

        }
    );

}