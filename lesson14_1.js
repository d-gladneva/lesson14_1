function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createELem = function () {
    if (this.selector === '.block') {
        const div = document.createElement('div');
        document.body.append(div);
        div.textContent = 'block';
        div.classList.add('block');
    } else if (this.selector === '#best') {
        const p = document.createElement('p');
        document.body.append(p);
        p.textContent = 'best';
        p.id = 'best';
    }
};

let elem = new DomElement('#best', '50px', '50px', '#000', '18px');

elem.createELem();