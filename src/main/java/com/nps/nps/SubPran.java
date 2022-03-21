package com.nps.nps;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
public class SubPran {
	
	
	
	@Id
	private int pran;
	private int finval;
	
	
	public int getPran() {
		return pran;
	}
	public void setPran(int pran) {
		this.pran = pran;
	}
	public int getFinval() {
		return finval;
	}
	public void setFinval(int finval) {
		this.finval = finval;
	}
	
	public SubPran(int pran, int finval) {
		this.pran = pran;
		this.finval = finval;
	}
	
	public SubPran() {};


}
