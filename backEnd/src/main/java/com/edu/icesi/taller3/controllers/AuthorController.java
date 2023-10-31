package com.edu.icesi.taller3.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.icesi.taller3.persistence.models.Author;
import com.edu.icesi.taller3.persistence.models.Book;
import com.edu.icesi.taller3.services.IAuthorService;
import com.edu.icesi.taller3.services.IBookService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class AuthorController {
    @Autowired
    private IBookService bookService;
    @Autowired
    private IAuthorService authorService;

    @GetMapping("/autores")
    public Iterable<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    @GetMapping("/autores/{id}")
    public Optional<Author> getAuthorById(@PathVariable Long id) {
        System.out.println(id);
        Optional<Author> a = authorService.getAuthorById(id);
        return a;
    }

    @PostMapping("/autores")
    public Author createAuthor(@RequestBody Author author) {
        System.out.println("Creating author");
        return authorService.createAuthor(author);
    }

    @PutMapping("/autores/{id}")
    public Optional<Author> updateAuthor(@PathVariable Long id, @RequestBody Author updatedAuthor) {
        return authorService.updateAuthor(id, updatedAuthor);
    }

    @DeleteMapping("/autores/{id}")
    public boolean deleteAuthor(@PathVariable Long id) {
        return authorService.deleteAuthor(id);
    }

    @GetMapping("/libros")
    public List<Book> getAllLBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/libros/{id}")
    public Optional<Book> getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping("/libros")
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @PutMapping("/libros/{id}")
    public Optional<Book> updateBook(@PathVariable Long id, @RequestBody Book updatedBook) {
        return bookService.updateBook(id, updatedBook);
    }

    @DeleteMapping("/libros/{id}")
    public boolean deleteBook(@PathVariable Long id) {
        return bookService.deleteBook(id);
    }

    @GetMapping("/libros/{id}/authors")
    public List<Book> getAuthorsByBookId(@PathVariable Long id) {
        Author author = authorService.getAuthorById(id).get();
        return bookService.findByAuthor(author);
    }
}
