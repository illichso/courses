package com.serg.rest;

import com.serg.entities.Author;
import com.serg.entities.Course;
import com.serg.entities.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RestMvcConfig extends RepositoryRestConfigurerAdapter {
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Author.class);
        config.exposeIdsFor(Course.class);
        config.exposeIdsFor(User.class);
        config.setBasePath("/api");
        config.setReturnBodyForPutAndPost(true);
    }

    @Bean
    public EventHandler eventHandler() {
        return new EventHandler();
    }

}