package com.example.taxsystem.state;

public class CalculatedTaxState implements TaxState {
    @Override
    public void handle() {
        System.out.println("Đã tính thuế");
    }
}