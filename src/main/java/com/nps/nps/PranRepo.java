package com.nps.nps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PranRepo extends JpaRepository<SubPran, Integer>{
	
}