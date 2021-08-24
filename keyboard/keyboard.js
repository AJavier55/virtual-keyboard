const  keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        capsLock: false,
    },

    init() {
        //main elements (create)
        this.elements.main = document.createElement("div");
        this,this.elements.keysContainer = document.createElement("div");
        
        // main elements (set up)
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard_keys");
        this.elements.keysContainer.appenChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(
            ".keyboard_key"
        );

        this.elements.main.appenChild(this.elements.main);
        document.body.appenChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach((element) => {
            element.addEventListener("focus", () => {
                this.open(element.value, (currentValue) => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "backspace",
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p",
            "caps",
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "enter",
            "done",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            ",",
            ".",
            "?",
            "space",
          ];

          const createIconHTML = (icon_name) => {
            //   return
          }
    }
}