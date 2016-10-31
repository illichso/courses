import axios from 'axios';

class AuthorApi {
//const instance = axios.create({baseURL: 'http://localhost:8080'})

  static getAllAuthors() {
//    return axios.get('/api/authors', {port: 8080});
//    return axios.get('/api/authors');
//    return axios.get('/api/authors',
//      proxy: {
//          host: 'localhost',
//          port: 8080
//        }
//    );
  return axios.get('http://localhost:8080/api/authors ');
  }

  static save(author) {
    if(author.id) {
      return axios.put(`/api/authors/${author.id}`, author);
    } else {
      return axios.post('/api/authors', author);
    }
  }


  static deleteAuthor(authorId) {
    return axios.put(`/api/authors/${authorId}`, {});
  }



}

export default AuthorApi;
