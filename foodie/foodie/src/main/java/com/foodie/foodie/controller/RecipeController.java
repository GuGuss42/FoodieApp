package com.foodie.foodie.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodie.foodie.model.Recipe;
import com.foodie.foodie.repository.RecipeRepository;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addRecipe(@RequestBody Recipe recipe) {
        Recipe saved = recipeRepository.save(recipe);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
}

