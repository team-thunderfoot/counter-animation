import CounterAnimation from "./CounterAnimation";

class Page {
    constructor() {
        this.init();
    }
    init() {
        document.querySelectorAll(".example-1").forEach((element) => {
            new CounterAnimation({
                element: element,
                regionFormat: "en-US",
                separator: ",",
                duration: 1.5,
                scrollStart: "center",
            });
        });

        document.querySelectorAll(".example-2").forEach((element) => {
            new CounterAnimation({
                element: element,
                regionFormat: "es-ES",
                separator: ".",
            });
        });
    }
}
export default Page;
new Page();
