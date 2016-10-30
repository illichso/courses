package com.serg.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import static lombok.AccessLevel.NONE;

@Data
@NoArgsConstructor
public class Credentials implements Serializable{
    @Setter(NONE)
    private String username;
    @Setter(NONE)
    private String password;
}

