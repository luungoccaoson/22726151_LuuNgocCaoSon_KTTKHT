package com.example.taxsystem;

import com.example.taxsystem.model.Product;
import com.example.taxsystem.decorator.*;
import com.example.taxsystem.context.TaxContext;
import com.example.taxsystem.state.*;

public class Main {
    public static void main(String[] args) {

        Product product = new Product("Laptop", 1000);

        // Decorator: VAT + Luxury
        TaxComponent tax = new LuxuryDecorator(
                new VATDecorator(
                        new BaseTax()
                )
        );

        double totalTax = tax.calculateTax(product.getPrice());

        System.out.println("Thuế: " + totalTax);
        System.out.println("Tổng tiền: " + (product.getPrice() + totalTax));

        // State
        TaxContext context = new TaxContext();

        context.setState(new NoTaxState());
        context.applyState();

        context.setState(new CalculatedTaxState());
        context.applyState();
    }
}