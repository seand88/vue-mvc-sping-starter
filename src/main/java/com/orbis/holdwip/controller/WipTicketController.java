package com.orbis.holdwip.controller;

import com.orbis.holdwip.domain.wip.entity.WipTicket;
import com.orbis.holdwip.service.WipTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WipTicketController {

    @Autowired
    private WipTicketService ticketService;

    @RequestMapping("/wipTickets")
    List<WipTicket> getWipTickets(){ return ticketService.getWipTickets(); }

    @RequestMapping("/getOneWipTicket")
    WipTicket getOneWipTicket(Long ticketId){ return ticketService.getOneTicket(ticketId); }

}
