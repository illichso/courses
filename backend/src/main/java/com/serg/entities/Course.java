package com.serg.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

import static java.lang.String.valueOf;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@Document(collection = "courses")
public class Course extends Model {
    private String title;
    private String watchHref;
    private String authorId;
    private String length;
    private String category;

    @Override
    public String getUniqueField() {
        return valueOf(getTitle());
    }
}
