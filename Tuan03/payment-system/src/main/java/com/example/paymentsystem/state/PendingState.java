package com.example.paymentsystem.state;

import com.example.paymentsystem.context.PaymentContext;

public class PendingState implements PaymentState {
    @Override
    public void handle(PaymentContext context) {
        System.out.println("Chưa thanh toán");
        context.setState(new ProcessingState());
    }
}