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
import com.edu.icesi.taller3.services.IAuthorService;

import java.util.Optional;

@RestController
@RequestMapping("/autores")
public class AuthorController {
    @Autowired
    private IAuthorService authorService;


    @GetMapping
    public Iterable<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    @GetMapping("/{id}")
    public Optional<Author> getAuthorById(@PathVariable Long id) {
        System.out.println(id);
        Optional<Author> a= authorService.getAuthorById(id);
        return a;
    }

    @PostMapping
    public Author createAuthor(@RequestBody Author author) {
        System.out.println("Creating author");
        return authorService.createAuthor(author);
    }

    @PutMapping("/{id}")
    public Optional<Author> updateAuthor(@PathVariable Long id, @RequestBody Author updatedAuthor) {
        return authorService.updateAuthor(id, updatedAuthor);
    }

    @DeleteMapping("/{id}")
    public boolean deleteAuthor(@PathVariable Long id) {
        return authorService.deleteAuthor(id);
    }
}
