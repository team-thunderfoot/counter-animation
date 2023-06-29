import CounterAnimation from "./CounterAnimation";

class Page {
    constructor() {
        this.init();
    }
    init() {
        new CounterAnimation({
            elements: document.querySelectorAll(".example-1"),
            regionFormat: "en-US",
            duration: 1,
            scrollStart: "center",
        });
        new CounterAnimation({
            elements: document.querySelectorAll(".example-2"),
            regionFormat: "es-ES",
            separator: ".",
        });
    }
}
export default Page;
new Page();
