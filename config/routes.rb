Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

# the format: :json option tells the controller to first look for a json builer 
  namespace :api, defaults: {format: :json} do
    resources :pokemon
  end

end
