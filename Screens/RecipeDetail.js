import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

/* 🧩 Reusable FoodCard component
   -> Displays the food name + image + recipe inside a styled box
*/
function FoodCard({ name, recipe, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.foodImage} />
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

  const Pics = [
    { name: "Pizza", uri: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" },
    { name: "Carbonara", uri: "https://www.simplyrecipes.com/thmb/4rVYqq80fd-kHTx25yKtd8bvHzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Pasta-Carbonara-LEAD-4-3c433b3057e7465b8738b43de762df06.jpg" },
    { name: "Lasagne", uri: "https://d2j6dbq0eux0bg.cloudfront.net/images/67020780/3103524452.jpg" },
    { name: "Tagliatelle", uri: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/50B55A68-5823-4CDD-89D2-B10BB4479F70/Derivates/0894C51E-6880-4A9B-BFFA-CD35D7E3B0AF.jpg" },
    { name: "Ravioli", uri: "https://www.readyseteat.ca/sites/g/files/qyyrlu541/files/uploadedImages/Chef-Boyardee_Ravioli-Florentine.jpg" },
    { name: "Ossobuco", uri: "https://www.simplyrecipes.com/thmb/2AjZWxY7oJ7jkMRtrSjtkQAtvQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__12__Osso-Buco-LEAD-5-a816159cbe9740a5b21f3c1e515f9da2.jpg" },
  ];

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => {
        const img = Pics.find((p) => p.name === name)?.uri;
        return <FoodCard key={name} name={name} recipe={recipe} image={img} />;
      })}
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

  const Pics = [
    { name: "Croissant", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38zMDAgGqlp8oteIGqmqXcXXAi4CzKgJ9oA&s" },
    { name: "Ratatouille", uri: "https://www.kikkoman.fr/fileadmin/_processed_/1/8/csm_1075-recipe-page-Saffron-scented-Ratatouille_desktop_5ddfe5fdbf.jpg" },
    { name: "Quiche", uri: "https://www.giallozafferano.fr/images/49-4950/quiche-vide-frigo_1200x800.jpg" },
    { name: "Crêpes", uri: "https://thatrecipe.com/wp-content/uploads/2016/01/basic-crepes-pst.jpg" },
    { name: "Cassoulet", uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cassoulet.cuit.jpg/330px-Cassoulet.cuit.jpg" },
  ];

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => {
        const img = Pics.find((p) => p.name === name)?.uri;
        return <FoodCard key={name} name={name} recipe={recipe} image={img} />;
      })}
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

  const Pics = [
    { name: "Couscous", uri: "https://www.scienceandcrumbs.com/wp-content/uploads/2021/09/tunisian-couscous-02.jpg" },
    { name: "Brik", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8Ds36TddA4K--BxcfZ36iQFwkvAKh2Mh8Q&s" },
    { name: "Ojja", uri: "https://theafrikanstore.com/cdn/shop/articles/ojja_-_afrifoodnetwork.com_460x@2x.webp?v=1692033994" },
    { name: "Lablabi", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5Bz0HZ1pOFDVwZ4R3LpwWcWW8s7es3MzPA&s" },
    { name: "Mloukhia", uri: "https://www.saveur.com/uploads/2019/02/08/WN3ATNBG47ABPBQPGJBDEE4XUQ.jpg?format=webp&optimize=high&precrop=1%3A1%2Csmart" },
  ];

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => {
        const img = Pics.find((p) => p.name === name)?.uri;
        return <FoodCard key={name} name={name} recipe={recipe} image={img} />;
      })}
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

  const Pics = [
    { name: "Tacos", uri: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg" },
    { name: "Enchiladas", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ83DXGNyQ6yM92i8cDarXmrpuXNK6GnUY1Q&s" },
    { name: "Guacamole", uri: "https://www.allrecipes.com/thmb/FOHqtfrZVg0WAMdkFE3bnp7SNO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-RM-14064-easy-guacamole-ddmfs-3x4-9e4a1eb1bb34421a99db675b53a29e53.jpg" },
    { name: "Quesadilla", uri: "https://www.simplyrecipes.com/thmb/YXIrmsOBXh5Cc5MAiBJgTaYO_0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Quesadilla-LEAD-1-b8e325610a7c46e1b6b6c2208d7ed4ee.jpg" },
    { name: "Churros", uri: "https://www.allrecipes.com/thmb/zfiXdLbitO4XtOuKobYCmnDoPg4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-03-4x3-a7f6af1860934b0385f84ab9f13f2613.jpg" },
  ];

  return (
    <View style={styles.container}>
      {Object.entries(foods).map(([name, recipe]) => {
        const img = Pics.find((p) => p.name === name)?.uri;
        return <FoodCard key={name} name={name} recipe={recipe} image={img} />;
      })}
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
    width: "42%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  foodImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a085",
    marginBottom: 4,
    textAlign: "center",
  },
  recipe: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },
});
