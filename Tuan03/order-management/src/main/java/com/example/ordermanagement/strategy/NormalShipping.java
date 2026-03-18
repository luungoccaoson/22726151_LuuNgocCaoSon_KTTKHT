package com.example.ordermanagement.strategy;

public class NormalShipping implements ShippingStrategy {
    public void ship() {
        System.out.println("Giao hàng thường 📦");
    }
}