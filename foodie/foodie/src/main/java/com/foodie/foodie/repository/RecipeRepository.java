package com.foodie.foodie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodie.foodie.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}

