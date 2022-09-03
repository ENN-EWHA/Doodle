package com.example.doodle.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class FriendDTO {
    private String relatingUserID;

    private String relatedUserID;

    private boolean relationType;

    private Date acceptDate;

}
