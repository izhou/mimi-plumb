class Gallery {
  constructor (el) {
    this.el = el;

    this.active_photo_index;
    this.active_photo_container;
    this.active_photo_info;
    this.length = this.el.getElementsByClassName('gallery-photo-container').length;
    this.slideshow;

    let caption_attr = this.el.getAttribute('data-caption-el');
    if (caption_attr) {
      this.caption_el = document.getElementById(caption_attr);
    }

    this.setActivePhotoByIndex(0);
  }

  setActivePhoto(container, index) {
    if (this.active_photo_container) {
      this.active_photo_container.classList.add('is-hidden');
    }

    container.classList.remove('is-hidden');
    this.active_photo_container = container;
    this.active_photo_index = index;

    // Set new active info
    if (this.caption_el) {
      if (this.active_photo_info) this.active_photo_info.classList.add('is-hidden');
      this.active_photo_info = this.caption_el.querySelector(`.gallery-photo-caption-container[data-gallery-index='${index}']`);
      this.active_photo_info.classList.remove('is-hidden');
    }
  }

  setActivePhotoByIndex(index) {
    if (this.active_photo_index == index || !this.length) return;
    let container = this.el.querySelector(`.gallery-photo-container[data-gallery-index="${index}"]`);

    return this.setActivePhoto(container, index);
  }

  setActivePhotoByContainer(container) {
    if (this.active_photo_container == container || !this.length) return;
    let index = parseInt(container.getAttribute('data-gallery-index'));

    return this.setActivePhoto(container, index);
  }

  setSlideshow() {
    if (!this.length) return;
    let next_index = this.getRightIndex(this.active_photo_index);
    let next_photo = this.getPhotoFromIndex(next_index);
    lazySizes.loader.unveil(next_photo);
    let gallery = this;

    this.slideshow = setTimeout((e) => {
      if (next_photo.classList.contains('lazyloaded')) {
        gallery.setActivePhotoByIndex(next_index);
        gallery.setSlideshow();
      } else {
        next_photo.addEventListener('lazyloaded', function (e) {
          gallery.setActivePhotoByIndex(next_index);
          gallery.setSlideshow();
        }, { once: true })
      }
    }, 3000);
  }

  goLeft() {
    let index = this.getLeftIndex();
    return this.setActivePhotoByIndex(index);
  }

  goRight() {
    let index = this.getRightIndex();
    return this.setActivePhotoByIndex(index);
  }

  getPhotoFromIndex(index) {
    return this.el.querySelector(`.gallery-photo-container[data-gallery-index="${index}"] > .photo`);
  }

  getLeftIndex() {
    return this.active_photo_index == 0 ? this.length - 1 : this.active_photo_index - 1;
  }

  getRightIndex() {
    return this.active_photo_index == this.length - 1 ? 0 : this.active_photo_index + 1;
  }

  getActiveIndex() {
    return this.active_photo_index;
  }

  getActiveContainer() {
    return this.active_photo_container;
  }

  getLength() {
    return this.length;
  }
}