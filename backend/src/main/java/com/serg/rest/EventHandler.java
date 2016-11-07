package com.serg.rest;

import com.serg.dao.AuthorRepository;
import com.serg.dao.CourseRepository;
import com.serg.entities.Author;
import com.serg.entities.Course;
import com.serg.service.IdGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@RepositoryEventHandler
public class EventHandler {

    @Autowired
    private IdGeneratorService idGeneratorService;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private AuthorRepository authorRepository;

    @HandleBeforeCreate
    public void handleCourseCreate(Course course) {
        course.setId(idGeneratorService.generateIdFromString(course.getUniqueField()));
        if (courseRepository.findOne(course.getId()) != null) {
            throw new DuplicateKeyException("Unable to save course. Title duplication detected, please change it");
        }
    }

    @HandleBeforeCreate
    public void handleAuthorCreate(Author author) {
        author.setId(idGeneratorService.generateIdFromString(author.getUniqueField()));
        if (authorRepository.findOne(author.getId()) != null) {
            throw new DuplicateKeyException("Unable to save author. Name duplication detected, please change it");
        }
    }

    @HandleAfterSave
    public void handleCourseDeleted(Course course) {
        if (isDeleted(course)) {
            courseRepository.delete(course);
        }
    }

    @HandleAfterSave
    public void handleAuthorDeleted(Author author) {
        if (isDeleted(author)) {
            authorRepository.delete(author);
        }
    }

    private boolean isDeleted(Author author) {
        return author.getFirstName() == null &&
                author.getLastName() == null;
    }

    private boolean isDeleted(Course course) {
        return course.getTitle() == null &&
                course.getLength() == null &&
                course.getCategory() == null;
    }
}
