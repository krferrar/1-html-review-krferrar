const Book1 = {
    data() {
      return {
        books: [],
        selectedBook: null,
        bookForm: {}
      }
    },
    computed: {},
    methods: {
       
      //  prettyData(d) {
       //     return dayjs(d)
         //   .format('D MMM YYYY')
      //  },
       prettyDollar(n) {
           const d = new Intl.NumberFormat("en-US").format(n);
           return "$ " + d;
       },
      selectBook(s) {
           if (b == this.selectedBook) {
                return;
            }
            this.selectedBook = b;
            this.books = [];
           this.fetchBooksData(this.selectedBook);
        },
        fetchBooksData() {
          fetch('/api/books/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.books = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          });
    },
    postNewBook(evt) {
      //this.bookForm.bookId = this.selectedBook.id;        
      
      console.log("Posting!", this.bookForm);

      fetch('api/books/create.php', {
          method:'POST',
          body: JSON.stringify(this.bookForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;
          
          // reset the form
          this.bookForm = {};
        });
    }
},
      
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(Book1).mount('#bookApp');

