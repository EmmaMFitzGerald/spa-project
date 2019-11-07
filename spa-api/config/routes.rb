Rails.application.routes.draw do
  resources :memories, except: [:new, :edit]
  resources :children, except: [:new, :edit]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
