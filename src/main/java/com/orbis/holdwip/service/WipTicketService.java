package com.orbis.holdwip.service;

import com.orbis.holdwip.data.repository.WipTicketRepository;
import com.orbis.holdwip.domain.wip.entity.WipTicket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("wipTicketService")
public class WipTicketService {

    @Autowired
    private WipTicketRepository wipTicketRepository;


    public List<WipTicket> getWipTickets(){
        return wipTicketRepository.findAll();
    }

    public WipTicket getOneTicket(Long ticketId){
        return wipTicketRepository.getOne(ticketId);
    }

}
