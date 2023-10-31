package com.edu.icesi.taller3.services.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.Author;
import com.edu.icesi.taller3.persistence.models.Book;
import com.edu.icesi.taller3.persistence.repositories.BookRepository;
import com.edu.icesi.taller3.services.IBookService;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Optional<Book> updateBook(Long id, Book updatedBook) {
        Optional<Book> existingBook = bookRepository.findById(id);
        if (existingBook.isPresent()) {
            updatedBook.setId(id);
            return Optional.of(bookRepository.save(updatedBook));
        }
        return Optional.empty();
    }

    @Override
    public boolean deleteBook(Long id) {
        Optional<Book> bookToDelete = bookRepository.findById(id);
        if (bookToDelete.isPresent()) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public List<Book> findByAuthor(Author author) {
        return bookRepository.findByAuthor(author);
    }
}

