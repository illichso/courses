package com.serg.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

@Data
@AllArgsConstructor
@Document(collection = "user")
public class User extends Model{
    private String username;
    @JsonIgnore
    private String password;
    private List<SimpleGrantedAuthority> roles;
}
