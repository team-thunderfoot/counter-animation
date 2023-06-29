import gsap from "gsap";

class CounterAnimation {
    constructor(payload) {
        this.elements = payload.elements;
        this.regionFormat = payload.regionFormat ? payload.regionFormat : "en-US";
        this.separator = payload.separator ? payload.separator : ",";
        this.duration = payload.duration ? payload.duration : 2;

        this.init();
    }

    init() {
        this.elements.forEach((element) => {
            this.number = element.innerText;
            
            element.innerText = "0";

            if (element.dataset.counterDuration) {
                this.duration = element.dataset.counterDuration;
            }

            if (this.regionFormat != "en-US") {
                this.separator = ".";
            }

            this.target = this.number.replace(`${this.separator}`, "");
            console.log(this.number, this.target, "   separator:", this.separator);


            gsap.to(
                element,
                {
                    duration: this.duration,
                    innerText: this.target,
                    ease: "power2.out",
                    onUpdate: () => {
                        element.innerText = Math.round(element.innerText).toLocaleString(this.regionFormat);
                    },
                },
            );
        });
    }
}

export default CounterAnimation;
