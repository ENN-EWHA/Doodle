package com.example.doodle.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.doodle.chat.ChatLog;
import com.example.doodle.chat.ChatService;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/multiRoom")
public class ChatController {
    @Autowired
    ChatService chatService;
    @GetMapping("/challenges/{clgid}/chat")
    public List<ChatLog> ChatController(Model model, HttpServletRequest request, @PathVariable int clgid) {
        HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userid");
        List<ChatLog> list = chatService.getChatLog(clgid);

        model.addAttribute("userid", userId);
        model.addAttribute("list", list);
        log.info(String.valueOf(list));
        return list;
    }
}