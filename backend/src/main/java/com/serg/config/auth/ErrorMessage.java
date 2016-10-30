package com.serg.config.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;
import java.io.Serializable;
import static lombok.AccessLevel.NONE;

@Data
@AllArgsConstructor
class ErrorMessage implements Serializable {
    @Setter(NONE)
    private String message;
    @Setter(NONE)
    private String messageKey;
}
