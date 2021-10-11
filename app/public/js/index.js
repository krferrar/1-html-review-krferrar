const Book1 = {
    data() {
      return {
        books: [],
        selectedStudent: null,
        offers: []
      }
    },
    computed: {},
    methods: {
       
      //  prettyData(d) {
       //     return dayjs(d)
         //   .format('D MMM YYYY')
      //  },
      //  prettyDollar(n) {
      //      const d = new Intl.NumberFormat("en-US").format(n);
      //      return "$ " + d;
      //  },
       // selectStudent(s) {
       //     if (s == this.selectedStudent) {
       //         return;
        //    }
       //     this.selectedStudent = s;
        //    this.offers = [];
         //   this.fetchOfferData(this.selectedStudent);
        //},
        fetchBooksData() {
          fetch('/api/books/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.books = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
      }
    },
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(Book1).mount('#bookApp');

