function DomElement(selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;

}

DomElement.prototype.createELem = function () {
    if (this.selector === '.block') {
        const div = document.createElement('div');
        document.body.append(div);
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
        div.textContent = this.text;
        div.classList.add('block');
    } else if (this.selector === '#best') {
        const p = document.createElement('p');
        document.body.append(p);
        p.style.fontSize = this.fontSize;
        p.textContent = this.text;
        p.id = 'best';
    }
};

let elem = new DomElement('.block', '50px', '50px', 'red', '18px', 'blabla');

elem.createELem();