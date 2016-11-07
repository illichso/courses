package com.serg.auth

import com.serg.AbstractMvcSpec
import org.springframework.http.HttpStatus
import org.springframework.security.test.context.support.WithMockUser

class AuthenticationSpec extends AbstractMvcSpec {

    def "unauthenticated users can get course list"() {
        when:
            def res = get("/api/courses")

        then:
            res.status == HttpStatus.OK
    }

    @WithMockUser(roles = "ADMIN")
    def "authenticated users can get course list"() {
        when:
            def res = get("/api/courses")

        then:
            res.status == HttpStatus.OK
    }

    def "unauthenticated users can get author list"() {
        when:
        def res = get("/api/authors")

        then:
        res.status == HttpStatus.OK
    }

    @WithMockUser(roles = "ADMIN")
    def "authenticated users can get author list"() {
        when:
        def res = get("/api/authors")

        then:
        res.status == HttpStatus.OK
    }
}