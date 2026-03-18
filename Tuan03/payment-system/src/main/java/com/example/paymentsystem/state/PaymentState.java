package com.example.paymentsystem.state;

import com.example.paymentsystem.context.PaymentContext;

public interface PaymentState {
    void handle(PaymentContext context);
}