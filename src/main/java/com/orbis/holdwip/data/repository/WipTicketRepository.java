package com.orbis.holdwip.data.repository;

import com.orbis.holdwip.domain.wip.entity.WipTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WipTicketRepository extends JpaRepository<WipTicket, Long> {
}
