package com.example.taxsystem.decorator;

public class BaseTax implements TaxComponent {
    @Override
    public double calculateTax(double price) {
        return 0;
    }
}