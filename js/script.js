/*
Descrizione:
Attraverso una chiamata ajax all’API di boolean
https://flynn.boolean.careers/exercises/api/array/music
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.

BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

BONUS 2: Ordinare i dischi per anno di uscita.
*/

var app = new Vue({
  el: '#app',
  data: {
    select: "",
    albums: [],
    genreSelected: [],
  },
  methods: {
    filterGenre: function() {
      this.albums.forEach((album) => {
        if (this.genreSelected.includes(album.genre) == false) {
          this.genreSelected.push(album.genre);
        }
      });
    }
  },
  mounted: function() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response)=>{
        this.albums = response.data.response;
        this.filterGenre();
      });
  }
})
