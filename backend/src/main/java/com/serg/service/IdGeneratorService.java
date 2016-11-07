package com.serg.service;

import com.ibm.icu.text.Transliterator;
import com.serg.entities.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import static java.lang.String.valueOf;

@Service
public class IdGeneratorService {

    private final Transliterator cyrillicTransliterator;

    @Autowired
    public IdGeneratorService(Transliterator cyrillicTransliterator) {
        this.cyrillicTransliterator = cyrillicTransliterator;
    }

    public String generateIdFromString(String string) {
        return cyrillicTransliterator.transform(string) //Transforms cyrillic to latin
//                .replaceAll("[^a-zA-Z0-9]", " ") //Filters all special symbols making them spaces
                .replaceAll("\\\\.[]]*+-^$|\\'\\\"\\{\\}", " ") //Filters all special symbols making them spaces
                .trim()
                .replaceAll("\\s+", " ") //Replace all multispaces with single
                .replace(' ', '-') //Make them dashes and lowercase forming correct ID
                .toLowerCase();
    }
}
