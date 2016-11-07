package com.serg.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

import static java.lang.String.valueOf;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@Document(collection = "users")
public class User extends Model {
    private String username;
    @JsonIgnore
    private String password;
    private List<SimpleGrantedAuthority> roles;

    @Override
    public String getUniqueField() {
        return valueOf(getUsername());
    }
}
