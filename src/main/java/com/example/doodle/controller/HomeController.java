package com.example.doodle.controller;


import java.util.Collection;
import javax.servlet.http.HttpServletRequest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.doodle.chat.ChatRoom;
import com.example.doodle.chat.ChatRoomRepository;

@Controller
@Slf4j
@RequestMapping("/multiRoom")
public class HomeController {

    @GetMapping("/home")
    public String homeController(Model model, HttpServletRequest request) {
        Collection<ChatRoom> chatRooms = ChatRoomRepository.chatRooms;

        model.addAttribute("collection", chatRooms);
        return "home";
    }
}