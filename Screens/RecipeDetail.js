import React from "react";
import { View, Text, StyleSheet } from "react-native";

/* 🧩 Reusable FoodCard component
   -> Displays the food name + recipe inside a styled box
*/

const Pics = [ 
  {},
  {},
  {},
  {},
  {},
]
function FoodCard({ name, recipe }) {
  return (
    <View style={styles.card}>
      <Text style={styles.foodName}>{name}</Text>
      <Text style={styles.recipe}>{recipe}</Text>
    </View>
  );
}

/* 🇮🇹 Italian Food */
export function ItaFood() {
  const foods = {
    Pizza: "Mix dough, tomato sauce, cheese, bake for 15 min.",
    Carbonara: "Cook pasta, mix with eggs, cheese, pancetta, and pepper.",
    Lasagne: "Layer pasta, meat sauce, bechamel, cheese, then bake.",
    Tagliatelle: "Fresh pasta served with bolognese or cream sauce.",
    Ravioli: "Stuff pasta with cheese or spinach and boil for 5 min.",
    Ossobuco: "Cook veal shanks with broth, wine, and vegetables.",
  };

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => (
        <FoodCard key={name} name={name} recipe={recipe} />
      ))}
    </View>
  );
}

/* 🇫🇷 French Food */
export function FrenchFood() {
  const foods = {
    Croissant: "Bake buttery layered dough until golden brown.",
    Ratatouille: "Stew vegetables (tomato, eggplant, zucchini, pepper).",
    Quiche: "Bake eggs, cheese, and vegetables in a pastry crust.",
    Crêpes: "Thin pancakes served with jam, Nutella, or fruit.",
    Cassoulet: "Slow-cooked beans with duck, sausage, and pork.",
  };

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => (
        <FoodCard key={name} name={name} recipe={recipe} />
      ))}
    </View>
  );
}

/* 🇹🇳 Tunisian Food */
export function TunisianFood() {
  const foods = {
    Couscous: "Steamed semolina with vegetables and meat or fish.",
    Brik: "Crispy pastry with egg and tuna filling, deep-fried.",
    Ojja: "Eggs cooked in tomato sauce with merguez sausage.",
    Lablabi: "Chickpea soup served with olive oil and harissa.",
    Mloukhia: "Jute leaves stew with beef, slow-cooked in olive oil.",
  };

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => (
        <FoodCard key={name} name={name} recipe={recipe} />
      ))}
    </View>
  );
}

/* 🇲🇽 Mexican Food */
export function MexicanFood() {
  const foods = {
    Tacos: "Corn tortillas filled with beef, lettuce, and salsa.",
    Enchiladas: "Tortillas rolled with meat, covered in chili sauce.",
    Guacamole: "Mashed avocado with lime, onion, and tomato.",
    Quesadilla: "Tortilla with melted cheese and meat, grilled.",
    Churros: "Fried dough sticks coated in sugar and cinnamon.",
  };

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => (
        <FoodCard key={name} name={name} recipe={recipe} />
      ))}
    </View>
  );
}

/* 🎨 Common Styles */
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  card: {
    width: "40%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a085",
    marginBottom: 6,
    textAlign: "center",
  },
  recipe: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },
});
