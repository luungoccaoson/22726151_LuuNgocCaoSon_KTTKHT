package com.example.ordermanagement;

import com.example.ordermanagement.context.Order;
import com.example.ordermanagement.strategy.*;
import com.example.ordermanagement.decorator.*;

public class Main {
    public static void main(String[] args) {

        // STATE
        Order order = new Order();
        order.nextStep(); // New -> Processing
        order.nextStep(); // Processing -> Delivered

        // STRATEGY
        order.setShippingStrategy(new FastShipping());
        order.ship();

        // DECORATOR
        OrderService service = new BasicOrder();
        service = new InsuranceDecorator(service);
        service = new GiftWrapDecorator(service);

        service.process();
    }
}