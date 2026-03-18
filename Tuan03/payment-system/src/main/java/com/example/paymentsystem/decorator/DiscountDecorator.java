package com.example.paymentsystem.decorator;

public class DiscountDecorator extends PaymentDecorator {

    public DiscountDecorator(PaymentComponent component) {
        super(component);
    }

    @Override
    public double getAmount() {
        return component.getAmount() * 0.9;
    }
}