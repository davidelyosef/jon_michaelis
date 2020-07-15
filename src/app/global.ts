export const openModal = function(id) {
    
    this.paintings.map(painting => {
        if (painting.id === id) {
            this.painting = painting;
            this.index = this.paintings.indexOf(painting)
            this.maxLength = this.paintings.length - 1;
        }
    })
    this.artworkModal.nativeElement.style.display = 'block';
 
}

export const closeModal = function() {
 
    this.artworkModal.nativeElement.style.display = 'none';
}

export const previousImage = function() {
 
    if (this.index == 0) this.index = this.paintings.length;
    this.painting = this.paintings[this.index - 1];
    this.index--;
}

export const nextImage = function() {

    if (this.index + 1 > this.maxLength) this.index = -1;
    this.painting = this.paintings[this.index + 1];
    this.index++;
}

export const onKeyUp = function(ev:KeyboardEvent) {

    if( ev.key === "ArrowLeft"){
      if (this.index == 0) this.index = this.paintings.length;
      this.painting = this.paintings[this.index - 1];
      this.index--;
    }

    else if(ev.key === "ArrowRight"){
      if (this.index + 1 > this.maxLength) this.index = -1;
      this.painting = this.paintings[this.index + 1];
      this.index++;
    }

    else if(ev.key === "Escape"){
        this.artworkModal.nativeElement.style.display = 'none';
      }
    console.log(`The user just pressed ${ev.key}!`);
  }