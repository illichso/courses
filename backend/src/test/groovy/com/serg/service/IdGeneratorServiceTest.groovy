package com.serg.service

import com.serg.AbstractMvcSpec
import org.springframework.beans.factory.annotation.Autowired

class IdGeneratorServiceTest extends AbstractMvcSpec {
    @Autowired
    private IdGeneratorService courseService

    def "check course id constructor"() {
        given:
        def title = "{}"
        when:
        def generatedId = courseService.generateIdFromString(title)

        then:
        generatedId =="{}"
    }
}
