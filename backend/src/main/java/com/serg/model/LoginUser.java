package com.serg.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;

import java.io.Serializable;

import static lombok.AccessLevel.NONE;

@Data
@AllArgsConstructor
public class LoginUser implements Serializable {
    @Setter(NONE)
    private String userName;
    @Setter(NONE)
    private String token;
    @Setter(NONE)
    private boolean authenticated;
}

