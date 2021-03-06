package com.serg.dao;


import com.serg.entities.Author;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource
public interface AuthorRepository extends MongoRepository<Author, String> {
}
