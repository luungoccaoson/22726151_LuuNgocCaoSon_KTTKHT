package com.example.taxsystem.decorator;

public class LuxuryDecorator extends TaxDecorator {

    public LuxuryDecorator(TaxComponent component) {
        super(component);
    }

    @Override
    public double calculateTax(double price) {
        return component.calculateTax(price) + price * 0.2;
    }
}