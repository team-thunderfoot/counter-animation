import CounterAnimation from "./CounterAnimation";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new CounterAnimation({
            elements: document.querySelectorAll("#example-1 .js--tos"),
        });
        new CounterAnimation({
            elements: document.querySelectorAll("#example-2 .js--tos"),
            defaultStart: "70%",
            breakpoint: 1024,
            breakpointMod: 0.1 //if data-tos=400 -> from 1024px of window.width, the distance of displacement will be 40px (400 * 0.1)
        });
        new CounterAnimation({
            elements: document.querySelectorAll("#example-3 .js--tos"),
        });
        new CounterAnimation({
            elements: document.querySelectorAll("#example-4 .js--tos"),
            breakpoint: 680,
            breakpointMod: 0.5
        });
        new CounterAnimation({
            elements: document.querySelectorAll("#example-5 .js--tos"),
            breakpoint: 680,
            breakpointMod: 0.5
        });
    }
}
export default Page;
new Page();
