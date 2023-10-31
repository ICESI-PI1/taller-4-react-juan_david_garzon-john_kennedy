package com.edu.icesi.taller3.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.Author;
import com.edu.icesi.taller3.persistence.repositories.AuthorRepository;
import com.edu.icesi.taller3.services.IAuthorService;

import java.util.Optional;

@Service
public class AuthorServiceImpl implements IAuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public Iterable<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Optional<Author> getAuthorById(Long id) {
        return authorRepository.findById(id);
    }

    @Override
    public Author createAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public Optional<Author> updateAuthor(Long id, Author updatedAuthor) {
        Optional<Author> existingAuthor = authorRepository.findById(id);
        if (existingAuthor.isPresent()) {
            updatedAuthor.setId(id);
            return Optional.of(authorRepository.save(updatedAuthor));
        }
        return Optional.empty();
    }

    @Override
    public boolean deleteAuthor(Long id) {
        Optional<Author> authorToDelete = authorRepository.findById(id);
        if (authorToDelete.isPresent()) {
            authorRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

