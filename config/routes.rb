Rails.application.routes.draw do
  root 'posts#index'
  resources :posts do 
    get :search, on: :collection
  end
  resources :comments, only: %i[create]
  get "up" => "rails/health#show", as: :rails_health_check


end
