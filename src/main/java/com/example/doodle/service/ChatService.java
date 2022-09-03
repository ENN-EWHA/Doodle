package com.example.doodle.service;

import com.example.doodle.dto.ChatDTO;
import com.example.doodle.mapper.ChatMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ChatService {
    @Autowired
    ChatMapper chatMapper;

    public List<ChatDTO> getChatLog(int clgid){
        return chatMapper.getChatlog(clgid);
    }
    public void insertChatLog(ChatDTO chatDTO){
        chatMapper.insertChatLog(chatDTO);
    }
}
