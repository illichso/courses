package com.serg.service

import com.serg.AbstractMvcSpec
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.context.WebApplicationContext

class CourseServiceTest extends AbstractMvcSpec {
    @Autowired
    private CourseService courseService

    def "check course id constructor"() {
        given:
        def title = "{}"
        when:
        def generatedId = courseService.generateIdFromTheTitle(title)

        then:
        generatedId =="{}"
    }
}
