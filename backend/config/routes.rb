Rails.application.routes.draw do
  post '/contact', to: 'contact#create'
  post '/login', to: 'sessions#create'
  get '/posts', to: 'posts#index'
end
