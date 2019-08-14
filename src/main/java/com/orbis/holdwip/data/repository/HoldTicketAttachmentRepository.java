package com.orbis.holdwip.data.repository;

import com.orbis.holdwip.domain.hold.entity.HoldTicketAttachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoldTicketAttachmentRepository extends JpaRepository<HoldTicketAttachment, Long> {

}
