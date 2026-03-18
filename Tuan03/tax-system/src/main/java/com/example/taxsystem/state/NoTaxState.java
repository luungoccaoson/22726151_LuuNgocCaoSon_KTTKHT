package com.example.taxsystem.state;

public class NoTaxState implements TaxState {
    @Override
    public void handle() {
        System.out.println("Chưa tính thuế");
    }
}