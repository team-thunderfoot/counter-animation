import gsap from "gsap";

class CounterAnimation {
    constructor(payload) {
        this.counter = payload;
        this.target = parseFloat(this.counter.innerText);
        this.tl = gsap.timeline();
    }

    reset() {
        this.counter.innerText = "0";
    }

    play() {
        this.tl.to(
            this.counter,
            {
                duration: 2,
                innerText: Math.round(this.target),
                ease: "power2.out",
                onUpdate: () => {
                    this.counter.innerText = Math.round(this.counter.innerText).toLocaleString();
                },
            },
            0.5
        );
    }
}

export default CounterAnimation;
