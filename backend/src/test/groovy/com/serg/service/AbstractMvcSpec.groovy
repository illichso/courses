package com.serg.service

import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers
import org.springframework.session.MapSessionRepository
import org.springframework.session.web.http.CookieHttpSessionStrategy
import org.springframework.session.web.http.SessionRepositoryFilter
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import org.springframework.web.context.WebApplicationContext
import spock.lang.Shared
import spockmvc.SpockMvcSpec

@ContextConfiguration // not mentioned by docs, but had to include this for Spock to startup the Spring context
@SpringBootTest
@WebAppConfiguration
abstract class AbstractMvcSpec extends SpockMvcSpec {

    @Shared
    private def sessionRepository = new MapSessionRepository()

    @Override
    MockMvc buildMockMvc(WebApplicationContext wac) {
        def sessionFilter = new SessionRepositoryFilter(sessionRepository)
        sessionFilter.httpSessionStrategy = new CookieHttpSessionStrategy()

        MockMvcBuilders
                .webAppContextSetup(wac)
                .apply(SecurityMockMvcConfigurers.springSecurity())
                .addFilter(sessionFilter)
                .build()
    }
}
