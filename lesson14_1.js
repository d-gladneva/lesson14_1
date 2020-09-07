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
        div.style.selector = this.selector;
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
        div.textContent = this.text;
        div.style.position = this.position;
        div.classList.add('block');
    } else if (this.selector.charAt(0) === '#') {
        const p = document.createElement('p');
        document.body.append(p);
        p.style.fontSize = this.fontSize;
        p.textContent = this.text;
        p.id = 'best';
    } else  {
        console.log('Ошибка! Неверно переданы параметры.')
    }
};

let sqr = new DomElement('#block', '50px', '50px', 'red', '18px', 'blabla', 'absolute');

sqr.createELem();

const second = document.getElementsByClassName('block')[0];
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