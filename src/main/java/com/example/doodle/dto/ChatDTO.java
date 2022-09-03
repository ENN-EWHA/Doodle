package com.example.doodle.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Time;

@Getter
@Setter
public class ChatDTO {
    private String userid;
    private int clgid;
    private String message;
}