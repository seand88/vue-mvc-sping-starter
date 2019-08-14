package com.orbis.holdwip.service;

import com.orbis.holdwip.data.repository.HoldTicketAttachmentRepository;
import com.orbis.holdwip.domain.hold.entity.HoldTicket;
import com.orbis.holdwip.domain.hold.entity.HoldTicketAttachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class HoldTicketAttachmentService {

    @Autowired
    HoldTicketAttachmentRepository holdTicketAttachmentRepository;
    @Autowired
    HoldTicketService holdTicketService;

    public boolean saveAttachments( MultipartFile file, String id){
        boolean success = false;
        if(file != null) {
            try {
                long holdTicketId = (long) Integer.parseInt(id);
                HoldTicket holdTicket = holdTicketService.getOneTicket(holdTicketId);
                HoldTicketAttachment attachment = new HoldTicketAttachment();
                attachment.setAttachmentName(file.getOriginalFilename());
                attachment.setAttachment(file.getBytes());
                attachment.setHoldTicket(holdTicket);
                holdTicketAttachmentRepository.save(attachment);
                success = true;
            } catch (Exception ex){
                ex.printStackTrace();
            }
        }
        return success;
    }

    public boolean deleteAttachment(int attachmentId){
        boolean success = false;

        try {
            holdTicketAttachmentRepository.deleteById((long)attachmentId);
            success = true;
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return success;
    }
}
