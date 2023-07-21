import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class CounterAnimation {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
        };
        this.regionFormat = payload.regionFormat ? payload.regionFormat : "en-US";
        this.separator = payload.separator ? payload.separator : ",";
        this.duration = payload.duration ? payload.duration : 2;
        this.scrollStart = payload.scrollStart ? payload.scrollStart : "80%";

        this.init();
    }

    init() {
        if (this.DOM.element.dataset.counterDuration) {
            this.duration = this.DOM.element.dataset.counterDuration;
        }

        // Obtener el contenido del elemento
        const content = this.DOM.element.textContent;

        let cleanNumber;

        if (this.regionFormat != "en-US") {
            cleanNumber = content.replace(/\./g, "");
        } else {
            cleanNumber = content.replace(/,/g, "");
        }

        const number = cleanNumber.match(/\d+/g);

        if (number !== null) {
            // Reemplazar los números con el mismo contenido, pero dentro de una etiqueta <span>
            const updatedContent = cleanNumber.replace(/\d+/g, (match) => `<span>${match}</span>`);

            // Actualizar el contenido del elemento <p> con el nuevo contenido modificado
            this.DOM.element.innerHTML = updatedContent;

            // Obtener todos los elementos <span> creados
            const numberSpan = this.DOM.element.querySelector("span");

            this.target = numberSpan.innerText;

            numberSpan.innerText = "0";

            gsap.to(numberSpan, {
                duration: this.duration,
                innerText: this.target,
                ease: "power2.out",
                onUpdate: () => {
                    numberSpan.innerText = Math.round(numberSpan.innerText).toLocaleString(this.regionFormat);
                },
                scrollTrigger: {
                    trigger: this.DOM.element,
                    start: `top ${this.scrollStart}`,
                },
            });
        }
    }
}

export default CounterAnimation;
