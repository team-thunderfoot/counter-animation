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
            this.number = this.DOM.element.innerText;

            this.DOM.element.innerText = "0";

            if (this.DOM.element.dataset.counterDuration) {
                this.duration = this.DOM.element.dataset.counterDuration;
            }
 
            if (this.regionFormat != "en-US") {
                this.target = this.number.replace(/\./g, "");
            } else {
                this.target = this.number.replace(/,/g, "");
            }

            gsap.to(this.DOM.element, {
                duration: this.duration,
                innerText: this.target,
                ease: "power2.out",
                onUpdate: () => {
                    this.DOM.element.innerText = Math.round(this.DOM.element.innerText).toLocaleString(this.regionFormat);
                },
                scrollTrigger: {
                    trigger: this.DOM.element,
                    start: `top ${this.scrollStart}`,
                },
        });
    }
}

export default CounterAnimation;
