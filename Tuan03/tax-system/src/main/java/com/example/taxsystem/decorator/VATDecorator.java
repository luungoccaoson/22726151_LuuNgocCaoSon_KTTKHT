package com.example.taxsystem.decorator;

public class VATDecorator extends TaxDecorator {

    public VATDecorator(TaxComponent component) {
        super(component);
    }

    @Override
    public double calculateTax(double price) {
        return component.calculateTax(price) + price * 0.1;
    }
}