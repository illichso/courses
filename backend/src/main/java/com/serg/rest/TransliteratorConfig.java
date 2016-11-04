package com.serg.rest;

import com.ibm.icu.text.Transliterator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static com.ibm.icu.text.Transliterator.getInstance;

@Configuration
public class TransliteratorConfig {

    @Bean
    public Transliterator cyrillictransliterator() {
        return getInstance("Any-Latin;");
    }

}
