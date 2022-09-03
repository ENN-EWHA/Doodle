package com.example.doodle.chat;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

public class ChatLog {
    String userId;
    String message;
    int chatId;

    public ChatLog(String userId, String message, int chatId) {
        this.userId = userId;
        this.message = message;
        this.chatId = chatId;
    }

    public String getUserId() {
        return userId;
    }

    public String getMessage() {
        return message;
    }

    public int getChatId() {
        return chatId;
    }



}