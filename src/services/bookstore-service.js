export default class BookstoreService {

    data = [
        {   id:1,
            title:'Production macro',
            autor: 'Susan J. Fowler',
            price: 32,
            coverImage:'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
            

        {   id:2,
            title:'Reles it',
            autor: 'Mark cun',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
    ];


    getBooks() {
        return new Promise ((resolve) => {
            setTimeout(() => {
                
                resolve(this.data)
            }, 700)
        })
    }
}