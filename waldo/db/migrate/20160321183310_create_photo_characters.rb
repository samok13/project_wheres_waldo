class CreatePhotoCharacters < ActiveRecord::Migration
  def change
    create_table :photo_characters do |t|

      t.timestamps null: false
    end
  end
end
