package com.serg.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Data
@NoArgsConstructor
abstract class Model implements Serializable {
    @Id
    private String id;
}
