let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});

const form = document.getElementById("formulario");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        mensagem: document.getElementById("mensagem").value,
    };

    try {
        const response = await fetch("https://formspree.io/f/mpwpybpg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro na conexão.");
    }
});
