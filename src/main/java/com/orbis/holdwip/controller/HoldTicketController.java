package com.orbis.holdwip.controller;
import com.orbis.holdwip.domain.hold.Defect;
import com.orbis.holdwip.domain.hold.Disposition;
import com.orbis.holdwip.domain.hold.Verification;
import com.orbis.holdwip.domain.hold.entity.HoldTicket;
import com.orbis.holdwip.domain.hold.entity.HoldTicketAttachment;
import com.orbis.holdwip.service.HoldTicketAttachmentService;
import com.orbis.holdwip.service.HoldTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

@RestController
public class HoldTicketController {

    @Autowired
    private HoldTicketService ticketService;

    @Autowired
    private HoldTicketAttachmentService holdTicketAttachmentService;

    @RequestMapping(value = "/holdTickets", method = RequestMethod.GET)
    List<HoldTicket> getHoldTickets(){ return ticketService.getHoldTickets(); }

    @RequestMapping(value = "/getOneHoldTicket", method = RequestMethod.GET)
    HoldTicket getOneHoldTicket(Long ticketId){return ticketService.getOneTicket(ticketId);}

    @RequestMapping(value = "/pagedHoldTickets", method = RequestMethod.GET)
    List<HoldTicket> getPagedTickets(){return ticketService.getPagedTickets();}

    @RequestMapping(value = "/getAllDefects", method = RequestMethod.GET)
    List<Defect> getAllDefects(){ return ticketService.getAllDefects();}

    @RequestMapping(value = "/getAllDispositions", method = RequestMethod.GET)
    List<Disposition> getAllDispositions(){ return ticketService.getAllDispositions();}

    @RequestMapping(value = "/getAllVerifications", method = RequestMethod.GET)
    List<Verification> getAllVerifications(){ return ticketService.getAllVerifications();}

    @RequestMapping(value = "/saveHoldTicket", method = RequestMethod.POST)
    boolean saveHoldTicket (@RequestParam(value = "holdTicket") String holdTicket){ return ticketService.saveHoldTicket(holdTicket);}

    @PostMapping(value = "/saveHoldAttachments")
    boolean saveHoldAttachments (@RequestPart(value = "file") MultipartFile file,
                                 @RequestPart(value = "id") String id){
       return holdTicketAttachmentService.saveAttachments(file, id);
    }

    @RequestMapping(value = "/getHoldTicketAttachments", method = RequestMethod.GET)
    Set<HoldTicketAttachment> getHoldAttachments(@RequestParam(value = "ticketId") long ticketId){return ticketService.getAttachments(ticketId);}

    @RequestMapping(value = "/deleteHoldTicketAttachment", method = RequestMethod.GET)
    boolean deleteAttachment(@RequestParam(value = "attachmentId") int attachmentId){return holdTicketAttachmentService.deleteAttachment(attachmentId);}
}
