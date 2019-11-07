class CreateMemories < ActiveRecord::Migration[6.0]
  def change
    create_table :memories do |t|
      t.string :title
      t.string :category
      t.string :content
      t.belongs_to :child, null: false, foreign_key: true

      t.timestamps
    end
  end
end
