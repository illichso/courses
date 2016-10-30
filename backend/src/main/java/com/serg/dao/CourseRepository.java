package com.serg.dao;


import com.serg.entities.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface CourseRepository extends MongoRepository<Course, String> {
}
