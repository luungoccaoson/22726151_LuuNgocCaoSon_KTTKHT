package com.example.ordermanagement.decorator;

public class GiftWrapDecorator extends OrderDecorator {

    public GiftWrapDecorator(OrderService orderService) {
        super(orderService);
    }

    public void process() {
        orderService.process();
        System.out.println("🎁 Gói quà");
    }
}