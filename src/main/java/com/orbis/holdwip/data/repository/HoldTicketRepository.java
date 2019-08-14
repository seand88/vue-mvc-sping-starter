package com.orbis.holdwip.data.repository;
import com.orbis.holdwip.domain.hold.entity.HoldTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoldTicketRepository extends JpaRepository<HoldTicket, Long> {
}
