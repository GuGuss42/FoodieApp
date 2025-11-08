package com.foodie.foodie;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ApiKeyChecker implements CommandLineRunner {

    @Value("${DEEPSEEK_API_KEY}")
    private String apiKey;

    @Override
    public void run(String... args) throws Exception {
        if (apiKey == null || apiKey.isEmpty()) {
            System.out.println("⚠️ Google AI API Key is NOT loaded from the system environment!");
        } else {
            System.out.println("✅ Google AI API Key loaded successfully: " + apiKey);
        }
    }
}
