package com.serg.entities

import spock.lang.Specification

class LoginUserTest extends Specification{

    def "check user constructor"() {
        given:
            def user = new User("name1", null, null)
        when:
            def name = user.username

        then:
            name == 'name1'
        println user
    }
}
