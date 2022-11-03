document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector(".tabs");

    const tabsBtn = document.querySelectorAll(".tabs__btn");
    const tabsContent = document.querySelectorAll(".tabs__content");
    const tabsContentActive = document.querySelector(".tabs__content.active");

    const mediaQuery = window.matchMedia("(min-width: 769px)");
    if (mediaQuery.matches) {
        let heightContentActive = tabsContentActive.clientHeight;
        tabsContentActive.parentNode.style.height =
            heightContentActive + 50 + "px";
    }

    document.querySelector(".tabs__inner");
    if (tabs) {
        if (mediaQuery.matches) {
            tabs.addEventListener("click", (e) => {
                if (e.target.classList.contains("tabs__btn")) {
                    const tabsPath = e.target.dataset.tabsPath;

                    tabsBtn.forEach((el) => {
                        el.classList.remove("active");
                    });

                    document
                        .querySelector(`[data-tabs-path="${tabsPath}"]`)
                        .classList.add("active");
                    tabsHandler(tabsPath);
                }
            });
        } else {
            tabsBtn.forEach((el) => {
                el.classList.remove("active");
            });
            tabsContent.forEach((el) => {
                el.classList.remove("active");
            });
            tabs.addEventListener("click", (e) => {
                if (e.target.classList.contains("tabs__btn")) {
                    const tabsPath = e.target.dataset.tabsPath;
                    const self = document.querySelector(
                        `[data-tabs-path="${tabsPath}"]`
                    );

                    self.parentNode.classList.toggle("active");
                    if (tabsContentActive) {
                        console.log("juj");
                        self.nextElementSibling.style.maxHeight =
                            self.nextElementSibling.scrollHeight + "px";
                    }
                }
            });
        }
    }

    const tabsHandler = (path) => {
        tabsContent.forEach((el) => {
            el.classList.remove("active");
            el.parentNode.style.height = 0 + "px";
        });
        document
            .querySelector(`[data-tabs-target="${path}"]`)
            .classList.add("active");
        let active = document.querySelector(
            `.active[data-tabs-target="${path}"]`
        );
        let heightContent = active.clientHeight;

        active.parentNode.style.height = heightContent + "px";
    };

    const cards = document.querySelectorAll(".tabs__content");
    cards.forEach((card) => {
        const btn = card.querySelector(".card__form-btn");
        btn.addEventListener("click", (e) => {
            const input = card.querySelector(".card__input");
            input.addEventListener("input", () => {
                input.style.borderColor = "#D9D9D9";
            });
            if (input.value.length < 5) {
                input.style.borderColor = "red";
            } else input.style.borderColor = "#D9D9D9";
        });
    });
});
