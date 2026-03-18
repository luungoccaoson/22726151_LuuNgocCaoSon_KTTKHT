package com.example.ordermanagement.decorator;

public class InsuranceDecorator extends OrderDecorator {

    public InsuranceDecorator(OrderService orderService) {
        super(orderService);
    }

    public void process() {
        orderService.process();
        System.out.println("➕ Thêm bảo hiểm");
    }
}