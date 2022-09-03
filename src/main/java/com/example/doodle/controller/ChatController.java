package com.example.doodle.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.doodle.dto.ChatDTO;
import com.example.doodle.service.ChatService;

@RestController
@Slf4j

public class ChatController {
    @Autowired
    ChatService chatService;
    @GetMapping("/challenges/{clgid}/chat")
    public List<ChatDTO> ChatController(Model model, HttpServletRequest request, @PathVariable int clgid) {
        HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userid");
        List<ChatDTO> list = chatService.getChatLog(clgid);

        model.addAttribute("userid", userId);
        model.addAttribute("list", list);
        log.info(String.valueOf(list));
        return list;
    }

    @PostMapping("/challenges/{clgid}/chat")
    public void postChatting(@PathVariable int clgid, @RequestBody ChatDTO chatDTO){
        chatService.insertChatLog(chatDTO);
    }

}