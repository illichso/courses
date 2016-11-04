package com.serg.rest;

import com.serg.dao.CourseRepository;
import com.serg.entities.Course;
import com.serg.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@RepositoryEventHandler
public class CourseEventHandler {

    @Autowired
    private CourseService courseService;
    @Autowired
    private CourseRepository courseRepository;

    @HandleBeforeCreate
    public void handleCourseCreate(Course course) {
        course.setId(courseService.generateIdFromTheTitle(course.getTitle()));
        if (courseRepository.findOne(course.getId()) != null) {
            throw new DuplicateKeyException("Unable to save course. Title duplication detected, please change it");
        }
    }

    @HandleAfterSave
    public void handleCourseDeleted(Course course) {
        if (isDeleted(course)) {
            courseRepository.delete(course);
        }
    }

    private boolean isDeleted(Course course) {
        return course.getTitle() == null &&
                course.getLength() == null &&
                course.getCategory() == null;
    }

}
