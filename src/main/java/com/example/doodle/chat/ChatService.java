package com.example.doodle.chat;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ChatService {
    @Autowired
    ChatMappers chatMappers;

    public List<ChatLog> getChatLog(int clgid){
        return chatMappers.getChatlog(clgid);
    }
}