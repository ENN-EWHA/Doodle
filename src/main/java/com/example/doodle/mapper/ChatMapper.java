package com.example.doodle.mapper;

import java.util.List;

import com.example.doodle.dto.ChatDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChatMapper {
    List<ChatDTO> getChatlog(int clgid);
    void insertChatLog(ChatDTO chatDTO);
}
