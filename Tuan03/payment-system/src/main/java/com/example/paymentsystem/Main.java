package com.example.paymentsystem;

import com.example.paymentsystem.strategy.*;
import com.example.paymentsystem.decorator.*;
import com.example.paymentsystem.context.PaymentContext;
import com.example.paymentsystem.state.*;

public class Main {
    public static void main(String[] args) {

        // ===== DECORATOR =====
        PaymentComponent payment =
                new FeeDecorator(
                        new DiscountDecorator(
                                new BasicPayment(100)
                        )
                );

        double finalAmount = payment.getAmount();
        System.out.println("Số tiền cuối: " + finalAmount);

        // ===== STRATEGY =====
        PaymentStrategy strategy = new CreditCardPayment();
        strategy.pay(finalAmount);

        // ===== STATE =====
        PaymentContext context = new PaymentContext();

        context.setState(new PendingState());
        context.process();

        context.process();

        context.process();
    }
}