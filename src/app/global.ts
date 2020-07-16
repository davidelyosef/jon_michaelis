export const openModal = function(paint) {
  this.painting = paint;
  this.index = this.paintings.indexOf(paint);
  this.maxLength = this.paintings.length - 1;
  this.artworkModal.nativeElement.style.display = 'block';
}

export const closeModal = function() {
  this.artworkModal.nativeElement.style.display = 'none';
}

export const previousImage = function() {
  this.index--;
  if (this.index == 0) this.index = this.paintings.length;
  this.painting = this.paintings[this.index - 1];
}

export const nextImage = function() {
  this.index++;
  if (this.index > this.maxLength) this.index = 0;
  this.painting = this.paintings[this.index];
}

export const onKeyUp = function (ev: KeyboardEvent) {
  if (ev.key === "ArrowLeft") {
    this.index--;
    if (this.index == 0) this.index = this.paintings.length - 1;
    this.painting = this.paintings[this.index];
  }

  else if (ev.key === "ArrowRight") {
    this.index++;
    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings[this.index + 1];
  }

  else if (ev.key === "Escape") {
    this.artworkModal.nativeElement.style.display = 'none';
  }
  console.log(`The user just pressed ${ev.key}!`);
}