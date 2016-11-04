package com.serg.service;

import com.ibm.icu.text.Transliterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import static java.lang.String.valueOf;

@Service
public class CourseService {

    private final Transliterator cyrillicTransliterator;

    @Autowired
    public CourseService(Transliterator cyrillicTransliterator) {
        this.cyrillicTransliterator = cyrillicTransliterator;
    }

    public String generateIdFromTheTitle(String title) {
        return cyrillicTransliterator.transform(valueOf(title)) //Transforms cyrillic to latin
                .replaceAll("[^a-zA-Z0-9]", " ") //Filters all special symbols making them spaces
                .trim()
                .replaceAll("\\s+", " ") //Replace all multispaces with single
                .replace(' ', '-') //Make them dashes and lowercase forming correct ID
                .toLowerCase();
    }
}
