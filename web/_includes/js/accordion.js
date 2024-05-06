class Accordion {
  constructor(el, summary) {
    this.el = el;
    this.summary = el.querySelector(summary);
    this.animation = null;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    if (!this.el.open) {
      this.open();
    } else if (this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    const endHeight = `${this.summary.offsetHeight}px`;
    const startHeight = `${this.el.offsetHeight}px`;

    this.el.style.height = endHeight;
    this.el.style.minHeight = '';
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 200,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.el.style.height = '';
      this.el.style.minHeight = endHeight;
      this.el.open = false;
      this.summary.classList.remove('open');
      this.animation = null;
    }
  }

  open() {
    const startHeight = this.el.offsetHeight;
    // explicitly set for animation calculation
    this.el.style.height = `${startHeight}px`;
    this.el.style.minHeight = '';
    this.el.open = true;
    this.summary.classList.add('open');

    // Calculate height based on children.
    const contentHeight = Array.from(this.el.children).map((el) => el.offsetHeight).reduce((a, b) => a + b, 0);
    const endHeight = `${contentHeight}px`;

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 200,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.el.style.minHeight = endHeight;
      this.animation = null;
    }
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el, 'summary');
});