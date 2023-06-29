import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


class CounterAnimation {
    constructor(payload) {
        this.elements = payload.elements;
        this.regionFormat = payload.regionFormat ? payload.regionFormat : "en-US";
        this.separator = payload.separator ? payload.separator : ",";
        this.duration = payload.duration ? payload.duration : 2;
        this.scrollStart = payload.scrollStart ? payload.scrollStart : "80%";

        this.init();
    }

    init() {
        this.elements.forEach((element) => {
            this.number = element.innerText;

            element.innerText = "0";

            if (element.dataset.counterDuration) {
                this.duration = element.dataset.counterDuration;
            }

            console.log(this.regionFormat != "en-US")

            if (this.regionFormat != "en-US") {
                this.target = this.number.replace(/\./g, '');
            } else {
                this.target = this.number.replace(/,/g, "");
            }
            
            console.log(this.number, this.target, "   separator:", this.separator, this.scrollStart);

            gsap.to(element, {
                duration: this.duration,
                innerText: this.target,
                ease: "power2.out",
                onUpdate: () => {
                    element.innerText = Math.round(element.innerText).toLocaleString(this.regionFormat);
                },
                scrollTrigger: {
                    trigger: element,
                    markers: true,
                    start: `top ${this.scrollStart}`,
                },
            });
        });
    }
}

export default CounterAnimation;
