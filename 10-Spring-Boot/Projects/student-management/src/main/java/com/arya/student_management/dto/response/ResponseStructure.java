package com.arya.student_management.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor


public class ResponseStructure<T> {
    private int statusCode;
    private String message;
    private T data;

}
