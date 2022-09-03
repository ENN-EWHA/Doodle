package com.example.doodle.chat;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.doodle.chat.ChatLog;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChatMappers {
    List<ChatLog> getChatlog(int clgid);
}
