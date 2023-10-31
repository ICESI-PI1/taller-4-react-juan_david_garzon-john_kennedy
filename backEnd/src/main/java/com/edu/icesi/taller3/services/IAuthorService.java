package com.edu.icesi.taller3.services;


import java.util.Optional;


import com.edu.icesi.taller3.persistence.models.Author;

public interface IAuthorService {

    Iterable<Author> getAllAuthors();

    Optional<Author> getAuthorById(Long id);

    Author createAuthor(Author author);

    Optional<Author> updateAuthor(Long id, Author updatedAuthor);

    boolean deleteAuthor(Long id);
}

