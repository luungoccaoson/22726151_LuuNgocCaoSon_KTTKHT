package com.example.paymentsystem.state;

import com.example.paymentsystem.context.PaymentContext;

public class ProcessingState implements PaymentState {
    @Override
    public void handle(PaymentContext context) {
        System.out.println("Đang xử lý thanh toán...");
        context.setState(new SuccessState());
    }
}