function DomElement(selector, height, width, bg, fontSize, text, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.position = position;
}

DomElement.prototype.createELem = function () {
    console.log(this.selector.charAt(0));
    if (this.selector.charAt(0) === '.') {

        const div = document.createElement('div');
        document.body.append(div);
        div.style.cssText = `
        selector: ${this.selector};
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: ${this.position};
        `;
        div.textContent = this.text;
        div.classList.add(this.selector);
    } else if (this.selector.charAt(0) === '#') {
        const p = document.createElement('p');
        document.body.append(p);
        p.id = this.selector;
        p.style.cssText = `
        selector: ${this.selector};
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        `;
        p.textContent = this.text;

    } else {
        console.log('Ошибка! Неверно переданы параметры.')
    }
};

let sqr = new DomElement('#', '50px', '50px', 'red', '18px', 'paragraph', 'absolute');

sqr.createELem();

let sqr1 = new DomElement('.block', '100px', '100px', 'blue', '18px', 'sqr1', 'absolute');


document.addEventListener('DOMContentLoaded', (e) => {
    sqr1.createELem();
    const second = document.getElementsByClassName('.block')[0];
    let coordY = 0;
    let coordX = 0;
    document.addEventListener('keydown', function (e) {
        if (e.code === 'ArrowLeft') {
            coordX -= 10;
            second.style.marginLeft = coordX + 'px';
            console.log('left');
        } else if (e.code === 'ArrowDown') {
            coordY += 10;
            second.style.marginTop = coordY + 'px';
            console.log('down');
        } else if (e.code === 'ArrowUp') {
            coordY -= 10;
            second.style.marginTop = coordY + 'px';
            console.log('up');
        } else if (e.code === 'ArrowRight') {
            coordX += 10;
            second.style.marginLeft = coordX + 'px';
            console.log('right');
        }

    });
});


