package com.example.paymentsystem.context;

import com.example.paymentsystem.state.PaymentState;

public class PaymentContext {
    private PaymentState state;

    public void setState(PaymentState state) {
        this.state = state;
    }

    public void process() {
        state.handle(this);
    }
}