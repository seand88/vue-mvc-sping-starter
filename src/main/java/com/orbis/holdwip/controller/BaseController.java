package com.orbis.holdwip.controller;
import com.orbis.holdwip.service.HoldTicketService;
import com.orbis.holdwip.service.SharedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BaseController {

@Autowired
HoldTicketService holdTicketService;

@Autowired
SharedService sharedService;

    @RequestMapping(value = "/wip-tickets", method = RequestMethod.GET)
    public String getWipTicketPage(){
        return "wiptickets";
    }

    @RequestMapping(value = "/hold-tickets", method = RequestMethod.GET)
    public String getHoldTickets(){
        return "holdtickets";
    }

    @RequestMapping(value = "/edit-hold-ticket/{ticketid}", method = RequestMethod.GET)
    public ModelAndView editHoldTicket(@PathVariable("ticketid") Long ticketid){
        ModelAndView modelAndView = new ModelAndView("editholdticket");
        String ticketJson = sharedService.getJsonForObject(holdTicketService.getOneTicket(ticketid));
        modelAndView.addObject("holdTicket",ticketJson);
        return modelAndView;
    }


}
