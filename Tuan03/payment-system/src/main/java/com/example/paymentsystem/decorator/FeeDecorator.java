package com.example.paymentsystem.decorator;

public class FeeDecorator extends PaymentDecorator {

    public FeeDecorator(PaymentComponent component) {
        super(component);
    }

    @Override
    public double getAmount() {
        return component.getAmount() + 5;
    }
}