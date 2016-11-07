package com.serg.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

import static java.lang.String.valueOf;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@Document(collection = "authors")
public class Author extends Model {
    private String firstName;
    private String lastName;

    public String getFullName(){
        return valueOf(getFirstName()) + "-" + valueOf(getLastName());
    }

    @Override
    public String getUniqueField() {
        return getFullName();
    }
}
