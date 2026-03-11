package org.example.singleton;

import org.example.document.Document;

public class Printer {

    private static Printer instance;

    private Printer() {
        System.out.println("Printer started...");
    }

    public static Printer getInstance() {

        if (instance == null) {
            instance = new Printer();
        }

        return instance;
    }

    public void print(Document document) {
        document.print();
    }

}
