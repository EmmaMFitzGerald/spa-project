# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    
  emma = Child.create(name: "Emma")

  emma.memories.create(title: "First memory", category: "First category",  child_id: emma.id, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")

  holly = Child.create(name: "Holly")

  holly.memories.create(title: "Second memory", category: "Second category", child_id: holly.id, content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")