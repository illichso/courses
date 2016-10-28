package com.serg.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@Document(collection = "course")
public class Course extends Model {
    private String title;
    private String watchHref;
    private String authorId;
    private String length;
    private String category;
}
