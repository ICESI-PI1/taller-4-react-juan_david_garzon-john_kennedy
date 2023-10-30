package com.edu.icesi.taller3.services;

import java.util.List;
import java.util.Optional;

import com.edu.icesi.taller3.persistence.models.Author;
import com.edu.icesi.taller3.persistence.models.Book;

public interface IBookService {

    List<Book> getAllBooks();

    Optional<Book> getBookById(Long id);

    Book createBook(Book book);

    Optional<Book> updateBook(Long id, Book updatedBook);

    boolean deleteBook(Long id);

    List<Book> findByAuthor(Author author);
}
