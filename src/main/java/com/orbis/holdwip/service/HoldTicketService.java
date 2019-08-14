package com.orbis.holdwip.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.orbis.holdwip.data.repository.HoldTicketRepository;
import com.orbis.holdwip.domain.hold.Defect;
import com.orbis.holdwip.domain.hold.Disposition;
import com.orbis.holdwip.domain.hold.Verification;
import com.orbis.holdwip.domain.hold.entity.HoldTicket;
import com.orbis.holdwip.domain.hold.entity.HoldTicketAttachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service("holdTicketService")
public class HoldTicketService {

    @Autowired
    private HoldTicketRepository holdTicketRepository;

    ObjectMapper mapper = new ObjectMapper();


    public List<Defect> getAllDefects() { return Defect.getDefects(); }

    public List<Disposition> getAllDispositions() { return Disposition.getDispositions(); }

    public List<Verification> getAllVerifications() { return Verification.getVerifications(); }

    public HoldTicket getOneTicket(Long ticketId) { return holdTicketRepository.getOne(ticketId); }


    public List<HoldTicket> getHoldTickets() {

           List<HoldTicket> tickets = holdTicketRepository.findAll();
           return tickets;

    }


    public List<HoldTicket> getPagedTickets() {

        Page<HoldTicket> page =  holdTicketRepository.findAll(PageRequest.of(0,10));
        return page.getContent();

    }


    public Set<HoldTicketAttachment> getAttachments(long ticketId) {

        Optional<HoldTicket> ticket = holdTicketRepository.findById(ticketId);
        if(ticket.isPresent()) return ticket.get().getAttachments();
        else return null;

    }


    public boolean saveHoldTicket(String jsonHoldTicket) {

        boolean success = false;

        try {

            HoldTicket holdTicket = mapper.readValue(jsonHoldTicket, HoldTicket.class);
            holdTicketRepository.save(holdTicket);
            success = true;

        } catch (Exception ex) {

            ex.printStackTrace();

           }

           return success;

       }
}
