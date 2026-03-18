package com.example.paymentsystem.state;

import com.example.paymentsystem.context.PaymentContext;

public class FailedState implements PaymentState {
    @Override
    public void handle(PaymentContext context) {
        System.out.println("Thanh toán thất bại!");
    }
}