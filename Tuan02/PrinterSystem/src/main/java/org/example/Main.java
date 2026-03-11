package org.example;

import org.example.document.Document;
import org.example.factory.DocumentFactory;
import org.example.singleton.Printer;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {

    public static void main(String[] args) {

        Printer printer = Printer.getInstance();

        Document doc1 = DocumentFactory.createDocument("PDF");
        Document doc2 = DocumentFactory.createDocument("WORD");
        Document doc3 = DocumentFactory.createDocument("IMAGE");

        printer.print(doc1);
        printer.print(doc2);
        printer.print(doc3);

    }

}